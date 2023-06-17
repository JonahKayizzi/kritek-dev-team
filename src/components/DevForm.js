import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const DevForm = (props) => {
  const { addDevProp } = props;
  const [devItem, setDevItem] = React.useState({
    name: '',
    position: '',
    specialty: '',
    type: '',
    location: '',
    salary: '',
    dob: '',
    contact: '',
    email: '',
    photo: '',
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
      className="border-b mb-1 pb-5 flex flex-row flex-wrap gap-4"
    >
      <p className="text-gray-400 text-xl font-semibold tracking-wide text-left w-full">
        ADD NEW DEV
      </p>
      <input
        className="w-1/5 border border-gray-300 rounded-sm py-3 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="Name ..."
        value={devItem.name}
        onChange={handleChange}
        name="name"
      />
      <select
        className="w-1/6 border border-gray-300 rounded-sm py-3 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={devItem.specialty}
        onChange={handleChange}
        name="specialty"
      >
        <option value="">Specialty</option>
        <option value="Full Stack">Full Stack</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Mobile Development">Mobile Development</option>
      </select>
      <input
        className="w-1/6 border border-gray-300 rounded-sm py-3 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="Position ..."
        value={devItem.position}
        onChange={handleChange}
        name="position"
      />
      <select
        className="w-1/5 border border-gray-300 rounded-sm py-3 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={devItem.type}
        onChange={handleChange}
        name="type"
      >
        <option value="">Employment Type</option>
        <option value="Freelance">Freelance</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>
      <input
        className="w-1/6 border border-gray-300 rounded-sm py-3 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="Location"
        value={devItem.location}
        onChange={handleChange}
        name="location"
      />
      <input
        className="w-1/6 border border-gray-300 rounded-sm py-3 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="Salary"
        value={devItem.salary}
        onChange={handleChange}
        name="salary"
      />
      <input
        className="w-1/6 text-xs border border-gray-300 rounded-sm py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="date"
        placeholder="Date of Birth"
        value={devItem.dob}
        onChange={handleChange}
        name="dob"
      />
      <input
        className="w-1/6 border border-gray-300 rounded-sm py-3 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="Contact"
        value={devItem.contact}
        onChange={handleChange}
        name="contact"
      />
      <input
        className="w-1/6 border border-gray-300 rounded-sm py-3 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="Email"
        value={devItem.email}
        onChange={handleChange}
        name="email"
      />
      <input
        className="w-1/6 border border-gray-300 rounded-sm py-3 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        type="text"
        placeholder="Photo Link"
        value={devItem.photo}
        onChange={handleChange}
        name="photo"
      />
      <button
        className="font-semibold bg-cyan-500 text-white rounded-sm py-2 px-3 hover:bg-cyan-600 focus:outline-none focus:shadow-outline"
        type="submit"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};

export default DevForm;

DevForm.propTypes = {
  addDevProp: PropTypes.func.isRequired,
};
