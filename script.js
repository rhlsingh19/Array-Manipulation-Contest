let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
    { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
    { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 },
  ];
  
  const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print all developers from the array whose salary is above the average salary of the array.
  function PrintHighEarningDevelopers() {
    const averageSalary = arr.reduce((sum, person) => sum + person.salary, 0) / arr.length;
    const highEarningDevelopers = arr.filter(person => person.profession === 'developer' && person.salary > averageSalary);
    console.log(highEarningDevelopers);
  }
  
  // 2. Using a recursive function, add a new data object to the array until the user says 'no' via a prompt.
  function recursiveAddData() {
    const newData = { name: prompt("Enter name:"), age: parseInt(prompt("Enter age:")), profession: prompt("Enter profession:") };
    arr.push(newData);
    const userInput = prompt("Do you want to add another data? (yes/no)").toLowerCase();
    if (userInput === 'yes') {
      recursiveAddData();
    }
  }
  
  // 3. Remove the youngest and oldest person from the array.
  function removeYoungestAndOldest() {
    const sortedArr = [...arr].sort((a, b) => a.age - b.age);
    arr = arr.filter(person => person !== sortedArr[0] && person !== sortedArr[sortedArr.length - 1]);
    console.log(arr);
  }
  
  // 4. Merge two arrays (use a dummy array for demonstration) such that the resulting array has no duplicate professions.
  function mergeAndFilterProfessions() {
    const dummyArray = [
      { profession: 'developer' },
      { profession: 'designer' },
      { profession: 'admin' },
    ];
    const mergedArray = [...arr, ...dummyArray];
    const uniqueProfessions = Array.from(new Set(mergedArray.map(person => person.profession)));
    console.log(uniqueProfessions);
  }
  
  // 5. Find the person with the highest salary and reduce their salary by 10% as tax.
  function applyTax() {
    const highestSalaryPerson = arr.reduce((max, person) => (person.salary > max.salary ? person : max), arr[0]);
    highestSalaryPerson.salary *= 0.9;
    console.log(arr);
  }
  
  // 6. Check if every person in the array is a developer.
  function isEveryoneDeveloper() {
    const everyoneIsDeveloper = arr.every(person => person.profession === 'developer');
    console.log(everyoneIsDeveloper);
  }
  
  // 7. Swap the professions of the first and last person in the array.
  function swapProfessions() {
    [arr[0].profession, arr[arr.length - 1].profession] = [arr[arr.length - 1].profession, arr[0].profession];
    console.log(arr);
  }
  
  // 8. Using the `map` method, add a new property to each person called 'experience' with a default value of 1 year.
  function addExperienceProperty() {
    arr = arr.map(person => ({ ...person, experience: 1 }));
    console.log(arr);
  }
  
  // 9. Group persons by profession and count them. E.g., {developer: 2, admin: 1}.
  function groupByProfession() {
    const professionCount = arr.reduce((acc, person) => {
      acc[person.profession] = (acc[person.profession] || 0) + 1;
      return acc;
    }, {});
    console.log(professionCount);
  }
  
  // 10. Find the person who has a name with the longest length and capitalize their profession.
  function capitalizeLongestNamedPersonProfession() {
    const longestNamePerson = arr.reduce((max, person) => (person.name.length > max.name.length ? person : max), arr[0]);
    longestNamePerson.profession = longestNamePerson.profession.toUpperCase();
    console.log(arr);
  }
  
  // 11. Create a function that shuffles the array in a random order.
  function shuffleArray() {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
  }
  
  // 12. Create a function that rotates the array to the right by n steps, where n is provided as an argument.
  function rotateArray(n) {
    const rotatedArray = [...arr.slice(-n), ...arr.slice(0, arr.length - n)];
    console.log(rotatedArray);
  }
  
  // 13. Create a function that finds the person with the closest age to a given number.
  function findClosestAge(age) {
    const closestAgePerson = arr.reduce((closest, person) => {
      const personDiff = Math.abs(person.age - age);
      const closestDiff = Math.abs(closest.age - age);
      return personDiff < closestDiff ? person : closest;
    }, arr[0]);
    console.log(closestAgePerson);
  }
  
  // 14. Create a function that checks if there's any repeated name in the array.
  function hasRepeatedNames() {
    const namesSet = new Set();
    const hasRepeated = arr.some(person => {
      if (namesSet.has(person.name)) {
        return true;
      }
      namesSet.add(person.name);
      return false;
    });
    console.log(hasRepeated);
  }
  
  // 
  