import React, { useContext } from "react";
import { MyContext } from "../MyContext";

const DisplayBox = () => {
  const {groupingValue , setGroupingValue , setShowDisplayBox , orderingValue , setOrderingValue} = useContext(MyContext) ;
  return (
    <div className="display-box">
      <div className="grouping">
        <span>Grouping</span>
        <select className="navbar-button" value={groupingValue} onChange={
          (e) => {setGroupingValue(e.target.value)
          setShowDisplayBox(false) ;
          }}>
          <option value="Status">Status</option>
          <option value="User">User</option>
          <option value="Priority">Priority</option>
        </select>
      </div>
      <div className="ordering">
        <span>Ordering</span>
        <select value={orderingValue} onChange={
          (e) => {setOrderingValue(e.target.value)
          setShowDisplayBox(false) ;
          }} className="navbar-button">
          <option value="Priority">Priority</option>
          <option value="Title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default DisplayBox;
