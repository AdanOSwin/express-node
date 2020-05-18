const productsRoutes = require('./products-routes');
const userRoutes = require('./users-routes');

module.exports = (app) => {
    app.use('/api/v1/users', userRoutes );
    app.use('/api/v1/products', productsRoutes);   
}

// const rutas = (app) => {
//     app.use('/api/v1/users', userRoutes);
//     app.use('/api/v1/products', productsRoutes);
// }

//module.exports = router;

