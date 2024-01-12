import React from "react";

function Information(props) {
    const { myName, address, email, number } = props;
  return (
    <div id="mylist">
        <h1 id="myname">{myName}</h1>
        <p>{address}</p>
        <p>{email}</p>
        <p>{number}</p>
    </div>
  )
}

export default Information;