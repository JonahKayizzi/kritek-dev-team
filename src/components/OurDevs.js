import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TwinSpin } from 'react-cssfx-loading';
import { useGetDevsQuery } from '../redux/apiSlice';
import DevForm from './DevForm';

const OurDevs = () => {
  const addDevItem = () => {
    console.log('Add Dev Item');
  };

  const {
    data: devs,
    error,
    isLoading,
    isSuccess,
    isError,
  } = useGetDevsQuery();

  let content;
  if (isLoading) {
    content = (
      <div className="flex flex-col items-center">
        <TwinSpin />
      </div>
    );
  } else if (isSuccess) {
    console.log(devs);
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <main className="flex flex-col py-6 bg-gray-50 px-24 shadow-lg shadow-slate-300">
      <DevForm addDevProp={addDevItem} />
      {content}
    </main>
  );
};

export default OurDevs;
