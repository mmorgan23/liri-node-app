
//I need to add the OMDB API request link

//Write the code you need to grab the data from keys.js

//Make it so that liri.js can take in the command "my-tweets" , "spotify-this-song" , "movie-this" , "do-what-it-says"

//Tweet command line should show the last 20 tweets
//node liri.js my tweets


//Song information should show info about the artist, song name, preview link of the song from Spotify and the albim that the song is from
//If no song is provided then progrma will defauls to "The Sign" by Ace of Base
//node liri.js spotify-this-song'<song name here>'

//Movie information will output:
	//  * Title of the movie.
  	// * Year the movie came out.
	// * IMDB Rating of the movie.
	// * Country where the movie was produced.
	// * Language of the movie.
	// * Plot of the movie.
	// * Actors in the movie.
	// * Rotten Tomatoes Rating.
	// * Rotten Tomatoes URL.
//If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
//node liri.js movie-this '<movie name here>'


// Twitter API starts here
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'Ia2xMMiCRKpN0IDlMOIG0yHAO',
  consumer_secret: 'qu5CemOU1PtnY8QEz5iCEaNokGH7HIMBYUQLWX0ji0X4se5wOa',
  access_token_key: '2597015496-TsszzkA6IqPMXukYGX0z0rJhuaKq3ZFMq3e5ngs',
  access_token_secret: 'uTyN8TdVFInlU57QS52etbnGzDYhFyd6i90reGVq5jCPu',
});
 
var params = {screen_name: 'morganwhiz'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  //If there is no error, the code will run and print the console.log then move to the next step
  if (!error) {
    console.log("Tweets Below: ");

  }

for (i = 0; i < tweets.length; i++) {
	// This line prints the tweets in text only
    console.log(tweets[i].text);
    console.log("\n");
}

});


//Spotify API starts here

var spotify = require('spotify');
var songName = "one love";

// var nodeArgs = process.argv;
// var songName = "";
// for (var i = 2; i < nodeArgs.length; i++) {
//   if (i > 2 && i < nodeArgs.length) {
//     songName = songName + "+" + nodeArgs[i];
//   }
//   else {
//     songName += nodeArgs[i];
//   }
// }
 
spotify.search({ type: 'track', query: 'one love' }, function(err, data, response) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    } 
	else {
	console.log("I am working!");
}
});


//OMDB API Starts Here

var request = require("request");

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  }

  else {
    movieName += nodeArgs[i];
  }
}

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

// console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("\n");

  }
});

