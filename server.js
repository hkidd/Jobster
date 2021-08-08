//Imports
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const fs = require('fs');
const router = require('express').Router()

//Multer Imports
const multer = require('multer');
require('dotenv').config();
const cloudinary = require('cloudinary').v2

//Cloudinary Settings
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Methods Imports
const User = require('./models/User');

//App Initialization
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);



//Multer Storage Specifications
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads")
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname)
  }
});



//Multer Filter
const upload = multer({
  storage: fileStorageEngine,
  fileFilter: function (req, file, cb) {
    //Allowed ext
    const filetypes = /jpg|jpeg|png|gif|pdf/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname) {
      return cb(null, true);
    } else {
      cb('Error: Invalid file extension!')
    }
  }
});



//Post Profile Picture
app.post('/single', upload.single('image'), (req, res) => {
  console.log('Single Route');
  const savedImage = req.file;
  console.log(savedImage);
  const imageLocation = savedImage.path;
  console.log(imageLocation);

  cloudinary.uploader.upload(imageLocation, { tags: "Profile Picture" }).then(data => {
    console.log(data.secure_url);
    if (data.url) {
      User.update({
        image_url: data.secure_url
      },
        {
          where: {
            id: req.session.user
          }
        })
        .then((newUserProfilePic) => {
          res.redirect("/userInfo").json(newUserProfilePic)
        })
        .catch((err) => {
          res.json(err);
        });
    }
    fs.unlink(imageLocation, (error) => error ? console.log(error) : null)
  });

  // res.send(`${savedImage} Single File Upload Success`);
});




//Post Resume
app.post('/resume', upload.single('resume'), (req, res) => {
  console.log('Single Route');
  const savedResume = req.file;
  console.log(savedResume);
  const resumeLocation = savedResume.path;
  console.log(resumeLocation);


  cloudinary.uploader.upload(resumeLocation, { tags: "Resume" }).then(data => {
    console.log(data);
    console.log(data.secure_url);

    // Transform .pdf to renderable jpeg
    console.log("-----------------PDF TRANSORMATION-------------------");
    let originalURL = data.secure_url;
    console.log(originalURL);
    let splitURL = originalURL.split('.pdf');
    console.log(splitURL);
    let finalURL = splitURL[0] + ".jpeg";
    console.log(finalURL);


    if (finalURL) {
      User.update({
        resume_url: finalURL
      },
        {
          where: {
            id: req.session.user
          }
        })
        .then((newUserProfilePic) => {
          res.redirect("/userInfo").json(newUserProfilePic);
        })
        .catch((err) => {
          res.json(err);
        });
    }
    fs.unlink(resumeLocation, (error) => error ? console.log(error) : null)
  });
  // res.send(`Single File Upload Success`);
});




//Post Cover Letters
app.post('/coverLetter', upload.single('coverLetter'), (req, res) => {
  const savedCoverLetter = req.file;
  console.log(savedCoverLetter);
  const coverLetterLocation = savedCoverLetter.path;
  console.log(coverLetterLocation);

  cloudinary.uploader.upload(coverLetterLocation, { tags: "Cover-Letter" }).then(data => {
    console.log(data.url);

    // Transform .pdf to renderable jpeg
    console.log("-----------------PDF TRANSORMATION-------------------");
    let originalURL = data.url;
    console.log(originalURL);
    let splitURL = originalURL.split('.pdf');
    console.log(splitURL);
    let finalURL = splitURL[0] + ".jpeg";
    console.log(finalURL);


    if (finalURL) {
      User.update({
        coverletter_url: finalURL
      },
        {
          where: {
            id: req.session.user
          }
        })
        .then((newCoverLetter) => {
          res.redirect("/userInfo").json(newCoverLetter);
        })
        .catch((err) => {
          res.json(err);
        });
    }
    fs.unlink(coverLetterLocation, (error) => error ? console.log(error) : null)
  });
  // res.send(`${savedImage} Single File Upload Success`);
});






//Start Server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});