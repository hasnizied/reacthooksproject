import React from "react";

const Moviecard = (props) => {
  return (
    <>
      <div>
        <h1>title : {props.title}</h1>
        <p> description : {props.description}</p>
        <p> posterurl : {props.posterurl}</p>
        <p> rating : {props.rating}</p>
      </div>
    </>
  );
};

export default Moviecard;