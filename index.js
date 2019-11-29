function updateObjectWithKeyAndValue(object, key, value){
    var newObj = {};
    newObj[key] = value
    //object[key]  = value
    return Object.assign(newObj, object)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var newObj = {}
  Object.assign(newObj, object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey() {
  delete object[key]
  return object
}
