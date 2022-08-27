import './App.css'
import { Title } from '@mantine/core';
import NavLinks from './components/NavLinks';

function App() {

  return (
    <div className="App">
      <Title order={1}>Banking Bay</Title>
      <NavLinks/>
    </div>
  )
}

export default App
