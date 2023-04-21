require('dotenv').config()
const app = require("./app.js");

app.listen(process.env.PORT, () => console.log(`Server listening on: http://localhost:${process.env.PORT}`));
