import { Habit } from './components/Habits'
import './styles/global.css'

function App() {
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={30}/>
      <Habit completed={15}/>
      <Habit completed={10}/>
    </div>
  )
}

export default App
