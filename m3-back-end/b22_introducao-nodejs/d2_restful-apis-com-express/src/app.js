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

module.exports = app;
