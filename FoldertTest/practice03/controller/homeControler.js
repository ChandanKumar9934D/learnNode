const homes=[]
exports.addhome=(req,res)=>{
    res.render('addhome')
}
exports.addedhome=(req,res)=>{
    console.log(req.body);
    const data=req.body
    homes.push(data)
    res.render('home',{homes})
}
exports.home=(req,res)=>{
    res.render('home',{homes})
}