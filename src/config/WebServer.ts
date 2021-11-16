import app from '@config/CustomExpress';

function createWebserver() {
  function start(SERVER_PORT: number) {
    console.log('> [webserver] Starting ...');
    app.listen(SERVER_PORT, () => console.log(`Rodando Servidor na porta ${SERVER_PORT}`));

    console.log('> [webserver] Starting done!');
  }

  function stop() {
    console.log('> [webserver] Stopping...');
    console.log('> [webserver] Gracefully waiting for all clients...');
    console.log('> [webserver] Closing all ports...');
    console.log('> [webserver] Stopping done!');
  }

  return {
    start,
    stop,
  };
}

export default createWebserver;
