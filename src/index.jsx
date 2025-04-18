/*
 * Copyright (c) 2020-25 Prolincur Technologies LLP.
 * All Rights Reserved.
 */

const ALL = ['log', 'debug', 'warn', 'error', 'info', 'assert']

const suppressDefaultPropsError = () => {
  // Suppress defaultProps errors
  const theError = 'Support for defaultProps will be removed'
  const originalConsoleError = console.error
  console.error = (message, ...args) => {
    if (typeof message === 'string' && message.includes(theError)) {
      return
    }
    originalConsoleError(message, ...args)
  }
}

const disableConsoleLogger = (disabledIn = []) => {
  suppressDefaultPropsError()

  const disableThese = Array.isArray(disabledIn)
    ? disabledIn
    : disabledIn?.split(',').map((item) => item.trim()) || []
  const defaultConsole = console || window.console
  const myConsole = {
    ...window.console,
  }
  ALL.forEach((item) => {
    if (disableThese.includes(item)) {
      myConsole[item] = () => {}
    } else {
      myConsole[item] = defaultConsole[item]
    }
  })
  // override
  // eslint-disable-next-line no-global-assign
  console = myConsole
  window.console = myConsole
}

export default disableConsoleLogger
