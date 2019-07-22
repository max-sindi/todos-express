import mongoose from "mongoose"
const {Types} = mongoose.Schema
const listKeyName = 'lists'

const schema = new mongoose.Schema({
  name: {
    type: Types.String,
    required: true
  },
  [listKeyName]: [{
    type: Types.ObjectId,
    ref: 'TodoList'
  }]
})



// add id same as _id
schema.virtual('id').get(function() {return this._id})
schema.set('toJSON', {
  virtuals: true
})

const Model = mongoose.model('Board', schema)

export default Model