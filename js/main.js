'use strict';

function getResult(response){
  console.log(response)
}

// $.ajax({
//   type: "GET",
//   url: "https://api.edamam.com/api/recipes/v2",
//   data: {type:'public', q:'chicken', app_id:'4db0dd79', app_key:'b3bc668317036dc1410dfca491ab9d6a'},
//   success: getResult
// })

// http --verbose https://api.edamam.com/api/recipes/v2? type==public q==chicken app_id==4db0dd79 app_key==b3bc668317036dc1410dfca491ab9d6a

const req = {
  type: "GET",
  data: {type:'public', q:'chicken', app_id:'4db0dd79', app_key:'b3bc668317036dc1410dfca491ab9d6a'},
}

fetch("https://api.edamam.com/api/recipes/v2", req)
.then(response => response.json())
.then(data => console.log(data))
