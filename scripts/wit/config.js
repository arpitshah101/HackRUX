/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /**
 * this module contains the necessary configuration to enable
 * proper communication with wit.ai and other parameters required
 * by the wit.ai wrapper
 * @module config
 */
 
// The URL root to wit.ai's APIs
var witApiUrl = "https://api.wit.ai/";

// Default audio type of voice commands
var audioType = "audio/wav";

// The developer's application ID at wit.ai
var appId = "57130fb1-e85b-4784-aa46-a7383957e38a"; // example

// The server to server wit.ai OAuth token
var serverAccessToken = "4RATNLCOCFE7QCN2IRC4ZMZ2YBVZS6PQ";  // example

// fill this variable to associate a script name to an intent name and map the entities to the parameter names
// (optional)
// the content of the "mapping" variable below is an example of a mapping
var mapping = {
  
  "get_nearest_venue": { // this is the intent name
    "script": "wit/test/getNearestVenue", // this is the full path to the script to invoke for the intent
    "params": { // mapping of the entities to parameters
      "distance": "radius", // the distance entity is mapped to the radius parameter
      "local_search_query": "venue" // the local_search_query entity is mapped to the venue parameter
    }
  }
};			