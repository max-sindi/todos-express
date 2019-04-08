import mongoose from 'mongoose'
const {Schema, model} = mongoose

const userSchema = new Schema({
  name: {type: Schema.Types.String, required: true},
  email: {type: Schema.Types.String, required: true}
})

// add id same as _id
userSchema.virtual('id').get(function() {return this._id})
userSchema.set('toJSON', {
  virtuals: true
});

const User = model('User', userSchema)

export default User