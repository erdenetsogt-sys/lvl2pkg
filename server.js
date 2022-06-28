const express = require("express");
const app = express();
const mongoose = require("mongoose");
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
// const testRouter = require('./routes/test');
// const resultRouter = require('./routes/result');
const addRouter = require('./routes/add');
const PORT = 3002;
// const Thread = require("./models/Thread");
const session = require('express-session');
const UserModel = require("./models/User");
const bcrypt = require('bcrypt');
// const Layer = require("./models/Layer");
// const Layer1 = require("./models/Layer1");
// const Layer2 = require("./models/Layer2");
// const Result = require("./models/Result");
const { stringify } = require("querystring");

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));
app.set('view engine', 'ejs');
mongoose.connect("mongodb+srv://test:test@cluster0.iqcd2.mongodb.net/threads?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("データベース接続完了"))
    .catch((err) => console.log(err));
app.listen(PORT, console.log("サーバーがラーニング"));
app.use(session({ secret: 'notagoodsecret', resave: true, saveUninitialized: true }));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}

app.get("/", requireLogin, (req, res) => {
    res.redirect("/add");
})
app.use("/add", requireLogin, addRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.post('/logout', (req, res) => {
    req.session.user_id = null;
    res.redirect('/');
})

// app.post("/api/v1/result", async(req, res) => {
//     try {
//         const createResult = await Result.create(req.body);
//         res.status(200).json(createResult);
//     } catch (err) {
//         console.log(err);
//     }
// })
app.post("/api/v1/result", async(req, res) => {
    try {
        const createResult = await Result.create(req.body);
        res.status(200).json(createResult);
    } catch (err) {
        console.log(err);
    }
})