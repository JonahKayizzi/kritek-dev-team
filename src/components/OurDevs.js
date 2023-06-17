import React from 'react';
import DevForm from './DevForm';

const OurDevs = () => {
  const addDevItem = () => {
    //
  };

  let content;

  return (
    <main>
      <DevForm addDevProp={addDevItem} />
      {content}
    </main>
  );
};

export default OurDevs;
