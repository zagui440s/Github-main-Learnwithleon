//main file
const express = require('express')

//handles server side and route request
const app = express()

//mongoose ODM (object data model), database
const mongoose = require('mongoose')

//passport is the authorizarion/login
const passport = require('passport')
const session = require('express-session')

// hold session, even after closing browser
const MongoStore = require('connect-mongo')(session)

// connects to mongo database(db)
const connectDB = require('./config/database')

// TO not allow to enter the "To Dos" page wthout being logged in
const authRoutes = require('./routes/auth')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

//dotenv is to hold our environment variables
require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

//function calling variable of const connectDB on line 18
connectDB()

// link discussing app.use and lines 35-38 https://codeburst.io/creating-a-todo-app-with-node-js-express-and-postgresql-database-6dbf80c3fe9c 
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())


app.use('/', homeRoutes)
app.use('/auth', authRoutes)
app.use('/todos', todoRoutes)


// below, app need a port to be able to be accessed, creating a port w/ line 61
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})
