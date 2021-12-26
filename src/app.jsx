import React from 'react';
import Habits from './components/habits';
import './app.css';

class App extends React.Component {
  state = {
    habits: [
        {id:"tracker-1" , name:"coding", count:0},
        {id:"tracker-2" , name:"sport", count:0},
        {id:"tracker-3" , name:"walk", count:0},
        {id:"tracker-4" , name:"running", count:0},
    ]
  }

  onIncrement = (habit) => {
      const habits = this.state.habits.map((curHabit) => {
          if(curHabit.id === habit.id) {
              return {...curHabit, count:++curHabit.count}
          }
          return curHabit;
      });
      this.setState({habits})
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
      this.setState({habits});
  }

  habitEvents = {
    handleIncrement:this.onIncrement,
    handleDecrement:this.onDecrement
  }

  render() {
    return ( 
      <Habits habits={this.state.habits} {...this.habitEvents}/>
    )
  }
}

export default App;
