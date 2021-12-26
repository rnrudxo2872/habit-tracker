import { PureComponent } from "react";

class Habit extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            ...props
        }
    }

    handleIncrement = () => {
        this.props.handleIncrement(this.props.habit);
    }

    handleDecrement = () => {
        this.props.handleDecrement(this.props.habit);
    }

    render() {
        const {name, count} = this.props.habit;
       
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <div>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-square" role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z">
                            </path>
                        </svg>
                    </div>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <div>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus-square" role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor"
                                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM92 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H92z">
                            </path>
                        </svg></div>
                </button>
            </li>
        )
    }
}

export default Habit;