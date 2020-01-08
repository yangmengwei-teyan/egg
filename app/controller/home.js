'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {
      ctx
    } = this;
    ctx.body = 'hi, egg';
  }
  async getList() {
    let {
      ctx
    } = this;
    //console.log("===",this.app.mysql)
    ctx.body = [{
      name: "zs"
    }, {
      name: "lisr"
    }]

  }
  async add() {
    let {
      ctx
    } = this;
    console.log(ctx.request.body);
    ctx.body = ctx.request.body
  }
}

module.exports = HomeController;