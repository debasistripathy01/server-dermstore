const men = require("./DataDermStore/men.json")
const products = require("./DataDermStore/products.json")
const bestsellers = require("./DataDermStore/BestSellers.json")
const skinceuticals = require("./DataDermStore/skinceuticals.json");
const Blog = require("./DataDermStore/Blog.json")
const cart = require("./DataDermStore/cart.json")
const cartproduct = require("./DataDermStore/CartProduct.json")
const extradata = require("./DataDermStore/extraData.json")
const hair = require("./DataDermStore/hair.json")
const neocutis = require("./DataDermStore/Neocutis.json")
const newarrivals = require("./DataDermStore/NewArrivals.json")
const productsdata = require("./DataDermStore/productsData.json")
const skincare = require("./DataDermStore/SkinCare.json")
const trending = require("./DataDermStore/Trending.json")
const total = require("./db.json");


module.exports={
    bestsellers,
    Blog,
    cart,cartproduct, extradata, hair,neocutis, 
    newarrivals, productsdata, skincare, trending, 
    products,
    men,
    skinceuticals,
    total
}