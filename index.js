const http = require("http");
const httpProxy = require("http-proxy");

const proxy = httpProxy.createProxyServer({});
const destinationHost =
  process.env.PROXY_DESTINATION_HOST || "http://localhost:3000";
const server = http.createServer((req, res) => {
  // Redirigir la solicitud al proxy
  proxy.web(req, res, { target: destinationHost });
});

const proxyPort = process.env.PROXY_PORT || 8000;
server.listen(proxyPort, () => {
  console.log(`Servidor de proxy escuchando en el puerto ${proxyPort}`);
});
