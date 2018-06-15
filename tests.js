var {name, height} = require("./index.js")
// var height = require("./index.js")

if(name.name === "Susan"){
  console.log("The name is correct")
}else{
  console.log("Expected: Susan" + ", " + "Received " + name.name )
}

if(height.height === 70){
  console.log("The height is correct")
}else{
  console.log("Expected: 70" + ", " + "Received " + height.height)
}
