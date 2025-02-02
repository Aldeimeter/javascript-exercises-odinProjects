const findTheOldest = function (people) {
  function getAge(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  }
  return people
    .map((person) => ({
      ...person,
      age: getAge(person.yearOfBirth, person.yearOfDeath),
    }))
    .sort((a, b) => b.age - a.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
