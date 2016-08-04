'use strict'

const test = require('tape')
const stripFormatting = require('../')

test('strip formatting', (t) => {
  const code = `
    <div>
      <b>
        hello!
      </b>
    </div>
  `
  t.equal(stripFormatting(code), '<div><b>hello!</b></div>')
  t.end()
})
