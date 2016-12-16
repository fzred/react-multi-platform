import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import FastClick from 'fastclick'
import queryString from 'query-string'

const a: Number = 3

console.log(React, process.env.BROWSER, FastClick, queryString)
if ((module as any).hot) {
  (module as any).hot.accept();
}
