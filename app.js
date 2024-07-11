const todos = [];

function promptUser(message) {
  return prompt(message);
}

function addTodo() {
  const todo = promptUser("Enter a new todo: ");
  todos.push(todo);
  console.log(`Added: ${todo}`);
}

function listTodos() {
  console.log("**********");
  todos.forEach((todo, index) => {
    console.log(`${index}: ${todo}`);
  });
  console.log("**********");
}

function deleteTodo() {
  const index = parseInt(
    promptUser("Enter the index of the todo to delete: "),
    10
  );
  if (!Number.isNaN(index) && index >= 0 && index < todos.length) {
    const [deleted] = todos.splice(index, 1);
    console.log(`Deleted: ${deleted}`);
  } else {
    console.log("Invalid index");
  }
}

function handleInvalidRequest() {
  console.log("Enter a valid request - 'new', 'list', 'delete' or 'quit': ");
}

function handleRequest(req) {
  switch (req.toLowerCase()) {
    case "new":
      addTodo();
      break;
    case "list":
      listTodos();
      break;
    case "delete":
      deleteTodo();
      break;
    case "quit":
    case "q":
      console.log("Quitting!");
      return true;
    default:
      handleInvalidRequest();
  }
  return false;
}

function main() {
  let quit = false;
  while (!quit) {
    const req = promptUser("Enter a request: ");
    quit = handleRequest(req);
  }
}

main();
