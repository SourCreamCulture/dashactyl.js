package works now!
---

**only has a getting coins function right now**
**if you want to help with development create a pull request at the github repo**

```js
const dash = require('dashactyl.js');

dash.Userinfo.coins('https://client.yourdomain.com','api token','user id',message) //pass in your message.channel, message

//responds with a number of however many coins that person has
```
```js
dash.Userinfo.userinfo('https://client.yourdomain.com','api token','user id',message) //pass in your message.channel, message

//responds with a json object of a users information
```