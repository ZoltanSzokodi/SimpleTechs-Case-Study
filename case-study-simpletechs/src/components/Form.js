import React from 'react';

const Form = ({ handleSubmit, handleFormChange, person: { name, age } }) => {
  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-inputs'>
          <input
            className='input'
            onChange={handleFormChange}
            value={name}
            name='name'
            placeholder='add name...'
            required
          />
          <input
            className='input'
            onChange={handleFormChange}
            value={age}
            name='age'
            placeholder='add age...'
            required
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
