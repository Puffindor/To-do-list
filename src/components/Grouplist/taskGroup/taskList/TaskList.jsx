import React from "react";
import TaskItem from "./taskItem/TaskItem";

import { CSSTransition, TransitionGroup } from "react-transition-group";

function TaskList({ groups, group, tasks, title }) {
  return (
    <div>
      <h1 className="Header">
        {title} {tasks.length}
      </h1>

      {tasks.length !== 0 ? <span /> : <span className="Empty">No tasks</span>}

      <TransitionGroup>
        {tasks.map((task) => (
          <CSSTransition key={task.id} timeout={500} classNames="item">
            <TaskItem groups={groups} group={group} task={task} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default TaskList;
