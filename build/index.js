"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (event, context, callback) {
  var method = event.method;
  var path = event.path;
  var headers = event.headers;
  var body = event.body;
  Router.find(method, path, headers, body, ctx).then(function (result) {
    return callback(null, result);
  }).catch(function (err) {
    err.code || ctx.status;
    callback(err);
  });
};