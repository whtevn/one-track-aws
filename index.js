export default function(event, context, callback) {
  const method = event.method;
  const path = event.path;
  const headers = event.headers;
  const body = event.body;
  Router
    .find(method, path, headers, body, ctx)
    .then(result => callback(null, result)) 
    .catch((err) => {
      err.code||ctx.status;
      callback(err);
    });
}
