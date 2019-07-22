import mongoose from "mongoose"
const {Types} = mongoose.Schema
const tasksKeyName = 'tasks'

const schema = new mongoose.Schema({
  name: {
    type: Types.String,
    required: true
  },
  [tasksKeyName]: [{
    type: Types.ObjectId,
    ref: 'Todo'
  }]
})



// add id same as _id
schema.virtual('id').get(function() {return this._id})
schema.set('toJSON', {
  virtuals: true
})

const Model = mongoose.model('TodoList', schema)

export default Model