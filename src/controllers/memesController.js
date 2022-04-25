let axios = require('axios');

let get_memes = async function (req, res, next){
    try{

let  options = {
    method: 'GET',
    url: 'https://api.imgflip.com/get_memes'
    } 
    let result = await axios (options);
    console.log(result);
    let data = result.data
    res.status(200).send({msg: data, statur:true});

}catch (error) {
    console.log(error)
    res.status(500).send({msg: error.message});

}
}
module.exports.get_memes= get_memes

let create_memes = async function(req, res) {
    try{
        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password
        var options ={ 
        method:'POST', 
        url:`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        // hit this POST request on postman
        // http://localhost:3000/create_memes?template_id=87743020&text0=sdfei&text1=im aaaaa&username=chewie12345&password=meme@123
    }
    let result = await axios(options)
    console.log(result.data)
    res.status(200).send({msg: result.data})
}
catch (err) {
    console.gog(err)
    res.status(500).send({msg: err})
}

}
module.exports.create_memes= create_memes

