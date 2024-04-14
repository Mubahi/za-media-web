// validationUtils.js
export const validateObject = (obj, keysToCheck) => {
  for (const key of keysToCheck) {
    if (
      !(key in obj) ||
      obj[key] == null ||
      obj[key] === "" ||
      obj[key].length < 1
    ) {
      console.log(key);
      return false;
    }
  }
  return true;
};
