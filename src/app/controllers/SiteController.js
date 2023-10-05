class SiteController {
    index(req,res){
        res.render('home');
    }
    search(req, res){
        res.render('search');
    }
    login(req, res){
        res.render('login');
    }
    register(req,res){
        res.render('register');
    }
    

}
module.exports = new SiteController;