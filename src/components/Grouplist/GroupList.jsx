import React from "react";

import { useState } from "react";
import GroupPlate from "./groupPlate/GroupPlate";
import GroupInput from "./groupInput/GroupInput";
import { useSelector } from "react-redux";
import TaskGroup from "./taskGroup/TaskGroup";

function GroupList() {
  const groups = useSelector((state) => state.todos);

  const [sel, setSel] = useState(10);

  function selected(group) {
    setSel(group.id);
  }

  return (
    <>
      <div className="Wrapper">
        <section>
          <GroupInput />
          {groups.map((group) => (
            <GroupPlate
              selected={selected}
              id={sel}
              group={group}
              key={group.id}
            />
          ))}
        </section>
        <hr className="TaskGroupHr" />
        {groups.map((group) => (
          <TaskGroup groups={groups} id={sel} group={group} key={group.id} />
        ))}
      </div>
    </>
  );
}

export default GroupList;
