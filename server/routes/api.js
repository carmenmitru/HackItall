const express = require('express');
const router = express.Router();
const AWS = require('aws-sdk');
const Fs = require('fs');
const Speaker = require('speaker');
const player = require('play-sound')(opts = {})
var bodyParser = require('body-parser');
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';



router.get('/welcomeDashboard',function(req,res){
   
    player.play('./audio/welcome_server.mp3',function(err){
              if (err) throw err
    })


    setTimeout(function () {
      player.play('./audio/new_orders.mp3',function(err){
                  if (err) throw err
        })
    }, 4000)
    

  
   
});


router.get('/readmenu',function(req,res){
   
    player.play('./audio/menus/tomato_soup.mp3',function(err){
              if (err) throw err
    })

    setTimeout(function () {
      player.play('./audio/menus/french_soup.mp3',function(err){
                  if (err) throw err
        })
    }, 4000)

    setTimeout(function () {
      player.play('./audio/menus/tomato_salad.mp3',function(err){
                    if (err) throw err
          })
    }, 8000)
   
   
   
});


router.get('/welcome', (req, res) => {

  //  res.send('WelcomeM');
  const AWS = require('aws-sdk')
  const Fs = require('fs')

  AWS.config.loadFromPath('./config.json');

  // Create an Polly client
  const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'us-east-1'
  })

  let params = {
    'Text': 'Hello my name is Sara and I will present to you menu of restaurant Hakithon',
    'OutputFormat': 'mp3',
    'VoiceId': 'Salli'
  }

  Polly.synthesizeSpeech(params, (err, data) => {
    if (err) {
      console.log(err.code)
    } else if (data) {
      if (data.AudioStream instanceof Buffer) {
        Fs.writeFile("./audio/welcome.mp3", data.AudioStream, function (err) {
          if (err) {
            return console.log(err)
          }else{
            console.log("The file was saved!")
            player.play('./audio/welcome.mp3', function(err){
              if (err) throw err
            })
          }
          
        })
      }
    }
  })
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});





module.exports = router;