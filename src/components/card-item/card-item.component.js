import React from 'react';
import './card-item.component.css';

export const CardItem = (props) => {
  return <div className="card-item">
    <img className="avatar" src={`https://i.pravatar.cc/150?img=${props.user.name}`} alt="User" />
    <h3>{props.user.name}</h3>
    <p>{props.user.email}</p>
  </div>;
}