const fetch = require('node-fetch').default;

module.exports={

async coins(url,token,userid){
  if(!url) throw new TypeError("No url was specified")
  if(!userid) throw new TypeError("No user id was specified")
  if(!token) throw new TypeError("No token was provided")
  //if(!message) throw new TypeError("No message (message.channel) was provided")

/*async function res() {
  try {
    const response = await axios.get(`${url}/api/userinfo`, {
      params: {
      ID: userid,
      Authorization: `Bearer ${token}`,
    }
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
  return(response)
}*/

  return fetch(`${url}/api/userinfo/?id=${userid}`, {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
      },
      body:    null,
  })
  .then(res => res.json())
  .then(json => (json.coins))
    //.then(json => (json.coins))
    //.then(res => console.log(res));
    //.then(res => res.text())
    //.then(text => console.log(text))
    //return(got.data)
},
async userinfo(url,token,userid,message){
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
      return message.reply(json.userinfo);
  });
},
async email(url,token,userid,message){
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
      return message.reply(json.userinfo.attributes.email);
  });
},
async username(url,token,userid,message){
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
      return message.reply(json.userinfo.attributes.username);
  });
},
async firstname(url,token,userid,message){
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
      return message.reply(json.userinfo.attributes.first_name);
  });
},
async lastname(url,token,userid,message){
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
      return message.reply(json.userinfo.attributes.last_name);
  });
},
async admin(url,token,userid,message){
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
      return message.reply(json.userinfo.attributes.root_admin); //returns true or false
  });
},
}