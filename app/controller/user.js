const {Controller}=require('egg');
class UserController extends Controller{
        async add(){
            let {ctx}=this;
            console.log(ctx.request.body);
            ctx.body=ctx.request.body;
        }
}
module.exports= UserController