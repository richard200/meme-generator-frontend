
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Linux](https://svgshare.com/i/Zhy.svg)](https://svgshare.com/i/Zhy.svg)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# Meme Generator
Meme Generator is a basic API built with ruby's Sinatra DSL. 

This project  shows the power of the DSL in building server-side applications quickly.

The application has been built with the MVC design pattern.

## Pre-Requisites
In order to use this repository you will need the following:



- Operating System **(Windows `10+`, Linux `3.8+`, or MacOS X `10.7+`)**
- RAM >= 4GB
- Free Space >= 2GB

## Built With
This application has been built with the following tools:

![ruby](https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white)
![sqlite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)


- **Ruby `v2.7.+`**
- **SQlite3 `v1.6`**
- **ActiveRecord `v7.0.4`**
- **Rake `v13.0.6`**
- **Puma `v6.1`**
- **rerun `v0.14`**
- **Sinatra `v3.0.5`**
- **Bootstrap `v5.3.0`**
- **ERB `v4.0`**

## Setup
You can setup this repository by following this manual

1. Clone the repository
    ```{shell}
   git clone https://github.com/richard200/meme-generator-frontend
   ```
2. Ensure the ruby gems are setup in your machine
    ```{shell}
   bundle install
   ```
3. Perform any pending database migrations
   ```{shell}
   rake db:migrate
   ```
4. Run the application
    ```{shell}
    rake start
    ```
5. Open the application from your browser
    ```
   http://localhost:9292

6. The backend for the application is here: https://github.com/richard200/meme-generator-backend
   ```
   
## Application
This application is a simple web API that allows users to:

- Register a new account.
- Log in to existing account.
- Create memes.
- Update individual memes.
- View all memes.
- Delete a meme.

### MODELS
Database schema definitions.

#### MEMES

| COLUMN      | DATA TYPE                                       | DESCRIPTION                         | 
|-------------|-------------------------------------------------|-------------------------------------|
| id          | Integer                                         | Unique identifier.                  |
| name        | String                                          | The name of the meme.               |
| text_top    | String                                          | First part of the meme.             |
| text_bottom | Date                                            | Second part of the meme             |
| status      | ENUM `[CREATED, ONGOING, COMPLETED, CANCELLED]` | TThe status of the meme.            |


#### USERS
| COLUMN        | DATA TYPE | DESCRIPTION                           | 
|---------------|-----------|---------------------------------------|
| id            | Integer   | Unique identifier.                    |
| full_name     | String    | User's full name.                     |
| password_hash | String    | User's password hashed with `BCrypt`. |



### ROUTES

1. `/hello` - Presents a simple welcome message.
2. `/auth/register` - Create a new user account.
   
   ```{json}
   ## REQUEST BODY
  {
  "full_name": "Richard Ngeti",
  "email": "rich@gmail.com",
  "password": "12345"
}  ```

3. `/auth/login` - Log in a user using email and password.

   ```{json}
   ## REQUEST BODY
   {
     "email": "rich@gmail.com",
  "password": "12345"
}  ```

4. `/memes/create` - Add a new meme.

   ```{json}
   ## REQUEST BODY
 {
  "name": "mymeme",
  "text_top": "watu si wajinga",
  "text_bottom": "watu si wajinga bwana"
}  ```

5. `/memes` - List all memes.

   ```{json}
   ## RESPONSE SAMPLE
 [
  {
    "id": 1,
    "name": "mymeme",
    "text_top": "watu si wajinga",
    "text_bottom": "watu si wajinga bwana",
    "status": "CREATED"
  },
  {
    "id": 2,
    "name": "mymeme",
    "text_top": "watu si wajinga",
    "text_bottom": "watu si wajinga bwana",
    "status": "CREATED"
  }
]   ```
6. `/memes/update/:id` - Update an existing meme.
7. `/memes/destroy/:id` - Delete a Meme .



## LICENSE
This repository is distributed under the ISC License

## Author
This repository is maintained by:

- [Richard Ngeti](https://github.com/richard200) 