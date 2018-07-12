
import assign from 'lodash/assign'

export let PortalEndpoints = {
  LOAD_PAGE: 'https://api.thingspeak.com/channels/535036/feeds.json?results=2',
};

function doGet(url, body,props) {
  props = props || {};
  return fetch(
    url,
    assign({
      method: 'get',
      body: body,
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }, props)
  )
    .then(checkStatus)
}

function doPost(url, body, props) {
  props = props || {};
  return fetch(
    url,
    assign({
      method: 'post',
      body: body,
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, props)
  ).then(checkStatus)
}

function checkStatus(response) {
  return response.json().then((data)=> {
    let newResponse = {...data, status: response.status, ok: response.ok};
    if (response.status >= 200 && response.status < 300) {
      return newResponse
    } else {
      throw newResponse
    }
  })
}


export function createPage(body){
  return doPost(`${PortalEndpoints.LOAD_PAGE}`,JSON.stringify(body),{headers: {
      'Content-Type': 'application/json'
    }})
}

export function loadPage(apiKey) {
  return doGet(`${PortalEndpoints.LOAD_PAGE}`,null,{headers: {
      'Content-Type': 'application/json'
    }});
}

