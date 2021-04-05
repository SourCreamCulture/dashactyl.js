const fetch = require('node-fetch').default;

module.exports={
async setplan(url,token,userid,plan){
  if(!url) throw new TypeError("No url was specified")
  if(!userid) throw new TypeError("No user id was specified")
  if(!token) throw new TypeError("No token was provided")
  //if(!message) throw new TypeError("No message (message.channel) was provided")

const body = {"id": userid, "package": plan};

  fetch(`${url}/api/setplan`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      },
      body: JSON(body),
  })
  .then(res => res.json)
  .then(json => {
      return console.log(json.status);
  });
    //.then(json => (json.coins))
    //.then(res => console.log(res));
    //.then(res => res.text())
    //.then(text => console.log(text))
},
}