import React from 'react';
import './card-list.component.css';
import { CardItem } from '../card-item/card-item.component';

export const CardList = (props) => {
  return <div className="card-list">
    {props.users.map(user => <CardItem key={user.id} user={user} />)}
  </div>;
}