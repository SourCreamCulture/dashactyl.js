const fetch = require('node-fetch').default;

module.exports={
  coins: function(url,userid,token){
    if(!url) throw new TypeError("No url was specified")
    if(!userid) throw new TypeError("No user id was specified")
    if(!token) throw new TypeError("No token was provided")

    fetch(`https://${url}/api/userinfo/${userid}`, {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          Authorization: token, 
        },
        body:    null,
    })
    .then(res => (res.coins));
    //.then(json => console.log(json));
    //.then(res => console.log(res));
  }
}