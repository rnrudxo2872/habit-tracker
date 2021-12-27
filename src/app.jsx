import React, { Profiler } from 'react';
import Habits from './components/habits';
import './app.css';
import NavBar from './components/navbar';

class App extends React.Component {
  state = {
    habits: [
        {id:"tracker-1" , name:"coding", count:0},
        {id:"tracker-2" , name:"sport", count:0},
        {id:"tracker-3" , name:"walk", count:0},
        {id:"tracker-4" , name:"running", count:0},
    ],
  }

  onIncrement = (habit) => {
      const habits = this.state.habits.map((curHabit) => {
          if(curHabit.id === habit.id) {
              return {...curHabit, count:++curHabit.count}
          }
          return curHabit;
      });
      this.setState((curHabits) => ({...curHabits, habits}))
  }

  onDecrement = (habit) => {
      const habits = this.state.habits.map((curHabit) => {
          if(curHabit.id === habit.id) {
              if(curHabit.count - 1 < 0) {
                  return curHabit;
              }
              return {...curHabit, count:--curHabit.count}
          }
          return curHabit
      })
      this.setState((curHabits) => ({...curHabits, habits}));
  }

  onDelete = (habit) => {
    const habits = this.state.habits.filter((curHabit) => habit.id !== curHabit.id);
    this.setState((curHabits) => ({...curHabits, habits}));
  }

  onSubmit = (text) => {
    if(text.length === 0) return false;
    
    const {habits} = this.state;
    const result = [...habits, {id:`tracker-${habits.length+1}`, name:text, count:0}];

    this.setState((curHabits) => ({...curHabits, habits:result}));
    return true;
  }

  habitEvents = {
    handleIncrement:this.onIncrement,
    handleDecrement:this.onDecrement,
    handleDelete:this.onDelete
  }

  addEvents = {
    handleSubmit:this.onSubmit
  }

  events = {
    habitEvents: this.habitEvents,
    addEvents: this.addEvents
  }

  render() {
    return ( 
      <>
        <NavBar totalCount={this.state.habits.filter(habit => habit.count > 0).length}/>
        <Profiler id='habit-profiler' onRender={(actualDuration, baseDuration) => {
          console.log('')
          console.log('----------------------------')
          console.log(`actualDuration : ${actualDuration}`);
          console.log(`baseDuration : ${baseDuration}`);
          console.log('----------------------------')
          console.log('')
          }}>
          <Habits habits={this.state.habits} {...this.events}/>
        </Profiler>
      </>
    )
  }
}

export default App;
