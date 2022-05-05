import logo from './logo.svg';
import './App.css';

const compromissos = [
  'Lorem',
  'Ipsum',
  'Dolor',
  'Sit',
  'Amet'
]

const Task = (value) => {
  return (
    <li>{value}</li>
  )
}

function App() {
  return compromissos.map(value => Task(value));
}

export default App;
