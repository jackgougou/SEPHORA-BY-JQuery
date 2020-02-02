console.log("通道ok");
// console.log("加载成功");
/* 
    配置引入的文件路径
*/
require.config({
    paths: { 
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "parabola": "parabola",
        "index": "index",
        // "goods":"goods",
        // "product":"product",
        // "shopCar":"shopCar",
        // "design":"design",


    },
    shim: {
        //设置依赖关系  先引入jquery.js  然后在隐去jquery-cookie
        "jquery-cookie": ["jquery"],
        //声明当前模块不遵从AMD
        "parabola": {
			exports: "_"
		}
    }
})

//加载首页的代码

// require(["index","goods","product","shopCar","design"], function(index,goods,product,shopCar,design){
require(["index"], function(index){
        index.top()
        index.banner()
    // index.logoInput()
    // index.logoInput2()
    // index.nav()
    // index.navStr()
    // index.banner()
    // index.bannerStr()
    // index.mainMenu()
    // index.mainMenuF()
    // index.sectionStr()
    // index.section2Str()
    // index.section3Str()
    // goods.allShop()
    // goods.allGoods()
    // product.product()
    // shopCar.shopCar()
    // design.design()
    // design.logo()
})