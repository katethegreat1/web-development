## EDA Parking
### User story for lecture
_As I user I want to be able to find the Owner's phone number who parked in my parking slot number 50_

## Lecture Notes on Relationships, joins and keys

Link to [slides](https://www.figma.com/proto/v8xV5WpKet7D1nzmia0XBa/Joins-and-Relationships-in-DBs?node-id=2%3A2&scaling=contain&page-id=0%3A1)

## Concepts

* Responsibility of the route versus database functions
    - Route: interpreting the request and issuing the response
    - DB functions: translating the data and reading/saving the data
* Joins: selecting data from multiple tables
    - The result can be referred to as a _result set_ and is only in memory
    - Only applies to _reading_ data (not inserting, updating or deleting)
* Types of relationships:
    - One-to-one
    - One-to-many
    - Many-to-many
* Keys allow the database to help ensure data integrity
* Imposing constraints (unique, foreign key)
* How to handle deletions (see Student Handbook)

## Noteworthy

* We can't `render` our views until the async query is finished (in the `then()`)
* We should be _intentional_ about our `viewData` and not just render whatever comes back from our query

## Relationship examples

These diagrams were created using [DB Diagram.io](https://dbdiagram.io/d) and it's a good choice when creating entity relationship diagrams (ERDs) for your assessment that requires one.

### One-to-one

![One to one](diagrams/user-profiles_one-to-one.png)

### One-to-many

![One to many](diagrams/bike-riders_one-to-many.png)

### Many-to-many

![Many to many](diagrams/book-authors_many-to-many.png)

## Assigning keys to columns

* `primary()`
* `references('table.id')`

## Example of a join in db.js

```js
function getRiderById(id) {
  return db('riders')
    .join('bikes', 'riders.id', 'bikes.rider_id')
    .where('riders.id', id)
    .select('riders.id as riderId', 'bikes.id as bikeId', 'name', 'bib', 'age', 'model', 'type')
    .then(result => ({
      id: result[0].riderId,
      name: result[0].name,
      bib: result[0].bib,
      age: result[0].age,
      bikes: result.map(bike => ({
        id: bike.bikeId,
        model: bike.model,
        type: bike.type
      }))
    }))
}
```

## Example of how to use joins in routes.js

``` js
  router.get('/rider/:id', (req, res) => {
    const id = Number(req.params.id)
    db.getRiderById(id)
      .then(viewData => {
        res.render('rider', viewData)
      })
      .catch(err => {
        // Security best practice violation:
        // Should not show error messages to users/hackers
        res.status(500).send(err.message)
      })
  })
```
## The impact contraints on seed data

You _must_ delete the records and add them in the proper and reverse order.

```js
// seeds/0-clean.js
exports.seed = (knex) => {
  const empty = table =>
    () => knex(table).del()

  return empty('profiles')()
   .then(empty('users'))
}
```

```js
// seeds/1-users.js
exports.seed = (knex) => {
  return knex('users').insert([
    { id: 88801, username: 'alice' },
    { id: 88802, username: 'bob' },
    { id: 88803, username: 'caro' }
  ])
}
```

```js
// seeds/2-profiles.js
exports.seed = (knex) => {
  return knex('profiles').insert([
    { id: 99901, user_id: 88801, email: 'alice@example.org' },
    { id: 99902, user_id: 88802, email: 'bob@example.org' },
    { id: 99903, user_id: 88803, email: 'caro@example.org' }
  ])
}
```


## ERD Diagrams

To view the ERD of the tables below, use [https://dbdiagram.io/](https://dbdiagram.io/)
Then Copy and paste it in the side bar on the left.

```
Table User_logins {
  id int
  email varchar
  password varchar
}

Table Users {
  id int
  first_name varchar
  last_name varchar
  avatar varbinary
}

ref user_logins_users: User_logins.id - Users.id

// Creating tables
Table Food as F {
  id int [pk, increment] // auto-increment
  season_id int
  name varchar
}

Table Seasons as S {
  id int [pk, increment]
  name varchar
}

Table Recipes as R {
  id int [pk, increment]
  food_id int
  name varchar
}

Ref r1: F.id < R.food_id
Ref r2: F.season_id > S.id


Table Vehicles as V {
  id int [pk, increment]
  name varchar
  owner_id int
}


Table Owners {
  id int
  name varchar
}

ref owner_vehicle: V.owner_id > Owners.id

Table Guests {
  id int
  name varchar
}

Table Rooms {
  id int
  name int
  price decimal
}

Table Bookings {
  id int
  created_on datetime
  checkin datetime
  checkout datetime
  breakfast boolean
  accessiblity_needs boolean
  room_id int
  guest_id int
}


Ref: "Rooms"."id" < "Bookings"."room_id"
Ref: "Guests"."id" < "Bookings"."guest_id"


Table Employees {
  id int
  name varchar
  department varchar
  reports_to int
}

Ref: "Employees"."reports_to" < "Employees"."id"

Table Parent {
  id int
  name varchar
}

Table Child {
  id int
  name varchar
  parent_id int
}

Table Playlists {
  id int
  name varchar
}

Table Songs {
  id int
  name varchar
}

Table Playlist_Songs {
  id int
  playlist_id int
  song_id int
}

Ref: "Playlists"."id" < "Playlist_Songs"."playlist_id"
Ref: "Songs"."id" < "Playlist_Songs"."song_id"

 
```
