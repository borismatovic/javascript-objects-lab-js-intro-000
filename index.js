function updateObjectWithKeyAndValue(object, key, value){
    var newObj = {};
    newObj[key] = value
    //return object[key]  = value
    return Object.assign(newObj, object)
}
