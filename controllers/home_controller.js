const runners = [
    "sanjeevkumarjv@gmail.com",
    "naveenraj20012001@gmail.com",
    "vaishuas24_cs@mepcoeng.ac.in",
    "arunkumark2305_me@mepcoeng.ac.in",
    "balajikrishnan2801@gmail.com",
    "ziusayn@gmail.com",
    "ariyabala2000@gmail.com",
    "keerthanabalamurugan2000@gmail.com",
    "irshad.gec@gmail.com",
    "r.nagarajan1999@gmail.com",
    "iamgok74@gmail.com",
    "arunsalli1712@gmail.com",
    "smrutthigeethu@gmail.com",
    "dinamathiram13_ec@mepcoeng.ac.in",
    "mahamurugan29@gmail.com",
    "amrethamaran26_cs@mepcoeng.ac.in",
    "subhashini211999_cs@mepcoeng.ac.in",
    "sandhiyapon@gmail.com",
    "angelfiorentia24@gmail.com",
    "nanthiniravir_ec@mepcoeng.ac.in",
    "rsreejanani2000@gmail.com",
    "sreemeenakshij10@gmail.com",
    "preethaprakash1245@gmail.com",
    "vroheeth666@gmail.com",
    "kavyashanbagam_bt@mepcoeng.ac.in",
    "deepikajeeva2000@gmail.com",
    "nivethaasree2001@gmail.com",
    "pvivigneshhari@gmail.com",
    "abirami22paulpandian@gmail.com",
    "bhuvanadevi2000_bt@mepcoeng.ac.in",
    "thulasi.t.2000_bt@mepcoeng.ac.in",
    "jabinesh28@gmail.com",
    "shinisubha003_bt@mepcoeng.ac.in",
    "vasanthapriyab2000@gmail.com",
    "keerthana.tcr14@gmail.com",
    "guruselvi100_bt@mepcoeng.ac.in",
    "saranyajeyasubramanian1999@gmail.com",
    "srihariveena.s_it@mepcoeng.ac.in",
    "malarkodishunmugavel@gmail.com",
    "anujaguru99_bt@mepcoeng.ac.in",
    "mridulaseenivasan@gmail.com",
    "soundsgood2112_ec@mepcoeng.ac.in",
    "subashinivikraman@gmail.com",
    "vethini05_ee@mepcoeng.ac.in",
    "venkatramansanthosh007_ee@mepcoeng.ac.in",
    "sheerinmsf@gmail.com",
    "msvidhya1999@gmail.com",
    "kavikutty.djms_bt@mepcoeng.ac.in",
    "kousikrishnan19501@gmail.com",
    "mallianjala_ec@mepcoeng.ac.in",
    "sowmyasomasundaram64_ec@mepcoeng.ac.in"
    ]

module.exports.home = function(req, res){
    // return res.render('wait');
    return res.render('end',{
        title: "innohunt"
    });
}
module.exports.check = function(req, res){
    let x = false;
    for(i in runners){
        if(runners[i] == req.user.email){
            x = true;
            break;
        }
    }
    if(req.user.final == 99){
        return res.render('winner');
    }else if(x){
        return res.render('runner');
    }else{
        return res.render('fail');
    }
   
    
}
module.exports.back = function(req, res){
    // return res.end("<h1>Home page is loaded for innohunt app</h1>");
    return res.redirect('/playground/');
}


module.exports.reminder = function(req, res){
    // return res.end("<h1>Home page is loaded for innohunt app</h1>");
    return res.render('reminder',{
        title: "innohunt"
    });
}

module.exports.testing = function(req, res){
    return res.render('end',{
        runners : runners
    });
}

