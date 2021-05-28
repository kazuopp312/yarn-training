'use strict';
// パッケージをrequire関数でモジュールとして取得
const axios = require('axios');
/* getメソッドに対してHTTPリクエストを送るURLを渡し
   thenメソッドに対してHTTPレスポンスを受け取った際に実行する無名関数を渡す */
axios.get('https://www.google.com').then(res => {
  console.log(res.data);
});