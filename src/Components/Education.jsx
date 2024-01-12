import React from 'react';

function Education(props) {
    const { first, second, third } = props;
  return (
    <div className='list'>
        <p>{first}</p>
        <p>{second}</p>
        <p>{third}</p>
    </div>
  )
}

export default Education;