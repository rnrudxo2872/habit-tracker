import { Component } from "react";

class Habit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...props
        }
    }


    render() {
        const {title} = this.state;

        return (
            <li>
                <span>{title}</span>
            </li>
        )
    }
}

export default Habit;