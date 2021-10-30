import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="cover">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Kesha"
      img="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGh1bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
      tel="158 152 165"
      email="abc@gmai.com"
    />

    <Card
      name="Raj"
      img="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
      tel="858 158 155"
      email="raj@gmai.com"
    />
  </div>,
  document.getElementById("root")
);
