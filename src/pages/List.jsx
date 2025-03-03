import { useState, useEffect } from "react";
function List(props) {
  return (
    <>
      <div className="card">
        <div className="card-inner">
          <div className="card-title">{props.data.title}</div>
          <div className="card-detail">{props.data.summary}</div>
        </div>
      </div>
    </>
  );
}

export default List;
