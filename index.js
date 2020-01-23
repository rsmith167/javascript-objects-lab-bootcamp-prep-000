var recipes = {food: "amount"}

function updateObjectWithKeyAndValue(obj, key, value){
 var newObj = Object.assign( {}, obj, {[key]:[value]})
  return newObj
}