const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'Agnethon2024';

router.post('/createadmin', [
  body('name', 'Enter a name with a size greater than 3').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be at least 5 characters long').isLength({ min: 5 })
], async (req, res) => {
  let success = false;
  // Returning errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // If there are validation errors, return the error messages
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
    // Check whether the email is already taken 
    let existingUser = await Admin.findOne({ email: req.body.email });
    if (existingUser) {
      success = false
      return res.status(400).json({ error: "Sorry, a user with this email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt) ;
    // Create a new user
    let user =  Admin.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    });

    const data = {
        user:{
            id: user.id
        }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
    // console.log({authtoken})
    success = true;
    res.json({ success, authtoken });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// authenticate a user
router.post('/loginadmin', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password can be blank').exists(),
  ], async (req, res) => {
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
    // If there are validation errors, return the error messages
    return res.status(400).json({ errors: errors.array() })}

    const {email,password} = req.body;
    try{
        let user= await  Admin.findOne({email});
        if(!user){
          success=false;
            return res.status(400).json({error: "Incorrect credentials"});
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
          success=false;
            return res.status(400).json({success,error: "Incorrect credentials"});
        }

        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        success=true;
        res.json({success,authtoken});
    }catch(error){
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
  })


//route 3 getting logged in user details
router.post('/getadmin', fetchuser,async (req, res) =>{
    try{
        userId=req.user.id;
        const user = await Admin.findById(userId).select("-password")
        res.send(user);

    }catch(error){
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
module.exports = router;
