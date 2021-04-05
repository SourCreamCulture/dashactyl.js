const fetch = require('node-fetch').default;

module.exports={
async ram(url,token,userid,message){
  if(!url) throw new TypeError("No url was specified")
  if(!userid) throw new TypeError("No user id was specified")
  if(!token) throw new TypeError("No token was provided")
  if(!message) throw new TypeError("No message (message.channel) was provided")

  fetch(`${url}/api/userinfo/?id=${userid}`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      },
      body:    null,
  })
  .then(res => res.json())
  .then(async (json) => {
      return message.reply(json.package.ram);
  });
},
async disk(url,token,userid,message){
  if(!url) throw new TypeError("No url was specified")
  if(!userid) throw new TypeError("No user id was specified")
  if(!token) throw new TypeError("No token was provided")
  if(!message) throw new TypeError("No message (message.channel) was provided")

  fetch(`${url}/api/userinfo/?id=${userid}`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      },
      body:    null,
  })
  .then(res => res.json())
  .then(async (json) => {
      return message.reply(json.package.disk);
  });
},
async cpu(url,token,userid,message){
  if(!url) throw new TypeError("No url was specified")
  if(!userid) throw new TypeError("No user id was specified")
  if(!token) throw new TypeError("No token was provided")
  if(!message) throw new TypeError("No message (message.channel) was provided")

  fetch(`${url}/api/userinfo/?id=${userid}`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      },
      body:    null,
  })
  .then(res => res.json())
  .then(async (json) => {
      return message.reply(json.package.cpu);
  });
},
async servers(url,token,userid,message){
  if(!url) throw new TypeError("No url was specified")
  if(!userid) throw new TypeError("No user id was specified")
  if(!token) throw new TypeError("No token was provided")
  if(!message) throw new TypeError("No message (message.channel) was provided")

  fetch(`${url}/api/userinfo/?id=${userid}`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      },
      body:    null,
  })
  .then(res => res.json())
  .then(async (json) => {
      return message.reply(json.package.servers);
  });
},
}