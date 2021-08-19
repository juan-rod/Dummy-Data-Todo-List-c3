
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
   let ol = document.querySelector('#todo-list');
   console.log('ol:', ol)
  //  let ol = document.getElementById('todo-list');
   for (let index = 0; index < arrayOfTodos.length; index++) {
     const todoItemTitle = arrayOfTodos[index].title;
    
    // if (!arrayOfTodos[index].completed) {
      let listItem = document.createElement('li');
      listItem.append(todoItemTitle)
      ol.append(listItem)
    // }
     
   }
  }

  // let userId = 4
  const filterUserId = () => {
    // grab input value
    let userId = document.querySelector('input').value
    console.log('userId',userId)
    let isUserFour = arrayOfTodos.filter(todo => {
      console.log('todo.userId',todo.userId)
      return todo.userId == userId && todo.completed
    })
    console.log('isUserFour:', isUserFour)
    // how to remove list items from html with javascript
  }
// Fetch the same data.
// Store the data in a variable.
// Add an input for the userID. This input should only take in a number from 1 - 10.
// Add a button that when clicked will:
// clear the previous todos from the view
// and populate it with only todos with the userID that matches the number inputted.
// then stores the currently filtered todos in a variable so that ...
// You can create two more buttons that when clicked:

// removes those todos from the view
// and shows only todos that are either:
// completed
// not completed