import mongoose from "mongoose"
const todosSchema  = new mongoose.Schema({
  title: {type: String, required: true },
  body: String,
})

const Todo = mongoose.model('Todo', todosSchema)

export default Todo