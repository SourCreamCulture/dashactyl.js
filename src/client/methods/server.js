const ClientRequest = require('../../ClientRequest');
const axios = require('axios');
const json = require('json')

class Servers extends ClientRequest {

    setplan(userid, plan) {
        //var body = {"id": userid, "package": plan};
        var body = ({"id": userid, "package": plan})
        
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: `${this.host}/api/setplan`,
                maxRedirects: 5,
                headers: this.headers(),
                body: body,
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }

    addcoins(userid, coins) {
        var body = ({"id": userid, "coins": coins})
        
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: `${this.host}/api/addcoins`,
                maxRedirects: 5,
                headers: this.headers(),
                body: body,
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }

    unsuspendServer(serverid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'PATCH',
                url: `${this.host}/api/servers/${serverid}/unsuspend`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }

    deleteServer(serverid) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'DELETE',
                url: `${this.host}/api/servers/${serverid}`,
                maxRedirects: 5,
                headers: this.headers()
            }).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(this.HttpError(error));
            });
        });
    }
}

module.exports = Servers;