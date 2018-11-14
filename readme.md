# value-event-mouse [![Build Status](https://travis-ci.org/bendrucker/value-event-mouse.svg?branch=master)](https://travis-ci.org/bendrucker/value-event-mouse) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/value-event-mouse.svg)](https://greenkeeper.io/)

> value-event handlers for mouse events


## Install

```
$ npm install --save value-event-mouse
```


## Usage

```js
var h = require('virtual-dom/h')
var mouseEvent = require('value-event-mouse')

var vtree = h('div', {
  'ev-mouseenter': mouseEvent('enter', function () {
    console.log('mouse entered')
  })
})
```

Or require a specific event:

```js
var h = require('virtual-dom/h')
var mouseEnter = require('value-event-mouse/enter')

var vtree = h('div', {
  'ev-mouseenter': mouseEnter(function () {
    console.log('mouse entered')
  })
})
```

## API

#### `mouseEvent(name, handler, [data], [options])` -> `function`

`handler`, `data` and `options`, are passed directly to value-event.

##### name

*Required*  
Type: `string`

The name suffix of the mouse event:

* enter
* leave
* move
* out
* over

When requiring a name directly (`require('value-event-mouse/enter')`) the name property is already applied and should be omitted.

##### handler

*Required*  
Type: `function`  
Arguments: `data`

A handler to call when the event occurs.


## License

MIT © [Ben Drucker](http://bendrucker.me)
