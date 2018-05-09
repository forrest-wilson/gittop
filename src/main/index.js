'use strict'

import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

const settings = require('electron-settings')

function createWindow () {
  /**
   * Initial window options
   */

  let windowSettings = {
    minWidth: 750,
    minHeight: 500,
    width: 1000,
    height: 700,
    titleBarStyle: 'hiddenInset',
    useContentSize: true,
    show: false
  }

  let storedSettings = settings.get('mainWindowPosition')

  if (storedSettings) {
    windowSettings.width = storedSettings.width
    windowSettings.height = storedSettings.height
    windowSettings.x = storedSettings.x
    windowSettings.y = storedSettings.y
  }

  mainWindow = new BrowserWindow(windowSettings)

  mainWindow.loadURL(winURL)

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.on('close', () => {
    let size = mainWindow.getSize()
    let position = mainWindow.getPosition()
    settings.set('mainWindowPosition', {x: position[0], y: position[1], width: size[0], height: size[1]})
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
