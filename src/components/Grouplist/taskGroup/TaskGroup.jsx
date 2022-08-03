import React from "react";
import MyInput from "./input/MyInput";

import TaskList from "./taskList/TaskList";

function TaskGroup({ groups, group, id }) {
  const title1 = "Tasks -";
  const title2 = "Complited -";

  return (
    <div>
      <section className="a">
        {group.id === id && (
          <div>
            <h1 className="GroupHeader">{group.title}</h1>

            <MyInput idSelected={id} />
            <TaskList
              groups={groups}
              group={group}
              tasks={group.task}
              title={title1}
            />
            <TaskList
              groups={groups}
              group={group}
              tasks={group.taskComplited}
              title={title2}
            />
          </div>
        )}
      </section>
    </div>
  );
}

export default TaskGroup;
