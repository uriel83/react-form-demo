import React from "react";

export default class RenderProps extends React.Component{
    constructor(props){
        super(props);
        this.state = props.initialState
    }

    updateFormState = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.callBack(this.state);
    }

    render(){
        return this.props.render(this.updateFormState, this.handleSubmit, this.state)
    }
}