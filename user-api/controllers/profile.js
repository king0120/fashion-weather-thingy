import mongoose from 'mongoose';

const User = mongoose.model('User');

export let profileRead = function(req, res){
  console.log(req.payload)
  if (!req.payload._id){
    res.status(401).json({
      "Message": "UnauthorizedError: private profile"
    });
  } else {
    User.findById(req.payload._id, function(err, user){
        console.log(user);
          res.status(200).json(user);
        })
  }
}