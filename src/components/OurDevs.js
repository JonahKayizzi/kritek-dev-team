import React from 'react';
import DevForm from './DevForm';

const OurDevs = () => {
  const addDevItem = () => {
    console.log('Add Dev Item');
  };

  let content;

  return (
    <main className="flex flex-col py-6 bg-gray-50 px-24 shadow-lg shadow-slate-300">
      <DevForm addDevProp={addDevItem} />
      {content}
    </main>
  );
};

export default OurDevs;
