#package works now!<br>

#only has a getting coins function right now<br>
#if you want to help with development create a pull request at the github repo<br>

```js
const dash = require('dashactyl.js')

dash.coins('https://client.yourdomain.com','api token','user id',message) //pass in your message.channel, message

//responds with a number of however many coins that person has
```
```js
dash.userinfo('https://client.yourdomain.com','api token','user id',message) //pass in your message.channel, message

//responds with a json object of a users information
```