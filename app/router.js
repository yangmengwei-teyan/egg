'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/userlist',controller.home.getList)
   //router.post('/add',controller.user.add)
   router.post('api/registry',controller.user.registry)
};
