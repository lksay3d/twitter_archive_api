//leia kamal sayed :)
//assignment 2 - dr. foyzul hasan

//setting up a basic express server
const express = require('express');
const app = express();

//using port 3000
const port = 3000;

const tweetsData = require('/Users/sayedlk/twitter_archive_api/favs.json');

//use the express server
app.use(express.json());

//have the server listen to requests from port
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${3000}`);
  });  

//getting all tweets
//send a request to return the creation time, id, and text of the tweets
app.get('/tweets', (req, res) => {
    const tweets = tweetsData.map(tweet => ({
      created_at: tweet.created_at,
      id: tweet.id,
      text: tweet.text
    }));
    
    res.json(tweets);
  });  

//getting external links
//send a request to return the urls of the tweets
  app.get('/tweets/links', (req, res) => {
    const links = tweetsData.map(tweet => ({
      id: tweet.id,
      links: tweet.text.match(/https?:\/\/\S+/g) || []
    }));

    res.json(links);
  });
  
//getting tweet details
//send a request to return the details of a tweet from its id
  app.get('/tweets/:id', (req, res) => {
    const tweet = tweetsData.find(t => t.id_str === req.params.id);
    if (!tweet) {
        return res.status(404).send('Tweet not found');
    }

    res.json({
      created_at: tweet.created_at,
      text: tweet.text,
      screen_name: tweet.user.screen_name
    });
  });  

//getting user profile
//send a request to return the user profile attached to the screenname
  app.get('/users/:screen_name', (req, res) => {
    const userData = tweetsData.find(t => t.user.screen_name === req.params.screen_name);
    if (!userData) {
      return res.status(404).send('User not found');
    }

    const user = userData.user;

    res.json({
      location: user.location,
      description: user.description,
      followers_count: user.followers_count,
      friends_count: user.friends_count
    });
  });
  