import React from 'react';
import CreateTask from './createTask.js';
import Tasks_list from './tasks_list.js';


const task_todos = [
      {
        task : 'task1',
        isCompleted:true
      },
      {
        task:'task2',
        isCompleted:false
      }
];
class App extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        tasks_todos : task_todos
      }
    //  this.toggletask = this.toggletask.bind(this);
    }
   render() {
      return (
         <div>
            <h1>ToDo App using React</h1>
            <CreateTask create ={this.create.bind(this)} />
            <Tasks_list
                  tasks_todos = {this.state.tasks_todos}
                  toggletask = {this.toggletask.bind(this)}
                  saveTask={this.saveTask.bind(this)}
                  deleteTask={this.deleteTask.bind(this)}/>

         </div>
      );
   }


   create(task,isCompleted){
      this.state.tasks_todos.push({
         task:task,
         isCompleted:false
      });
      this.setState({tasks_todos:this.state.tasks_todos});
   }

   toggletask(task){
    for(var  i in this.state.tasks_todos){
       if(this.state.tasks_todos[i].task === task){
        var foundTask = this.state.tasks_todos[i];
        //   foundTask.isCompleted = ! (foundTask.isCompleted);
           this.state.tasks_todos[i].isCompleted = !(foundTask.isCompleted);
            this.setState({tasks_todos:this.state.tasks_todos});
         }
      }
        }

   saveTask(oldTask, newTask) {
     for(var  i in this.state.tasks_todos){
        if(this.state.tasks_todos[i].task === oldTask){
            const foundTask = newTask;
            this.state.tasks_todos[i].task = foundTask;
              this.setState({ tasks_todos: this.state.tasks_todos });
        }

      }
    }

    deleteTask(taskToDelete) {
      for(var  i in this.state.tasks_todos){
         if(this.state.tasks_todos[i].task === taskToDelete){
          var indexToDelete = this.state.tasks_todos.indexOf(taskToDelete);
          const newState = this.state.tasks_todos.slice();
          if (indexToDelete = -1) {
              newState.splice(indexToDelete, 1);
              this.setState({tasks_todos: newState})
            }
          console.log(indexToDelete);
        }
       }

    }

}
export default App;
