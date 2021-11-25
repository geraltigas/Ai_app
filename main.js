const {app, BrowserWindow,ipcMain} = require('electron')

const algorithm = require('./src/node/Queen');
const path = require("path");

console.log("hello world")

function createWindow() {
    const win = new BrowserWindow({
        height:600,
        width:378,
        icon: path.join(__dirname, './src/static/queen.ico'),
        resizable: false,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: false
        }
    })
    win.loadFile("index.html")
}

ipcMain.on("algoCall",(event,args) => {
    switch (args){
        case "dfs": {
            event.sender.send("algoBack",algorithm.dfs());
            console.log(algorithm.dfs())
            break;
        }
        case "bfs": {
            event.sender.send("algoBack",algorithm.bfs());
            console.log(algorithm.bfs())
            break;
        }
        case "default": {
            event.sender.send("algoBack","00000000");
            break;
        }
    }
})

app.whenReady().then(createWindow)
