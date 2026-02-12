# express
just learning

## Setup

1. Install dependencies:
    ```bash
    npm install
    ```
2. Create your environment file:
    ```bash
    copy .env.example .env
    ```
3. Update the values in `.env`.
4. Run the server:
    ```bash
    npm run dev
    ```

## Environment variables

- `PORT`: Server port. Example: `5000`.
- `MONGODB_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret used to sign/verify JWTs.
- `JWT_EXPIRES_IN`: Optional JWT expiry, e.g. `1h` or `7d`. Leave empty for no expiry.
- `COOKIE_NAME`: Name of the auth cookie.
- `COOKIE_MAX_AGE_MS`: Cookie lifetime in milliseconds.
- `NODE_ENV`: `development` or `production`.

## Scripts

- `npm run dev`: Start in watch mode with nodemon.
- `npm start`: Start the server.