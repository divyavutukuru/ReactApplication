import React from 'react';
import Tasks_list_header from './tasks_list_header.js';
import Tasks_list_item from './tasks_list_item.js';
class Tasks_list extends React.Component{
  renderItems(){
   //console.log(this.props.tasks_todos);

       return (
                    <tbody>
                        {this.props.tasks_todos.map((todosComponent,index)=> <Tasks_list_item key = {index} componentData = {todosComponent}
                          toggletask ={ this.props.toggletask}
                          saveTask={this.props.saveTask}
                          deleteTask={this.props.deleteTask} />)}
                     </tbody>
        );
    }
      render(){
    return(
      <table>
                <Tasks_list_header />
                    <tr>
                      {this.renderItems()}
                      </tr>

      </table>
    );
  }
}
export default Tasks_list;
