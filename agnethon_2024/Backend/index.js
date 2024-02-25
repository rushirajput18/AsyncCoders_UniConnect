const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User')
const Post = require('./models/Post');
const EventApplication = require('./models/Application');
const Committee = require('./models/Committee')
const bcrypt = require('bcrypt'); 
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({dest:'uploads/'});
const fs = require('fs');
const { log } = require('console');

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfqwertyuiop';

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

// Connect to database
mongoose.connect('mongodb://127.0.0.1:27017/UniConnect');

app.post('/register', async (req, res) => {
    const { username, password, role} = req.body;
    try {
        const userDoc = await User.create({ 
            username, 
            password:bcrypt.hashSync(password,salt),
            role
         });
        res.json(userDoc);

    } catch (e){
        console.log(e);
        res.status(400).json(e);
    }
});

app.post('/event-application', async (req, res) => {
  try {
    const {
      committeeName,
      committeeSecretory,
      contactNumber,
      email,
      eventDate,
      eventTime,
      venue,
      message
    } = req.body;

    const eventApplication = await EventApplication.create({
      committeeName,
      committeeSecretory,
      contactNumber,
      email,
      eventDate,
      eventTime,
      venue,
      message
    });
    
    res.status(201).json(eventApplication);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/applications', async (req, res) => {
  try {
    const application = await EventApplication.find();
    res.json(application);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post('/login', async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const userDoc = await User.findOne({ username });
    if (!userDoc) {
      return res.status(404).json({ message: "User not found" });
    }

    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (!passOk) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Check if the entered role matches the user's role
    if (role && role !== userDoc.role) {
      return res.status(401).json({ message: "Invalid role" });
    }

    const tokenPayload = {
      username,
      id: userDoc._id,
      role: userDoc.role,
    };

    jwt.sign(tokenPayload, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id: userDoc._id,
        username,
        role: userDoc.role,
      });
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get('/profile',(req,res)=>{
  const {token} = req.cookies;
  jwt.verify(token,secret,{},(err,info)=>{
    if(err) throw err;
    res.json(info);
  });
});

app.post('/logout',(req,res) => {
  res.cookie('token','').json('ok');
})
app.post('/add-committee', uploadMiddleware.single('image'), async (req, res) => {
  try {
    const { name, head, description } = req.body;

    // Get the file path of the uploaded image
    const image = req.file ? req.file.path : ''; // Check if file is uploaded

    // Create a new Committee document with the image path
    const committee = await Committee.create({
      name,
      head,
      description,
      image,
    });

    res.status(201).json(committee);
    console.log(committee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Endpoint for new post
app.post('/post',uploadMiddleware.single('file'),async (req,res)=>{
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length-1];
    const newPath = path + '.' +ext;
    fs.renameSync(path,newPath);

    const {token} = req.cookies;
    jwt.verify(token,secret,{},async (err,info)=>{
        if(err) throw err;
        const {title,summary,content} = req.body;
        const postDoc = await Post.create({
             title,
             summary,
             content,
             cover: newPath,
             author:info.id,
         });
    res.json(postDoc);
    });

   
});
app.get('/committees', async (req, res) => {
  try {
    // Fetch all committees from the database
    const committees = await Committee.find();
    res.json(committees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/post',uploadMiddleware.single('file'), async (req,res) => {
    let newPath = null;
    if (req.file) {
      const {originalname,path} = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      newPath = path+'.'+ext;
      fs.renameSync(path, newPath);
    }
  
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
      if (err) throw err;
      const {id,title,summary,content} = req.body;
      // Check if the user is the author of the post
      const postDoc = await Post.findById(id);
      if (!postDoc) {
        return res.status(404).json('Post not found');
      }
      const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
      if (!isAuthor) {
        return res.status(401).json('you are not the author');
      }
      await postDoc.updateOne({
        title,
        summary,
        content,
        cover: newPath ? newPath : postDoc.cover,
      });
  
      res.json(postDoc);
    });
  
  }); 


// get all posts
app.get('/post',async(req,res) => {
    res.json(await Post.find()
    .populate('author', ['username'])
    .sort({createdAt: -1})
    .limit(20)
    );
})


app.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const postDoc = await Post.findById(id).populate('author', ['username']);
    res.json(postDoc);
  })

  app.get('/applications', async (req, res) => {
    try {
      const application = await EventApplication.find();
      res.json(application);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  app.put('/update/:id', async (req, res) => {
    const {status } = req.body;
  
    try {
      const updatedStudent = {
        status
      };
      
      const student = await EventApplication.findByIdAndUpdate(req.params.id, updatedStudent, { new: true });
  
      if (!student) {
        return res.status(404).send('Student not found');
      }
  
      res.json(student);
    } catch (error) {
      // console.error(error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  app.post('/event-application', async (req, res) => {
    try {
      const {
        committeeName,
        committeeSecretory,
        contactNumber,
        email,
        eventDate,
        eventTime,
        venue,
        message
      } = req.body;
  
      const eventApplication = await EventApplication.create({
        committeeName,
        committeeSecretory,
        contactNumber,
        email,
        eventDate,
        eventTime,
        venue,
        message
      });
  
      res.status(201).json(eventApplication);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


app.listen(4000, () => {
    console.log(`VJTI Hostel app is listening on port ${4000}`);
  });