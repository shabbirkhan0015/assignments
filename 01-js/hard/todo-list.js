class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
    // Do nothing on invalid index (test expects no exception)
  }

  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    }
    return null; // Return null if index is invalid
  }

  getAll() {
    return this.todos;
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
