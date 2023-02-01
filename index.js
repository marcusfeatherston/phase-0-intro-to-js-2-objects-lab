// Write your solution in this file!
const employee = {
  Name: "Brooke",
  Address: "100 S",
};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  const updatedEmployee = { ...employee };
  updatedEmployee[key] = value;
  return updatedEmployee;
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  const updatedEmployee = employee;
  updatedEmployee[key] = value;
  return updatedEmployee;
};

const deleteFromEmployeeByKey = (employee, key) => {
  const updatedEmployee = { ...employee };
  delete updatedEmployee[key];
  return updatedEmployee;
};

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];
  return employee;
};

console.log(destructivelyDeleteFromEmployeeByKey(employee, "Address"));
