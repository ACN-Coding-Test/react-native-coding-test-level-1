import axios from "axios";

export async function getService(url) {
    return await new Promise((resolve, reject) => {
        var config = {
            method: 'get',
            url: `${url}`
          };
          axios(config)
          .then(function (response) {
            return resolve(response.data);
          })
          .catch(function (error) {
            return reject(error)
          });
    })
}