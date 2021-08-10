// vue默认的配置文件

// webpack+node环境导出配置对象
module.exports = {
    devServer: {
        port: 4444,
        open: true, //是否浏览器自动打开
    },
    // 暂时关闭eslint代码检查
    lintOnSave: false,
}