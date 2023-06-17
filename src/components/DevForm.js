import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const DevForm = (props) => {
  const { addDevProp } = props;
  const [devItem, setDevItem] = React.useState({
    devName: '',
    devLanguage: '',
    devYearsOfExperience: '',
    devSpecialty: '',
    devEmploymentType: '',
    devTitle: '',
    devLocation: '',
    devSalary: '',
    devDateOfBirth: '',
  });

  const handleChange = (e) => {
    setDevItem({
      ...devItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDevProp(devItem);
    setDevItem({
      devName: '',
      devSpecialty: '',
      devEmploymentType: '',
      devLocation: '',
      devSalary: '',
      devDateOfBirth: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-b mb-2 pb-8 flex flex-row flex-wrap gap-6"
    >
      <p className="text-gray-400 text-xl font-semibold tracking-wide text-left w-full">
        ADD NEW DEV
      </p>
      <input
        className="w-1/4 border border-gray-300 rounded-sm py-3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="Developer Name ..."
        value={devItem.devName}
        onChange={handleChange}
        name="devName"
      />
      <input
        className="w-1/3 border border-gray-300 rounded-sm py-3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="Speciality e.g Full Stack, Frontend ..."
        value={devItem.devSpecialty}
        onChange={handleChange}
        name="devSpecialty"
      />
      <input
        className="w-1/4 border border-gray-300 rounded-sm py-3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="Employment Type e.g Freelance, Full Time ..."
        value={devItem.devEmploymentType}
        onChange={handleChange}
        name="devEmploymentType"
      />
      <input
        className="w-1/3 border border-gray-300 rounded-sm py-3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="Location"
        value={devItem.devLocation}
        onChange={handleChange}
        name="devLocation"
      />
      <input
        className="w-1/4 border border-gray-300 rounded-sm py-3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="Salary"
        value={devItem.devSalary}
        onChange={handleChange}
        name="devSalary"
      />
      <input
        className="w-1/4 border border-gray-300 rounded-sm py-3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="Date of Birth"
        value={devItem.devDateOfBirth}
        onChange={handleChange}
        name="devDateOfBirth"
      />
      <button
        className="w-5/6 font-semibold bg-cyan-500 text-white rounded-sm py-2"
        type="submit"
      >
        ADD DEVELOPER
      </button>
    </form>
  );
};

export default DevForm;

DevForm.propTypes = {
  addDevProp: PropTypes.func.isRequired,
};
