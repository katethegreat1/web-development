# Demo - Relational Databases and Knex.js

## Agenda

* Databases versus file-based storage
* Relational (RDBMS) versus noSQL databases
* Tables (sheets), columns (columms) and rows/record (rows)
* Data versus metadata
* SQL vs. Knex.js vs. Object/Relational Mappers (ORMs)
* How to write a proper shell script
* Creating tables with migrations
* Adding data with seeds
* CRUD operations with Knex.js


## Setup

```sh
npm init [-y]
npm install knex sqlite3 pg
npx knex init # creates the knexfile.js
```

## Create a table

```sh
npx knex migrate:make table_name

# edit the migration file for the new table

npx knex migrate:latest
```

## Fill the table with data

```
npx knex seed:make table_name

# add new data to the seed file

npx knex seed:run
```

## Create an open database connection

```js
const knex = require('knex')
const config = require('./knexfile').development
const db = knex(config)
```

## Query records from the database

```js
function showAllTasks () {
  db('tasks')
    .select()
    .then(tasks => {
      tasks.forEach(task => {
        const {id, title, completed} = task
        const status = completed ? 'done' : 'pending'
        console.log(`${id}: ${title} (${status}))
      })
    })
}
```

## Query a single record from the database

```js
function showTaskById (id) {
  db('tasks')
    .select()
    .where('id', id)
    .first()
    .then(task => {
      const {id, title, completed} = task
      const status = completed ? 'done' : 'pending'
      console.log(`${id}: ${title} (${status}))
    })
}
```

## Add a new record to the database

```js
function addTask (newTask) {
  db('tasks')
    .insert({title: newTask.title})
    .then(ids => {
      console.log('ID of new task:', ids[0])
    })
}
```

## Update a record in the database

```js
function updateTask (task) {
  db('tasks')
    .update({title: task.title, completed: task.completed})
    .where('id', task.id)
    .then(ids => {
      console.log('IDs of records updated:', ids)
    })
}
```

## Delete a record in the database

```js
function deleteTask (id) {
  db('tasks')
    .delete()
    .where('id', id)
    .then(count => {
      console.log('Number of records deleted:', count)
    })
}
```

## Writing a shell script in JavaScript

* Add `#!/usr/bin/env node` to the top of the JavaScript file.
* Run `chmod +x filename` to make it executable. Verify with `ls -al`.
* Run the file by running `./filename`.
