import exp from 'constants';
import React from 'react';

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
    <form onSubmit={handleSubmit}>
      <p>Add New Dev</p>
      <input
        type="text"
        placeholder="Developer Name ..."
        value={devItem.devName}
        onChange={handleChange}
        name="devName"
      />
      <input
        type="text"
        placeholder="Speciality e.g Full Stack, Frontend ..."
        value={devItem.devSpecialty}
        onChange={handleChange}
        name="devSpecialty"
      />
      <input
        type="text"
        placeholder="Employment Type e.g Freelance, Full Time ..."
        value={devItem.devEmploymentType}
        onChange={handleChange}
        name="devEmploymentType"
      />
      <input
        type="text"
        placeholder="Location"
        value={devItem.devLocation}
        onChange={handleChange}
        name="devLocation"
      />
      <input
        type="text"
        placeholder="Salary"
        value={devItem.devSalary}
        onChange={handleChange}
        name="devSalary"
      />
      <input
        type="text"
        placeholder="Date of Birth"
        value={devItem.devDateOfBirth}
        onChange={handleChange}
        name="devDateOfBirth"
      />
    </form>
  );
};

export default DevForm;

DevForm.propTypes = {
  addDevProp: exp.func.isRequired,
};
