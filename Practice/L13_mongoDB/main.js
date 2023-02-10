"use strict";

const MongoDB = require("mongodb").MongoClient,
  dbURL = "mongodb://0.0.0.0:27017",
  dbName = "node";

MongoDB.connect(
  dbURL,
  (error, client) => {
    if (error) throw error;
    let db = client.db(dbName);
    db.contacts.insert(
      {
        name: "Freddie Mercury",
        email: "fred@queen.com"
      },
      (error, db) => {
        if (error) throw error;
        console.log(db);
      }
    );
  }
);
