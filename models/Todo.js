import mongoose from "mongoose"
const todosSchema  = new mongoose.Schema({
  // title: {type: String, required: true },
  // body: {type: String, required: true},
  // isDone: {type: Boolean, default: false}
  selectedFile: {type: String},
  name: {type: String},
  surname: {type: String},
  phone: {type: String},
  company: {type: String},
  mail: {type: String},
//  _id: {type: mongoose.Types.ObjectId} 
})

// add id same as _id
todosSchema.virtual('id').get(function() {return this._id})
todosSchema.set('toJSON', {
  virtuals: true
});

const Todo = mongoose.model('Todo', todosSchema)

export default Todo
