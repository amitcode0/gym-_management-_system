# akgym Backend (Express + MongoDB)

## Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Create a `.env` file in the `server` directory with the following content:

   ```env
   MONGO_URI=mongodb://localhost:27017/akgym
   PORT=5000
   ```

3. Start the server:
   ```sh
   node index.js
   ```

The server will run on [http://localhost:5000](http://localhost:5000) and connect to your local MongoDB instance.
