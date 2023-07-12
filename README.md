
# Authors

Web application built in Microsoft Visual Studio Code. Allows users to create a list of their favorite authors. Users are able to edit or delete saved data from the database.


## 🛠 Skills
Javascript, HTML, CSS, React, Node, Express, Trello, React Router, MongoDB, Mongoose


## Tech Stack

**Client:** React, Redux, JSX, JavaScript, HTML, CSS

**Server:** Node, Express, Mongoose



## Screenshots


# Home Page

![App Screenshot](images/Screenshot%202023-07-11%20202142.png)


# Add Page

![App Screenshot](images/Screenshot%202023-07-12%20152102.png)

# Edit Page
![App Screenshot](images/Screenshot%202023-07-11%20201801.png)



## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://durand90.github.io/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fanfan-durand/)

## API Reference

#### Get all items

```http
  GET /api/authors'
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | Retrieve "authors" from the database |

#### Get item

```http
  GET /api/authors/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | Retrieve "author" by "author ID" from the database


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/durand90/js_authors
```

Go to the project directory

```bash
  cd client
  cd server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  server - nodemon start
  client - npm run start
```

