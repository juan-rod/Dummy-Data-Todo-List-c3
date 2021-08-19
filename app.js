
    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

  let arrayOfTodos = [
    {
      "userId": 14,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }
]
  
  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        arrayOfTodos = data;
      })


      // fetch('https://jsonplaceholder.typicode.com/todos')
      // .then( (response) => response.json())
      // .then( (json) => arrayOfTodos = json)
  }
  
  const logTodos = () => {
      console.log(arrayOfTodos)
  }
  
  const populateTodos = () => {
   console.log('arrayOfTodos:', arrayOfTodos)
   for (let index = 0; index < arrayOfTodos.length; index++) {
     const todoItem = arrayOfTodos[index];
     console.log('todoItem.completed', todoItem.id, todoItem.completed)
     // get ol element from dom
     // create li
     
     
   }
  }