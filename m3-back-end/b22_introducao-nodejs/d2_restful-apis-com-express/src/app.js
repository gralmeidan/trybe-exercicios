const express = require('express');
const activities = require('../data/activities.json');
const app = express();

app.use(express.json());

app.get('/myActivities/:id', (req, res) => {
  const activity = activities.find(({ id }) => id == req.params.id);
  res.status(activity ? 200 : 404).json({ activity });
});

app.get('/myActivities', (_req, res) => res.status(200).json({ activities }));

app.get('/filter/myActivities', (req, res) => {
  const filtered = activities.filter(
    ({ status }) => req.query.status === status
  );
  res.status(filtered ? 200 : 404).json({ activities: filtered });
});

app.post('/myActivities', (req, res) => {
  const { activity: { status, description } = {} } = req.body;

  if (!description || !status)
    res.status(400).json({
      message: 'No status or description provided',
    });

  const newActivity = {
    id: activities.at(-1).id + 1,
    description,
    status,
  };

  activities.push(newActivity);
  res.status(200).json({ activity: newActivity });
});

app.put('/myActivities/:id', (req, res) => {
  const { activity } = req.body;

  if (!activity?.description && !activity?.status)
    res.status(400).json({
      message: 'No status or description provided',
    });

  for (let i = 0; i < activities.length; i++) {
    if (activities[i].id == req.params.id) {
      const newActivity = {
        ...activities[i],
        ...activity,
      };
      activities[i] = newActivity;
      res.status(200).json({ newActivity });
    }
  }
});

module.exports = app;
