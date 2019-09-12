# extendscript-react-extension

This project serves as a proof of concept for the use of React within Adobe Extendscript extensions. At time of writing this is React 16.9, ES2019.

# Setup

Follow the basic setup steps provided [here](https://github.com/Adobe-CEP/Samples/tree/master/PProPanel).  
Install [node](https://nodejs.org/en/)
Run `npm install gulp -g`
Run `npm install`
Run `npm start`
Open Premiere and navigate to `Window > Extensions > React Example`

Files may fail to copy due to permissions. If so, either create a symlink or copy the contents of the `plugin` folder to

`C:\\Program Files (x86)\\Common Files\\Adobe\\CEP\\extensions\\YourPluginName` for Windows  
or `/Library/Application Support/Adobe/CEP/extensions/YourPluginName` for Mac

# Config

A few options exist within `package.json` under the `extendscript` field. These are copied to `manifest.xml` when running `npm start`.
