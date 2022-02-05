## How data is stored in Javascript

The shape of the object below is an object with three properties.

```
const lecture = {
  "name": "Intro to Databases, Sqlite and Knex.js",
  "week": 3,
  "day": "Monday",
  "teacherName": "ahmad",
  "attendees": [ "Pure", "Jared", "Eleanor" ] // <= relationships and joins will be covered in tomorrow's lecture
}
```
## How data is stored in a SQL Database Table

### Lecture Table (Data)

| name                                    | week  | day     | teacher_name  |
| --------------------------------------- | ----- | ------- | ------------- |
| Intro to Databases, Sqlite and Knex.js  | 3     | Monday  | ahmad         |
| Promises                                | 3     | Monday  | ahmad         |
| ...                                     | ...   | ...     | ...           |

### Lecture Table (Schema)

Schema is the shape of our data

| Column Name   | Type      |
| -----------   | --------- |
| name          | `string`  |
| week          | `integer` |
| day           | `string`  |
| teacher_name  | `string`  |