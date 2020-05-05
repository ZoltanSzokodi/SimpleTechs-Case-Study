import React from 'react';

import ListItem from './ListItem';

const List = ({ addPaycheck, persons, savings }) => {
  return (
    <div>
      <ul className='list'>
        {persons.length > 0 &&
          persons.map(person => (
            <ListItem
              key={person.getID()}
              person={person}
              addPaycheck={addPaycheck}
              savings={savings}
            />
          ))}
      </ul>
    </div>
  );
};

export default List;
