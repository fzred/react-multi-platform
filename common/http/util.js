export const isArray = Array.isArray

export function isString(val) {
  return typeof val === 'string'
}

export function isBoolean(val) {
  return val === true || val === false
}

export function isFunction(val) {
  return typeof val === 'function'
}

export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

export function isPlainObject(obj) {
  return isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype
}

export function when(value, fulfilled, rejected) {
  const promise = Promise.resolve(value)

  if (arguments.length < 2) {
    return promise
  }

  return promise.then(fulfilled, rejected)
}

export function each(obj, iterator) {
  if (obj && typeof obj.length === 'number') {
    for (let i = 0; i < obj.length; i += 1) {
      iterator.call(obj[i], obj[i], i)
    }
  } else if (isObject(obj)) {
    for (const key of Object.getOwnPropertyNames(obj)) {
      iterator.call(obj[key], obj[key], key)
    }
  }

  return obj
}
