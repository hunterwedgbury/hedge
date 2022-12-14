require('dotenv').config();

const express = require('express');
const expressSession = require('express-session');
const cors = require('cors');
const helmet = require('helmet');
const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const knex = require('knex')(require('./knexfile.js'));
const app = express();
const PORT = process.env.DB_LOCAL_PORT || 7070;

app.use(express.json());

app.use(helmet());

app.use(
    cors({
        origin: true,
        credentials: true
    })
);

app.use(
    expressSession({
        secret: process.env.LINKEDIN_SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new LinkedInStrategy ({
        clientID: process.env.LINKEDIN_CLIENT_ID,
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
        callbackURL: 'http://localhost:1000/auth/linkedin/callback',
        scope: ['r_emailaddress', 'r_liteprofile']
    },
     
    function(_accessToken, _refreshToken, profile, done) {
        console.log('LinkedIn profile:', profile)

        knex('users_table')
        .select('userId')
        .where({ linkedinId: profile.id })
        .then(user => {
          if (user.length) {
            done(null, user[0]);
          } else {
            knex('users_table')
              .insert({
                userId: profile.id,
                linkedinId: profile.id,
                profilePicture: profile.photos[2].value,
                displayName: profile.displayName
              })
              .then(userId => {
                done(null, { id: userId[0] });
              })
              .catch(err => {
                console.log('Error creating a user', err);
              });
          }
        })
        .catch(err => {
          console.log('Error fetching a user', err);
        });
    }
));

passport.serializeUser((user, done) => {
    console.log('Login:', user);
    done(null, user.userId)
});

passport.deserializeUser((userId, done) => {
    console.log('Logout:', userId);

    knex('users_table')
        .where({ userId: userId })
        .then(user => {
            console.log('req.user:', user[0]);
            done(null, user[0]);
        })
        .catch(err => {
            console.log('Error finding user', err);
        });
});

const feedRouter = require('./routes/feedRouter.js');
const authRouter = require('./routes/authRouter.js');

app.use('/feed', feedRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`🚀 Application running on ${PORT}`);
});