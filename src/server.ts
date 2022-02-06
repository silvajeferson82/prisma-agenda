import express from "express";


const app = express();

app.use(express.json());

// app.use(router);

app.listen(3031, () => {
    console.log(`🚀 Server ready at: http://localhost:3031`);
});