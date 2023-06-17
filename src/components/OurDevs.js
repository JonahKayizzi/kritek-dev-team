import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TwinSpin } from 'react-cssfx-loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  useGetDevsQuery,
  useAddDevMutation,
  useUpdateDevMutation,
  useDeleteDevMutation,
} from '../redux/apiSlice';
import DevForm from './DevForm';

const OurDevs = () => {
  const [updatedSalary, setUpdatedSalary] = React.useState('');

  const onSalaryChange = (e) => {
    setUpdatedSalary(e.target.value);
  };

  const {
    data: devs,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetDevsQuery();
  const [addDev] = useAddDevMutation();
  const [updateDev] = useUpdateDevMutation();
  const [deleteDev] = useDeleteDevMutation();

  const handleSalaryUpdate = (event, dev) => {
    event.preventDefault();
    updateDev({ ...dev, salary: updatedSalary });
  };

  const addDevItem = (devItem) => {
    addDev(devItem);
  };

  const age = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let ageNow = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      ageNow -= 1;
    }
    return ageNow;
  };

  let content;
  if (isLoading) {
    content = (
      <li className="flex flex-col items-center">
        <TwinSpin />
      </li>
    );
  } else if (isSuccess) {
    content = devs.map((dev) => (
      <li
        className="bg-white border border-gray-300 rounded-sm flex p-4 justify-between"
        key={dev.id}
      >
        <div className="w-1/2 flex flex-col text-left">
          <p className="text-sm font-semibold opacity-50">{dev.position}</p>
          <p className="text-xl font-semibold">{dev.name}</p>
          <p className="text-sm font-light text-cyan-500">{dev.specialty}</p>
          <ul className="flex gap-1 justify-start mt-1 p-0">
            <li className="border-r border-gray-200">
              <span className="text-sm mr-2 pl-0 bg-white text-cyan-500 font-thin">
                {dev.type}
              </span>
            </li>
            <li className="border-r border-gray-200">
              <span className="text-sm mx-2 pl-0 bg-white text-cyan-500 font-thin">
                {dev.email}
              </span>
            </li>
            <li>
              <span className="text-sm mx-2 pl-0 bg-white text-cyan-500 font-thin">
                {dev.contact}
              </span>
            </li>
          </ul>
        </div>
        <div className="w-1/4 flex items-center text-center border-r border-gray-200 gap-2">
          <img
            src={dev.photo}
            alt={dev.name}
            className="w-20 h-20 rounded-full"
          />
          <div>
            <p className="text-lg font-semibold text-black">
              {`${age(dev.dob)} Yrs`}
            </p>
            <p className="text-sm text-gray-500">{dev.location}</p>
          </div>
        </div>
        <div className="w-1/4 flex gap-4">
          <div className="w-2/3 text-left pl-3">
            <p className="text-sm font-semibold opacity-50">Salary</p>
            <form
              onSubmit={(e) => handleSalaryUpdate(e, dev)}
              className="flex flex-col gap-1 text-md font-thin mt-1"
            >
              <input
                type="text"
                onChange={onSalaryChange}
                className="p-1"
                placeholder={dev.salary}
              />
              <button
                className="bg-cyan-500 text-xs h-8 rounded-sm text-white hover:bg-cyan-600"
                type="submit"
              >
                UPDATE SALARY
              </button>
            </form>
          </div>
          <button
            className="w-1/4 bg-red-600 text-white rounded-sm hover:bg-red-700"
            type="button"
            onClick={() => deleteDev({ id: dev.id })}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </li>
    ));
  } else if (isError) {
    content = <li>{error.error}</li>;
  }

  return (
    <ul className="flex flex-col gap-5 py-4 bg-gray-50 px-24 shadow-lg shadow-slate-300">
      <DevForm addDevProp={addDevItem} />
      {content}
    </ul>
  );
};

export default OurDevs;
