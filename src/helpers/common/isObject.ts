const isObject = (obj: any): boolean => Boolean(obj instanceof Object && obj.constructor === Object);

export default isObject;
