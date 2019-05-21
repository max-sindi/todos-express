import mongoose from "mongoose"
const todosSchema  = new mongoose.Schema({
  // title: {type: String, required: true },
  // body: {type: String, required: true},
  // isDone: {type: Boolean, default: false}
  photourl: {type: String},
  name: {type: String},
  phone: {type: String},
  company: {type: String},
  email: {type: String},
})

// add id same as _id
todosSchema.virtual('id').get(function() {return this._id})
todosSchema.set('toJSON', {
  virtuals: true
});

const Todo = mongoose.model('Todo', todosSchema)

export default Todo
