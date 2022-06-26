/*
 * @Author: jack.hai
 * @Date: 2022-06-26 14:45:34
 * @LastEditTime: 2022-06-26 14:46:11
 * @Description: 
 */
const { name } = require('./package');
module.exports = {
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        port: 8181,
    },
    configureWebpack: {
        output: {
            library: `${name}-[name]`,
            libraryTarget: 'umd', // 把微应用打包成 umd 库格式
            jsonpFunction: `webpackJsonp_${name}`,
        },
    },
};