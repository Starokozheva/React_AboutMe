import React from 'react';

function Experience(props) {
  const { exp1, exp2, exp3 } = props;

  return (
    <div className='list'>
      <p>{exp1}</p>
      <p>{exp2}</p>
      <p>{exp3}</p>
    </div>
  )
}

export default Experience;