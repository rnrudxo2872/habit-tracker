import React, { PureComponent } from "react"
import Habit from "./habit";

class Habits extends PureComponent {
    render() { 
        return <ul>
            {
                this.props.habits.map((habit) => <Habit key={habit.id} habit={habit} {...this.props.habitEvents}/>)
            }
        </ul>;
    }
}
 
export default Habits;