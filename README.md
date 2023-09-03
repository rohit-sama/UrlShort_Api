## Node.js URL Shortener API
This is an URL shortener service like bit.ly or cutt.ly. The front-end is not covered here. The API service can take a long URL and convert it to a shorter URL. MongoDB is used as the database. The long URL, short URL, and other details are stored in the database. When a long URL that is already stored in the database is passed again, it returns the older shortened URL.


## Run Locally

Clone the project

```bash
  git clone https://github.com/rohit-sama/url_shortner.git
```

Go to the project directory

```bash
  cd url shortner
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## API Reference

### Shorten URL

```http
  POST url-shortnrr.vercel.app/api/short
```

| Field | Type   | Description  |
| :---- | :----- | :----------- |
| Body  | `json` | Original Url |




**Example to use this with deployed link:**

```http
GET url-shortnrr.vercel.app/my-portfolio
```



## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

| Variable    | Description             |
| :---------- | :---------------------- |
| `MONGO_URI` | MongoDB URI             |