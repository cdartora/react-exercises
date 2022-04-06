import React from 'react';

class TaskList extends React.Component {
  render() {

    const Task = (value, index) => {
      return (
        <li className="task" key={index} >{value}</li>
      );
    }

    const tasks = ['estudar', 'almoçar', 'assistir a aula ao vivo', 'descansar!!', 'surtar um pouquinho'];

    return (
      <ol>
        {
          tasks.map(Task)
        }
      </ol >
    );
  }
};

export default TaskList;




