const server = require('./server/server');

const PORT = process.env.PORT || 9091;

// error handling
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${PORT}` : `Port ${PORT}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

server.listen(PORT, error => {
  if (error) {
    onError(error);
  } else {
    console.log(`SERVER - Listening on port ${PORT}`);
  }
});
