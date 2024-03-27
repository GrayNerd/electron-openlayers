// const {app, BrowserWindow, ipcMain} = require('electron');
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import {fileURLToPath} from 'url';

let win: BrowserWindow | null;

app.on('ready', () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    show: false,
    // autoHideMenuBar: true,
  });

  win.loadFile(path.join(dirname(), 'index.html'));
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });

  win.on('ready-to-show', () => {
    win?.show();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

function dirname() : string{
  return path.dirname(fileURLToPath(import.meta.url));
}