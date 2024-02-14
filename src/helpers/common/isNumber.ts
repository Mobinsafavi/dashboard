import isString from "./isString";

const isNumber = (number: any): boolean => {
  if (isString(number) && number.length > 0) {
    return Number.isInteger(Number(number)) || !isNaN(number);
  }
  return typeof number === "number";
};

export default isNumber;
