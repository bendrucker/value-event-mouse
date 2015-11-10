'use strict'

var assert = require('assert-ok')
var BaseEvent = require('value-event/base-event')
var Delegator = require('dom-delegator')

var delegator = Delegator()
var events = {
  enter: null,
  leave: null,
  move: null,
  out: null,
  over: null
}

module.exports = function register (name, handler, data, options) {
  assert(events.hasOwnProperty(name), name + ' is not a valid mouse event')
  events[name] = events[name] || Event(name)
  return events[name](handler, data, options)
}

function Event (name) {
  delegator.listenTo('mouse' + name)
  return BaseEvent(onMouseEvent)
}

function onMouseEvent (event, broadcast) {
  broadcast(this.data)
}
