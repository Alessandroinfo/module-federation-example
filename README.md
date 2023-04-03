### Module Federation Vanilla JS example
Simplest example on how to do Module Federation with Vanilla JS (without React.js or others).

### Structure
Is a monorepo structure.
The **home** is the app container where it's imported the **header** remote module.

* home
* header



### Getting started
It'a  monorepo so you can find workspaces setting in package.json.
`npm i` will install every packages dependencies
`npm run build` will build each package.
`npm run start` will serve each package so you can import remote module on home app.

home is served on  http://localhost:4000
header is served on  http://localhost:4001

### Module Federation Settings
**home** `webpack.config.js`
```js
...
new ModuleFederationPlugin({
name: "home",
filename: "remoteEntry.js",
remotes: {
nav: "nav@http://localhost:4001/remoteEntry.js"
},
shared: {
...deps
}
}),
...
```

**header** `webpack.config.js`
```js
...
new ModuleFederationPlugin({
    name: "nav",
    filename: "remoteEntry.js",
    exposes: {
        "./Header": "./src/Header"
    },
    shared: {
        ...deps
    }
}),
...
```
### Result
![img.png](docs/img.png)
