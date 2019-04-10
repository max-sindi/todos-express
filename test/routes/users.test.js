import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers['Bearer: '] = 'asdsadas'
let id

async function fetchUsers() {
  return await axios.get('/users')
}

async function fetchUserById(id) {
  return await axios.get(`/users/${id}`)
}

test('createUser', async () => {
  expect.assertions(2)
  try {
    const createdUser = await axios.post('/users', {
      name: 'test', email: 'test@test.com'
    })
    /* SET USER ID FOR FURTHER MANIPULATIONS*/
    id = createdUser.data.id
    expect(createdUser.data.name).toBe('test')
    expect(createdUser.data.email).toBe('test@test.com')
  } catch (e) {
    console.error(e.message)
  }
})

test('fetch users', async () => {
  expect.assertions(2)
  try {
    const users = await fetchUsers()
    expect(typeof users.data.length).toBe('number')
    expect(users.data.find(item => item.id === id).name).toBe('test')
  } catch(e) {
    console.error(e.message)
  }
})

test('fetch single user', async () => {
  expect.assertions(2)
  try {
    const user = await fetchUserById(id)
    expect(user.data.name).toBe('test')
    expect(user.data.email).toBe('test@test.com')
  } catch (e) {
    console.error(e.message)
  }
})

test('update user', async () => {
  expect.assertions(2)
  try {
    const updatedUser = await axios.put(`/users/${id}`, {
      name: 'updatedTestName', email: 'updatedTestEmail@test.com'
    })
    expect(updatedUser.data.name).toBe('updatedTestName')
    expect(updatedUser.data.email).toBe('updatedTestEmail@test.com')
  } catch (e) {
    console.error(e.message)
  }
})

test('delete user', async () => {
  expect.assertions(1)
  try {
    const deletedResponse = await axios.delete(`/users/${id}`)
    expect(deletedResponse.data.ok).toBe(true)
  } catch (e) {
    console.error(e.message)
  }
})

async function deleteAllUsers() {
  const users = await fetchUsers()
  users.data.forEach(item => axios.delete('/users/' + item.id))
}

// deleteAllUsers()