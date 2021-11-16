import loadEnvironment from '@config/Environment';
import createWebserver from '@config/WebServer';

// eslint-disable-next-line no-unused-vars
function createCore(configuration: any = {}) {
  const environment = loadEnvironment();
  // TODO createDatabaseConnection
  const webserver = createWebserver();

  function start() {
    console.log('> [core] Starting...');
    // database.start();
    webserver.start(environment.PORT as number);
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
