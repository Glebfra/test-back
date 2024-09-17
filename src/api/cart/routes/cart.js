module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/cart/add',
     handler: 'cart.add',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/cart/delete',
      handler: 'cart.delete',
      config: {
        policies: [],
        middlewares: [],
      }
    }
  ],
};
