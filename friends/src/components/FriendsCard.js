import React from "react";

export default function FriendsCard(props) {
    return (
      <div key={props.id}>
        <h2>Name: {props.name}</h2>
        <h2>Age: {props.age}</h2>
        <h2>Email: {props.email}</h2>
      </div>
    );
  }