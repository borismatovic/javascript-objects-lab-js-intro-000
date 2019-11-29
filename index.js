function updateObjectWithKeyAndValue(object, key, value){
    newObj = {};
    newObj[key] = value
    //object[key]  = value
    return Object.assign(newObj, object)
}
