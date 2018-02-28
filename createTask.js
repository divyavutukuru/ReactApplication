import React from 'react';

class CreateTask extends React.Component{
    render(){
        return(
              <form onSubmit ={this.handleCreatetask.bind(this)}>
                      <input type = "text" placeholder = "Enter your task?"  ref = 'taskEntered' />
                      <button>Create Task</button>
              </form>
        );
    }
    handleCreatetask(event){
      event.preventDefault();
      this.props.create(this.refs.taskEntered.value);
      this.refs.taskEntered.value =" ";

    }
}
export default CreateTask;
