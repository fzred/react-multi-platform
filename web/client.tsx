/// <reference path="../typings/history.d.ts" />
/// <reference path="../typings/fastclick.d.ts" />
import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as FastClick from 'fastclick'
import * as queryString from 'query-string'
import {createBrowserHistory, createPath} from 'history'

const a: Number = 3

FastClick.attach(document.body)

console.log(createBrowserHistory, createPath, FastClick)
if ((module as any).hot) {
  (module as any).hot.accept();
}
