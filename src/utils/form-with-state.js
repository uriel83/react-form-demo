import React, { Component } from "react";

export default function FormWithState(initialState){
    return (FormComponent) =>{

//  export default (initialState) => (FormComponent) => {
        return class FromWithState extends React.Component {
            constructor(props){
                super(props);
                this.state = {};
                for (let key in initialState) {
                    this.state[key] = initialState[key]; 
                }
            }
            updateFormState = (event) =>{
                this.setState({
                    [event.target.name] : event.target.value
                })
            }

            
            render(){
                return(
                    <FormComponent state={this.state} updateFormState={this.updateFormState}/>
                )
            }
        }
  }
}