import React, { PureComponent } from "react"
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends PureComponent {
    render() { 
        const {addEvents, habitEvents} = this.props;
        
        return (<>
            <HabitAddForm {...addEvents}/>
            <ul className="habits">
                {
                    this.props.habits.map((habit) => <Habit key={habit.id} habit={habit} {...habitEvents}/>)
                }
            </ul>
        </>)
    }
}
 
export default Habits;