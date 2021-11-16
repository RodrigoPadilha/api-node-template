import createWebserver from './WebServer';

// eslint-disable-next-line no-unused-vars
function createCore(configuration = {}) {
  // TODO createDatabaseConnection
  const webserver = createWebserver();

  function start() {
    console.log('> [core] Starting...');
    // database.start();
    webserver.start();
    console.log('> [core] Starting done! System running!');
  }

  function stop() {
    console.log('> [core] Stopping');
    webserver.stop();
    // database.stop();
    console.log('> [core] Stopping done!');
  }

  return {
    start,
    stop,
  };
}

export default createCore;
