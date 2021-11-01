const morgan = require("morgan");

exports.payloadLogger = (tokens, req, res) => {
  morgan.token("payload", function (req, res) {
    const payload = JSON.stringify(req.body);
    return payload === "{}" ? "" : payload;
  });

  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, "content-length"),
    "-",
    tokens["response-time"](req, res),
    "ms",
    tokens.payload(req, res),
  ].join(" ");
};
