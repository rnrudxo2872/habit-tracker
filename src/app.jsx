import './app.css';
import Habit from './components/habit';
import {useRecoilState} from "recoil"
import { HabitAtom } from './atoms';

function App() {
  const [habits, setHabits] = useRecoilState(HabitAtom);
  
  return (
    <>
      <ul>
        {habits.map((habit,idx) => <Habit title={habit.title} count={habit.count} key={idx} />)}
      </ul>
    </>
  );
}

export default App;
