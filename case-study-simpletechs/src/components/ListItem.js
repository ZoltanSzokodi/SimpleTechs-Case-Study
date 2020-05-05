import React from 'react';

const ListItem = ({ person, addPaycheck, savings }) => {
  return (
    <li
      className={
        person.hasEnoughSavings(savings) ? 'list-item alert' : 'list-item'
      }>
      <span>{`name: ${person.getName()}`}</span>
      <span>{`age: ${person.getAge()}`}</span>
      <button onClick={() => addPaycheck(person.getID())}>add paycheck</button>
    </li>
  );
};

export default ListItem;
