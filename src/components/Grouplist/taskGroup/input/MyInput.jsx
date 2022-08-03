import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addTodo } from "../../../../app/todoSlice";

function MyInput({ idSelected }) {
  const dispatch = useDispatch();

  const [body, setBody] = useState("");

  function Addnew() {
    dispatch(addTodo({ selectedId: idSelected, text: body }));

    setBody("");
  }
  return (
    <div className="inputBar">
      <button className="inputButton" onClick={Addnew} />
      <input
        className="input"
        placeholder=" Add new"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
    </div>
  );
}

export default MyInput;
