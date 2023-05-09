# README

## npx webpack

实际上是执行了 node_modules/.bin/webpack.CMD

* 1、node_modules/.bin/webpack.CMD 文件的核心作用是 组装了 `node  "%~dp0\..\webpack\bin\webpack.js" %* `，即：node .../webpack/bin/webpack.js;
* 2、webpack.js 中核心操作是 require `node_modules/webpapck-cli/bin/cli.js`
* 3、`node_modules/webpapck-cli/bin/cli.js` 核心操作 加载 `../lib/bootstrap` 并执行 runCLI，参数是：`process.argv`
* 4、`../lib/bootstrap` 加载 `./webpack-cli`，实例化 WebpackCLI，并生成 `cli`，运行 `cli.run(args)`。
* 5、`cli.run(args)` 
  * 1、处理参数，并将参数交给痌的逻辑；
  * 2、options
  * 3、compiler
  * 4、compiler.run()
  