import { useState } from "react";
import React from "react";

import CustomInput from "./customInput/CustomInput";
import SubTask from "./subTask/SubTask";
import { useDispatch } from "react-redux/es/exports";
import {
  addSubtask,
  compliteTodo,
  deleteTodo,
} from "../../../../../app/todoSlice";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ArrowIcon from "../../../../../icons/ArrowIcon";
import IconDone from "../../../../../icons/IconDone";
import IconDelete from "../../../../../icons/IconDelete";
import IconEdite from "../../../../../icons/IconEdit";
import PlusIcon from "../../../../../icons/PlusIcon";

function TaskItem({ group, task }) {
  const dispatch = useDispatch();
  const [subTasksDone, SetsubTasksDone] = useState([]);

  const [subTaskInput, SetsubTaskInput] = useState("");
  const [openM, setOpenM] = useState("menu");
  const [openI, setOpenI] = useState("icons");
  const [openInp, setOpenInp] = useState(false);
  const [openMenu, SetopenMenu] = useState(false);
  const [openInput, SetopenInput] = useState(false);

  function done1(SubTask) {
    SetsubTasksDone(task.SubTasks.filter((el) => el.complited === true));
    if (SubTask) {
      SetsubTasksDone(subTasksDone.filter((el) => el.id !== SubTask.id));
    }
  }

  function AddsubTask() {
    if (subTaskInput) {
      dispatch(
        addSubtask({ text: subTaskInput, idGroup: group.id, id: task.id })
      );
      setOpenInp(false);
      SetsubTasksDone(task.SubTasks.filter((el) => el.complited === true));
      SetsubTaskInput("");
    }
  }

  function opI() {
    setOpenInp(!openInp);
  }

  function op() {
    SetopenMenu(!openMenu);
    if (openI === "icons_active") {
      setOpenM("menu");
      setOpenI("icons");
    } else {
      setOpenM("menu_active");
      setOpenI("icons_active");
    }
  }

  function taskEditstate() {
    SetopenInput(true);
  }

  function taskDone() {
    if (task.isDone === false) {
      dispatch(compliteTodo({ groupID: group.id, id: task }));
    }
  }

  function deleteTask() {
    dispatch(deleteTodo({ groupID: group.id, task: task }));
  }

  let cl3 = "taskContent";
  let cl2 = 0;
  let cl1 = "checkbox";
  if (task.isDone === true) {
    cl1 = "checkboxDone";
    cl2 = 1;
    cl3 = "taskContent";
  }
  return (
    <div className="b">
      <section className="task">
        {openInput === true ? (
          <CustomInput SetopenInput={SetopenInput} group={group} task={task} />
        ) : (
          <div
            className="task_coplited"
            style={{ display: "flex", alignItems: "center", marginTop: "10px" }}
          >
            <div className="CheckboxContainer">
              <div onClick={taskDone} className={cl1}>
                <IconDone opacity={cl2} />
              </div>
            </div>

            <div className={cl3}>
              <span className="textConstainer">{task.text}</span>
            </div>

            {task.isDone === false ? (
              <div className={openM}>
                <div className="icon_container2" onClick={op}>
                  <ArrowIcon />
                </div>

                <>
                  <CSSTransition
                    in={openMenu}
                    classNames="ico"
                    timeout={200}
                    mountOnEnter
                    unmountOnExit
                    delay={500}
                  >
                    <div className="icon_container1" onClick={deleteTask}>
                      <IconDelete />
                    </div>
                  </CSSTransition>

                  <CSSTransition
                    in={openMenu}
                    classNames="ico"
                    timeout={200}
                    mountOnEnter
                    unmountOnExit
                  >
                    <div className="icon_container1" onClick={taskEditstate}>
                      <IconEdite />
                    </div>
                  </CSSTransition>
                  <CSSTransition
                    in={openMenu}
                    classNames="ico"
                    timeout={200}
                    mountOnEnter
                    unmountOnExit
                  >
                    <div className="icon_container1" onClick={opI}>
                      <PlusIcon />
                    </div>
                  </CSSTransition>
                </>
              </div>
            ) : (
              <div className="icon_container3" onClick={deleteTask}>
                <IconDelete />
              </div>
            )}
          </div>
        )}

        <TransitionGroup>
          {openInp && (
            <CSSTransition
              in={openInp}
              classNames="ico"
              timeout={500}
              mountOnEnter
              unmountOnExit
            >
              <section className="subTaskInputContainer">
                <input
                  className="subTaskInput"
                  placeholder="Add new subtask"
                  value={subTaskInput}
                  onChange={(e) => SetsubTaskInput(e.target.value)}
                />
                <div onClick={AddsubTask} style={{ fill: "#FF8B03" }}>
                  <IconDone />
                </div>
              </section>
            </CSSTransition>
          )}
        </TransitionGroup>
      </section>

      {task.SubTasks.length > 0 && (
        <div className="subTaskPlalte">
          <span className="subTaskPlalteText">
            {subTasksDone.length}/{task.SubTasks.length} Done
          </span>
        </div>
      )}
      <TransitionGroup>
        {task.SubTasks.map((sub) => (
          <CSSTransition
            key={sub.id}
            timeout={500}
            classNames="item"
            mountOnEnter
          >
            <SubTask
              SetsubTasksDone={SetsubTasksDone}
              done2={done1}
              group={group}
              task={task}
              SubTask={sub}
              key={sub.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default TaskItem;
