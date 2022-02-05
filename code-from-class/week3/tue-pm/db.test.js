const config = require('./knexfile').test
const testDb = require('knex')(config)

const dbFunctions = require('./db')

beforeAll(() => {
    return testDb.migrate.latest()
})

afterAll(() => {
    return testDb.destroy()
})

beforeEach(() => {
    return testDb.seed.run()
})

test('getAll returns all todos', () => {
    return dbFunctions.getAll(testDb)
    .then(tasks => {
        expect(tasks).toHaveLength(3)
        return null
    })
})

test('addTodo can add a todo', () => {
    const task = 'test database'
    return dbFunctions.addTodo(task, testDb)
    .then(res => {
        console.log(res)
        return dbFunctions.getAll(testDb)
    })
    .then(tasks => {
        expect(tasks[3].task).toMatch(task)
    })

})