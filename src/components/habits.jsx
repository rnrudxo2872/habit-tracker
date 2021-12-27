import React, { PureComponent } from "react"
import Habit from "./habit";

class Habits extends PureComponent {
    render() { 
        return (<>
            <input type="text" className="habit-insert" placeholder="insert your habit..." />
            <ul className="habits">
                {
                    this.props.habits.map((habit) => <Habit key={habit.id} habit={habit} {...this.props.habitEvents}/>)
                }
            </ul>
        </>)
    }
}
 
export default Habits;