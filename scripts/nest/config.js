/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 // url to invoke to trigger step 1 of the oauth 2 process
// this value is available at https://developer.nest.com/clients (after signing-in)
var nest_auth_url = "https://home.nest.com/login/oauth2?client_id=b5a10d57-592a-44fb-975d-d2487d532986&state=STATE";

// url to invoke to trigger step 2 of the oauth 2 process, once a client code was obtained,
// to be exchanged for an access token
// this value is available at https://developer.nest.com/clients (after signing-in)
var nest_access_token_url = "https://api.home.nest.com/oauth2/access_token?client_id=b5a10d57-592a-44fb-975d-d2487d532986&code=9KKU8CY2&client_secret=zaYKErlWBRD5C1wqW7edJt4Fs&grant_type=authorization_code";

// this value is available at https://developer.nest.com/clients (after signing-in)
var client_id = "b5a10d57-592a-44fb-975d-d2487d532986"; // example

// this value is available at https://developer.nest.com/clients (after signing-in)
var client_secret = "zaYKErlWBRD5C1wqW7edJt4Fs"; // example

// the root of the nest API's url 
var nestRootUrl = "https://developer-api.nest.com";

// suffixe to add to the nest root url to manipulate devices
var devicesUrl = "/devices";

// suffixe to add to the nest root url to manipulate structures
var structuresUrl = "/structures";

// generate a random state to be used in the oauth 2 process' steps
var state = (function() {
  return ('xxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  }));
})();;

// store your access token in the below variable or in the storage
var token = {
 "access_token": "c.m8e8xWGAWznqOoGQSVPRQbl8zQJSyfCcByConCuTMdYPxsED4elkxtbT1f8e2hJetiHWJPUuqUabWyN7HeHkhUxKuP08oGQ5ADyyjMmZDJchItoy4H9aHFxKb0O7TTzGF3WKivp6Bileyll0",
 "expires_in": 315360000
}

function getNestAuthUrl() {
  
	return {
      "url": nest_auth_url + "client_id=" + client_id,
      "state": state
    }
}

function getNestAccessTokenUrl() {
  return nest_access_token_url;
}

function getDevicesUrl() {
  return nestRootUrl + devicesUrl;
}

function getStructuresUrl() {
  return nestRootUrl + structuresUrl;
}			