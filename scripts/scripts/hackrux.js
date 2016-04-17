/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var nestModule = require("nest/nestClient");
var nest = new nestModule.NestClient(true);

var witModule = require("wit/witClient");
var wit = new witModule.WitClient();

var http = require('http');
//console.log(JSON.stringify(request.parameters['command']));

//console.log(JSON.stringify(nest.listThermostats()));

var res = wit.converse(request.parameters['command']);
if (res['entities']['temperature']){
  nest.setTargetTemperature("OaQG5DZfj13NgqCyExTJu1MRGOVpd7TU", res['entities']['temperature'][0]['value'], 'f');
  response.write("SUCCESS");
  response.addHeaders(configuration.crossDomainHeaders);
  response.close();
}
else {
  response.write(JSON.stringify(nest.listThermostats()['OaQG5DZfj13NgqCyExTJu1MRGOVpd7TU']['target_temperature_f']));
  response.addHeaders(configuration.crossDomainHeaders);
  response.close();
  
}
  
  //console.log(JSON.stringify(nest.listThermostats()));


//console.log(JSON.stringify(nest.setTargetTemperature("OaQG5DZfj13NgqCyExTJu1MRGOVpd7TU", request.body.targetTemp, 'f')));			