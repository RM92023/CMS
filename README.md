# CMS INVENTORY MANAGEMENT
A CMS (Content Management System) is a tool that makes it easy to create and manage websites and online content. It allows users to add, edit, and organize content without requiring advanced programming knowledge, simplifying the management of websites and blogs. Popular examples of CMS include WordPress, Joomla, and Drupal.

## Backend
What is an API?

An API (Application Programming Interface) is a set of rules that allows different programs to communicate with each other. It facilitates interaction and data exchange between applications and systems.

### Config
In the config file is the connection with the mongo database through a variable giving that variable the value of the url for the connection

```
const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB Conectado en: ${url} `);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = dbConnect;

```

## Frontend

A Vite-based CMS project with login, logout, and product CRUD functionalities. Connects to a pre-existing API and MongoDB database.

### Quick Start

1. Clone the repository.

2. Configure environment variables for API and MongoDB connection.

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```