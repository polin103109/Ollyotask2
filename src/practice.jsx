const data = [
    {
      name: 'John Doe',
      age: 32,
      gender: 'male',
      interest: ['movie', 'song'],
    },
    {
      name: 'Alice',
      age: 30,
      gender: 'female',
      interest: ['movie', 'gardening'],
    },
    {
      name: 'Bob',
      age: 20,
      gender: 'male',
      interest: ['movie', 'listening'],
    },
    {
      name: 'Rohim',
      age: 22,
      gender: 'male',
      interest: ['reading', 'song'],
    },
    {
      name: 'Karim',
      age: 34,
      gender: 'male',
      interest: ['movie', 'song'],
    },
  ];
//   const hasUser = (arr,age) => {
//     return arr.some( user => user.age === age)
// }
// const userWithAge20 = hasUser(data, 20);
// console.log(userWithAge20);


    const forSort = (arr) => {
       return [...arr].sort((a, b) => a.age - b.age); 
    }
    
    const sortedUsersAbove20 = forSort(data);
    console.log(sortedUsersAbove20);
    //callback function

const customMap = (array, callback) => {
    const newArray = [];
  
    for (let i = 0; i < array.length; i++) {
      const userReturn = callback(array[i], i);
      newArray.push(userReturn);
    }
  
    return newArray;
  };
  
  const arr = [3, 4, 5, 7];
  
  const modifiedArray = customMap(arr, function (item, index) {
    return item * item;
  });
  console.log(modifiedArray);
    
    
    
    
    
    
    
    
