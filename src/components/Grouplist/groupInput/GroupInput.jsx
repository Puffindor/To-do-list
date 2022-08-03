import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux/es/exports";
import PlusIcon from "../../../icons/PlusIcon";
import { addGroup } from "../../../app/todoSlice";

function GroupInput() {
  const [Inputclass, setInputclass] = useState("GroupInputContainer");
  const [Inputclass1, setInputclass1] = useState("InputContainer");
  const [NewGroup, setNewGroup] = useState("");
  const dispatch = useDispatch();

  function OpenInput() {
    if (Inputclass === "GroupInputContainer") {
      setInputclass("GroupInputContainer_active");
      setInputclass1("InputContainer_active");
    } else {
      setInputclass("GroupInputContainer");
    }
  }

  function addNewGroup() {
    dispatch(addGroup({ title: NewGroup }));
    setNewGroup("");
  }

  return (
    <div>
      <div className={Inputclass}>
        <span>Task Lists</span>
        <div onClick={OpenInput} className="AddNewButton">
          <PlusIcon />
        </div>

        {Inputclass === "GroupInputContainer_active" ? (
          <div className={Inputclass1}>
            <input
              value={NewGroup}
              onChange={(e) => setNewGroup(e.target.value)}
              className="GroupInput"
              placeholder="Add new Task group"
            />
            <div onClick={addNewGroup} className="IconContainer">
              <svg
                fill="#FF8B03"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z" />
              </svg>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <section></section>
    </div>
  );
}

export default GroupInput;
