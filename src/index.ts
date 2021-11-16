import createCore from '@config/Core';

try {
  const core = createCore();
  core.start();
  core.stop();
} catch (error) {
  console.log('[index] Uncaugth error!');
  console.log(error);
}
