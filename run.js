const webpack = require('webpack');
const options = require('./webpack.config.js');

const compiler = webpack(options);
compiler.run((err, stats) => {
  console.log('err: ', err);
  console.log('stats: ', stats.toJson({
    entries: true,
    chunks: false,
    medules: false,
    assets: false
  }));
});

/**
 * 开始
 * 合并配置
 * 实例化compiler
 * 设置node文件的读写能力
 * 通过循环挂载plugins
 * 处理webpack内部默认插件（入口文件）
 */

/**
 * beforeRun
 * run
 * thisCompilation
 * compilation
 * beforeCompile
 * compile
 * make
 * finishMake
 * 
 * finishModules
 * 
 * seal
  * optimizeDependencies
  * afterOptimizeDependencies
  * 
  * beforeChunks
  * afterChunks
  * 
  * optimize
  * optimizeModules
  * afterOptimizeModules
  * 
  * optimizeChunks
  * afterOptimizeChunks
  * 
  * optimizeTree
  * afterOptimizeTree
  * 
  * optimizeChunkModules
  * afterOptimizeChunkModules
  * shouldRecord
  * 。
  * 。
  * 。
  * complation 2984
 * afterSeal
 * 
 * beforeChunkAssets
 * 
 * afterCompile
 * 
 * shouldEmit
 * done
 * 
 */