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
    
    
    
    
    
    
    
    
