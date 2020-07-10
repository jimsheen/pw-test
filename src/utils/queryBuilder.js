import { isString, isNumber, isArray, isObject, isNil } from 'lodash';

export default queryParams => {
  let query = '';

  if (!isObject(queryParams)) {
    return query;
  }

  let numParamsBuilt = 0;
  Object.keys(queryParams).forEach(function(key) {
    if (!isNil(queryParams[key])) {
      if (numParamsBuilt === 0) {
        query += `?${buildQueryParam(key, queryParams[key])}`;
      } else {
        query += `&${buildQueryParam(key, queryParams[key])}`;
      }
      numParamsBuilt++;
    }
  });

  return query;
};

/**
 * Given a key and a value it will build a query string
 * based on the supplied parameters. It supports
 * objects and nested objects also.
 * 
 * @param {string, number} key 
 * @param {string, number, object} value 
 */
const buildQueryParam = (key, value) => {
  if (isString(value) || isNumber(value)) {

    return `${key}=${encodeURI(value)}`;

  } else if (isObject(value)) {
    
    return Object.keys(value).map((nestedKey, i) => 
      buildQueryParam(`${key}[${nestedKey}]`, value[nestedKey])
    ).join('&');

  } else if (isArray(value)) {
    
    return value.map(((val, index) => 
      buildQueryParam(`[${index}]`, val))
    ).join('&');

  }
  return '';
}