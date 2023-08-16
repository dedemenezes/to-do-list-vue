import { createApp } from "vue";
// [
//   { title: "Code a to-do list", done: false },
//   { title: "Eat breakfast", done: true },
//   { title: "Do some exercise", done: false },
//   { title: "Water the plants", done: true }
// ];
createApp({
  data() {
    return {
      todos: [
        { title: "Code a to-do list", done: false },
        { title: "Eat breakfast", done: true },
        { title: "Do some exercise", done: false },
        { title: "Water the plants", done: true }
      ],
      newTodo: null
    }
  },
  methods: {
    addTodo() {
      // console.log(this.todos);
      if (this.newTodo) {
        this.todos.push({ title: this.newTodo, done: false })
        this.newTodo = ''
      }
    },
    removeTodo(index) {
      // console.log(`REMOVE TODO from index: ${index}`)
      this.todos.splice(index, 1)
    }
  }

}).mount('#app')


// Create the new VUE APP
// Define what is the initial state/data in the Data function
// Display all todos in the HTML

// ADD NEW TODO
// 1. USer fills in input
// 2. User click the button
// 3. New todo is added to the list


// check the index of the todo clicked
// based on the index call the .slice on this.todos to remove the todo
