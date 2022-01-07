const axios = require('axios');
const url = require('url');
const path = require('path');

export default function handler(req, res) {
  const body = req.body;
  const shopifyPath = req.url.replace('api/shopify/', '');
  const shopifyUrl = `https://rens-disposable.myshopify.com`;

  const accessToken = req.cookies.accessToken;
  const requestUrl = (new url.URL(path.join('/admin/api/2020-07', shopifyPath), shopifyUrl)).href;

  axios({
    url: requestUrl,
    method: req.method,
    data: req.body,
    headers: {
      'X-Shopify-Access-Token': accessToken
    }
  }).then(({ data }) => {
    res.status(200).json(data)
  }).catch((error) => {
    res.status(400).send(error)
  })
}
