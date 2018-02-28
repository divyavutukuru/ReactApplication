import React from 'react';

class Tasks_list_item extends React.Component{
  constructor(props){
      super(props);
      this.state ={
        isEditing : false
      }
      //this.toggleTask = this.props.toggleTask.bind(this);
  }
/*  propTypes: {
        onClick: React.PropTypes.func.isRequired,
        isSelected: React.PropTypes.bool
    };*/

        renderTaskSection(){
          const{task,isCompleted} = this.props.componentData;
          var taskStyles ={
                  color: isCompleted ? 'green' : 'red',
                  cursor: 'pointer'
          }
          if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput" />
                    </form>
                </td>
            );
        }
          return(
                  <td style = {taskStyles}
                         onClick= {this.props.toggletask.bind(this,this.props.componentData.task)}>
                         {this.props.componentData.task}</td>
          );
        }
        renderActionsSelection(){
                if(this.state.isEditing){
                        return(
                          <td>
                                  <button onClick={this.onSaveClick.bind(this)}>Save</button>
                                  <button onClick ={this.onCancel.bind(this)}>Cancel</button>
                          </td>
                        );
                }
                return(
                      <td>
                              <button onClick={this.onEditClick.bind(this)}>Edit</button>
                              <button onClick={this.props.deleteTask.bind(this,this.props.componentData.task)}>Delete</button>
                        </td>
                );

        }
        render(){
          return(
            <tr>
                     {this.renderTaskSection()}
                    {this.renderActionsSelection()}
            </tr>
          );
        }
        onEditClick(){
        this.setState({ isEditing:true });
        }

        onCancel(){
          this.setState({isEditing:false});
        }
        onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.componentData.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }

    /*deleteTask(event){
      event.preventDefault();
      const taskToDelete = this.props.componentData.task;
      const index = this.props.key;
      this.props.deleteTask(taskToDelete,index);
    }*/

}
export default Tasks_list_item;
