# disable-js-log

A simple utility to disable console logs in JavaScript application

#### Install

`yarn add disable-js-log`

#### Usage

```javascript
     import disableJsLogger from './disable-js-log/dist/lib.js'

      // Disable log and debug
      disableJsLogger('log', 'debug')
      console.log('Log will not be visible on console')
      console.debug('Debug will not be visible on console')

      console.error('Error will be visible, but not log/debug')
```

### Author

[Prolincur Technologies](https://prolincur.com)