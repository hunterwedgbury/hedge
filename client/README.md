# HEDGE

Hedge is a finance platform/forum for amateur and professional investors to share financial analysis and publicly track the outcome of their analysis. Users can write blog posts with a selected feature stock and the site will track stock performance from the time of posting. One long-term goal would be to implement payment processing so that users can monetize their analysis via a tips feature and/or offering exclusive analysis for a monthly subscription fee.



## Setting Up LinkedIn Auth

Setting up OAuth - https://learn.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?tabs=HTTPS1

If this is first time creating an application you will need to configure the consent screen.

* Configure your application in the Developer Portal to obtain Client ID and Client Secret.
* Your application directs the browser to LinkedIn's OAuth 2.0 authorization page where the member authenticates.
* After authentication, LinkedIn's authorization server passes an authorization code to your application.
* Your application sends this code to LinkedIn and LinkedIn returns an access token.
* Your application uses this token to make API calls on behalf of the member.

This will require the following:

* CLIENT_ID
* CLIENT_SECRET
* SESSION_SECRET

Reference - https://developer.linkedin.com/

## Installation Instructions

### Server side

- In the first terminal tab:

    ```bash
    cd server
    npm install
    npx knex migrate:latest # updates the DB to the current schema
    npm run dev     # starts the development environment
    ```

### Client side

- In a second terminal tab:

    ```bash
    cd client
    npm run start
    ```

### `user_table`

| name               | type               | notes |
| ------------------ | ------------------ | ----- |
| `userId`           | PK (string)        | (1)   |
| `linkedinId`       | string             |       |
| `displayName`      | string             |       |
| `profilePicture`   | string             |       |

### `feed_table`

| name               | type               | notes |
| ------------------ | ------------------ | ----- |
| `postId`           | PK (string)        | (1)   |
| `title`            | string             |       |
| `date`             | timestamp          |       |
| `name`             | string             |       |
| `stock`            | string, [4]        |       |
| `current_price`    | integer            |       |
| `forecast`         | string, [7]        |       |
| `analysis`         | text               |       |



## API Endpoints

### GET `/feed`

Get information from all posts. 

    ```json
    [
        {
            "postId": "96514d1b-f337-4721-a97e-d393110ab1dc",
            "title": "SNEAKER MARKET POPPING OFF IN 2023",
            "date": "2022-12-15T08:27:32.000Z",
            "name": "Hunter Wedgbury",
            "stock": "NIKE",
            "current_price": 45,
            "forecast": "BULLISH",
            "analysis": "Nike makes really nice shoes"
        }
    ]

### POST `/feed`

Add a new post.

    ```json
    [
        {
            "title": "SNEAKER MARKET POPPING OFF IN 2023",
            "stock": "NIKE",
            "current_price": 45,
            "forecast": "BULLISH",
            "analysis": "Nike makes really nice shoes"
        }
    ]