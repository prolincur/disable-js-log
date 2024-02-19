/*
 * Copyright (c) 2020-24 Prolincur Technologies LLP.
 * All Rights Reserved.
 */

const ALL = ['log', 'debug', 'warn', 'error', 'info']

const disableConsoleLogger = (disabledIn = []) => {
  const disableThese = Array.isArray(disabledIn)
    ? disabledIn
    : disabledIn?.split(',').map((item) => item.trim()) || []
  const defaultConsole = console || window.console
  const myConsole = {}
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
