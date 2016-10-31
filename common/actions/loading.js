import {
  LOADING_NEW,
  LOADING_COMPLETE,
} from '../types'

export function newRequest() {
  return {
    type: LOADING_NEW,
  }
}

export function compliteRequest() {
  return {
    type: LOADING_COMPLETE,
  }
}
