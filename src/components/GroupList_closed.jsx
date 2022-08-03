import React from "react";
import { useState } from "react";

function GroupList_closed() {
  const [selected, setSelected] = useState(false);
  console.log(selected);
  return (
    <>
      {selected ? (
        <div className="GroupPlate_closed_selected">
          <span
            onClick={(selected) => setSelected(!selected)}
            className="TaskGroupString"
          >
            5/6
          </span>
        </div>
      ) : (
        <div className="GroupPlate_closed">
          <span
            onClick={(selected) => setSelected(!selected)}
            className="TaskGroupString"
          >
            5/6
          </span>
        </div>
      )}
    </>
  );
}

export default GroupList_closed;
