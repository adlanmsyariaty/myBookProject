# MY BOOK PROJECT

Deploy link (Firebase) : https://my-book-project-dae39.web.app/
Deploy link (Heroku) : https://my-book-project.herokuapp.com/

# API DOCUMENTATION

## Models

Book

- title (String)
- authors (Array of String)
- imageUrl (String)
- rating (Integer)

## Endpoints

List of Available Endpoints:

- `GET /books`
- `POST /books`

### GET /books

#### Description

- Get all the books data

#### Response

_200 - OK_

- Body
  ```json
  [
    {
        "_id": "6299e8f3577402a8009976a0",
        "title": "Polymer Handbook",
        "authors": [
            "J. Brandrup"
        ],
        "rating": 5,
        "imageUrl": "http://books.google.com/books/content?id=aOKFAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    ...
  ]
  ```

### POST /books

#### Description

- Create a new book data

#### Response

_201 - OK_

- Body
  ```json
  {
    "_id": "6299e8f3577402a8009976a0",
    "title": "Polymer Handbook",
    "authors": ["J. Brandrup"],
    "rating": 5,
    "imageUrl": "http://books.google.com/books/content?id=aOKFAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  }
  ```
