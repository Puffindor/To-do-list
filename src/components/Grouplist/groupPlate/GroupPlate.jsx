import React from "react";

import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { useDispatch } from "react-redux/es/exports";
import { deleteGroup, editeGroup } from "../../../app/todoSlice";

import ArrowIcon from "../../../icons/ArrowIcon";
import IconDelete from "../../../icons/IconDelete";
import IconDone from "../../../icons/IconDone";
import IconEdite from "../../../icons/IconEdit";

function GroupPlate({ group, selected, id }) {
  const dispatch = useDispatch();
  const [openDrop, setopenDrop] = useState("55px");
  const [openPlate, setopenPlate] = useState("80px");
  const [open, setopen] = useState(false);
  const [ed, setEd] = useState(false);
  const [editeInput, SetediteInput] = useState(group.title);
  function drop() {
    setopen(!open);
    if (openDrop === "55px") {
      setopenDrop("130px");
      setopenPlate("170px");
    } else {
      setopenDrop("55px");
      setopenPlate("80px");
    }
  }

  function deleteGroup1() {
    dispatch(deleteGroup({ groupID: group.id }));
  }

  function editeGroup1() {
    dispatch(editeGroup({ title: editeInput, groupID: group.id }));
    setEd(!ed);
  }

  function select() {
    selected(group);
  }

  return (
    <>
      {group.edit === true ? (
        <div>asdasdasd</div>
      ) : (
        <>
          {" "}
          {group.id === id ? (
            <section>
              <div>
                <div
                  style={{ height: openPlate }}
                  className="TaskGroup_selected"
                >
                  <div
                    onClick={drop}
                    style={{ height: openDrop }}
                    className="ArrowContainer"
                  >
                    <div className="iconContainer">
                      <ArrowIcon />
                    </div>
                    <CSSTransition
                      in={open}
                      classNames="ico"
                      timeout={200}
                      mountOnEnter
                      unmountOnExit
                    >
                      <div onClick={editeGroup1} className="iconContainer">
                        <IconEdite />
                      </div>
                    </CSSTransition>
                    <CSSTransition
                      unmountOnExit
                      in={open}
                      classNames="ico"
                      timeout={200}
                    >
                      <div onClick={deleteGroup1} className="iconContainer">
                        <IconDelete />
                      </div>
                    </CSSTransition>
                  </div>
                  <span onClick={select} className="TaskGroupString2">
                    {ed === false ? (
                      <div>{group.title}</div>
                    ) : (
                      <div className="group_input_container">
                        <input
                          className="group_input"
                          type="text"
                          value={editeInput}
                          onChange={(e) => SetediteInput(e.target.value)}
                        />
                        <div
                          onClick={editeGroup1}
                          className="icon_container_group_input"
                        >
                          <IconDone />
                        </div>
                      </div>
                    )}
                  </span>

                  <hr className="GroupHr" />
                  <div className="TaskGroupString">
                    {group.taskComplited.length}/
                    {group.taskComplited.length + group.task.length}
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <section>
              <div>
                <div style={{ height: openPlate }} className="TaskGroup">
                  <div
                    onClick={drop}
                    style={{ height: openDrop }}
                    className="ArrowContainer"
                  >
                    <div className="iconContainer">
                      <ArrowIcon />
                    </div>
                    <CSSTransition
                      in={open}
                      classNames="ico"
                      timeout={200}
                      mountOnEnter
                      unmountOnExit
                    >
                      <div className="iconContainer">
                        <IconEdite />
                      </div>
                    </CSSTransition>
                    <CSSTransition
                      unmountOnExit
                      in={open}
                      classNames="ico"
                      timeout={200}
                    >
                      <div onClick={deleteGroup1} className="iconContainer">
                        <IconDelete />
                      </div>
                    </CSSTransition>
                  </div>
                  <span onClick={select} className="TaskGroupString2">
                    {ed === false ? (
                      <div>{group.title}</div>
                    ) : (
                      <div className="group_input_container">
                        <input
                          className="group_input"
                          type="text"
                          value={editeInput}
                          onChange={(e) => SetediteInput(e.target.value)}
                        />
                        <div
                          onClick={editeGroup1}
                          className="icon_container_group_input"
                        >
                          <IconDone />
                        </div>
                      </div>
                    )}
                  </span>
                  <hr className="GroupHr" />
                  <div className="TaskGroupString">
                    {group.taskComplited.length}/
                    {group.taskComplited.length + group.task.length}
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}

export default GroupPlate;
