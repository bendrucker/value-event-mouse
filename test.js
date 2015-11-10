'use strict'

var test = require('tape')
var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')
var document = require('global/document')
var dispatchEvent = require('dispatch-event')
var mouseEnter = require('./enter')

test(function (t) {
  t.plan(1)

  var vtree = render()
  var root = createElement(vtree)
  document.body.appendChild(root)

  dispatchEvent(root, 'mouseenter')

  function onMouseEnter (data) {
    t.deepEqual(data, {
      foo: 'bar'
    })
  }

  function render () {
    return h('div', {
      'ev-mouseenter': mouseEnter(onMouseEnter, {
        foo: 'bar'
      })
    })
  }
})

