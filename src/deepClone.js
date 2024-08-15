function deepClone(obj) {
  if (obj == null || typeof obj !== "object") {
    return obj;
  }
  let clonedObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

export default deepClone;
