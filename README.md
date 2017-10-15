<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/Pittan/ngx-webview-bridge/master/demo/src/assets/logo.svg">
</p>

# ngx-webview-bridge - Angular-wrapped WebViewJavascriptBridge

[![npm version](https://badge.fury.io/js/ngx-webview-bridge.svg)](https://badge.fury.io/js/ngx-webview-bridge)
[![Build Status](https://travis-ci.org/Pittan/ngx-webview-bridge.svg?branch=master)](https://travis-ci.org/Pittan/ngx-webview-bridge)
[![Coverage Status](https://coveralls.io/repos/github/Pittan/ngx-webview-bridge/badge.svg?branch=master)](https://coveralls.io/github/Pittan/ngx-webview-bridge?branch=master)
[![dependency Status](https://david-dm.org/Pittan/ngx-webview-bridge/status.svg)](https://david-dm.org/Pittan/ngx-webview-bridge)
[![devDependency Status](https://david-dm.org/Pittan/ngx-webview-bridge/dev-status.svg?branch=master)](https://david-dm.org/Pittan/ngx-webview-bridge#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/Pittan/ngx-webview-bridge.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://Pittan.github.io/ngx-webview-bridge

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-webview-bridge` via:
```shell
npm install --save ngx-webview-bridge
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-webview-bridge`:
```js
map: {
  'ngx-webview-bridge': 'node_modules/ngx-webview-bridge/bundles/ngx-webview-bridge.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ngx-webview-bridge';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'ngx-webview-bridge';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'ngx-webview-bridge';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 Amon Keishima. Licensed under the MIT License (MIT)

