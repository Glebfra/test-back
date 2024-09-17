'use strict';

/**
 * cart service
 */

module.exports = () => ({
  addToCart: async () => {
    try {
      const user = await strapi.get('user');
    } catch (error) {
      console.error('Error: ', error);
    }
  }
});
