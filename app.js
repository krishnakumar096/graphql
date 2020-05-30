const express = require("express");
const graphqlHttp = require("express-graphql");
const schema = require('./schema/schema')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/trades', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(
    () => { 
        console.log("MongoDB connection successfully established.");
    }
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running.");
    // process.exit();
});

const app = express();

app.use('/graphql', graphqlHttp({
    schema,
    graphiql: true
}))

app.listen(3000, ()=>{
    console.log("server listening on port 3000");
})