'use strict';

/**
 * A set of functions called "actions" for `cart`
 */

module.exports = {
  add: async (ctx, next) => {
    try {
      const userId = ctx.state.user.id;
      const productId = ctx.request.body.id;

      strapi.entityService.update('plugin::users-permissions.user', userId, {
        data: {
          products: {
            connect: [productId]
          }
        }
      })

      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },
  delete: async (ctx, next) => {
    try {
      const userId = ctx.state.user.id;
      const productId = ctx.request.body.id;

      strapi.entityService.update('plugin::users-permissions.user', userId, {
        data: {
          products: {
            disconnect: [productId]
          }
        }
      })

      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  }
};
