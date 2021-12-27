import React from "react"

class HabitAddForm extends React.PureComponent {
    state = {
        text:""
    }

    handleInput = (event) => {
        const {value} = event.currentTarget;
        this.setState((curText) => ({...curText,text:value}));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {text} = this.state;
        const {handleSubmit} = this.props;

        if(handleSubmit(text)) {
            this.setState({text:''});
            return;
        }
    }

    render() {
        const {
            text
        } = this.state;

        return (
            <>
                <form action="" className="add-form" onSubmit={this.handleSubmit}>
                    <input type="text" className="add-input" placeholder="insert your habit..." value={text} onInput={this.handleInput}/>
                    <button className="add-button">Add</button>
                </form>
            </>
        )
    }
}

export default HabitAddForm;