const usersRouter = require("./users.js");
const productsRouter = require("./product.js");
const cartRouter = require("./cart.js")

function route(app) {
    app.use(usersRouter);
    app.use(productsRouter);
    app.use(cartRouter);
}
module.exports = route;

