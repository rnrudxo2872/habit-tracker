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

    handleDelete = () => {
        this.props.handleDelete(this.props.habit);
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
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <div>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" role="img"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                            >
                            <path fill="currentColor"
                                d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                                ></path>
                        </svg>
                    </div>
                </button>
            </li>
        )
    }
}

export default Habit;