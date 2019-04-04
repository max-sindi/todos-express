import mongoose from "mongoose"
const todosSchema  = new mongoose.Schema({
  title: String,
  body: String,
})

const Todo = mongoose.model('Todo', todosSchema)

export default Todo