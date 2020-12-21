const px2rem = require('postcss-plugin-px2rem')

module.exports = {
    babel: {
        plugins: [
            ["import", { libraryName: "antd-mobile", style: "css" }]
        ]
    },
    style: {
        postcss: {
            plugins: [
                px2rem({ rootValue: 37.5 })
            ]
        }
    },
    webpack: {

    }
}
