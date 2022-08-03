import React from "react";

import { useDispatch } from "react-redux/es/exports";
import {
  compliteSubTask,
  deleteSubTask,
} from "../../../../../../app/todoSlice";
import IconDelete from "../../../../../../icons/IconDelete";
import IconDone from "../../../../../../icons/IconDone";

function SubTask({ done2, group, task, SubTask }) {
  const dispatch = useDispatch();

  function subTaskdelete() {
    dispatch(
      deleteSubTask({
        taskID: task.id,
        groupID: group.id,
        SubTaskID: SubTask.id,
      })
    );
    done2(SubTask);
  }

  function done() {
    dispatch(
      compliteSubTask({ taskID: task.id, groupID: group.id, SubTask: SubTask })
    );
    done2();
  }

  return (
    <>
      {SubTask.complited ? (
        <div className="subTask_comlited">
          <div onClick={done} className="SubCheckBox_complited">
            <IconDone />
          </div>
          <span className="subTaskContent">{SubTask.text}</span>
          <div onClick={subTaskdelete}>
            <IconDelete />
          </div>
        </div>
      ) : (
        <div className="subTask">
          <div onClick={done} className="SubCheckBox"></div>
          <span className="subTaskContent">{SubTask.text}</span>
        </div>
      )}
    </>
  );
}

export default SubTask;
