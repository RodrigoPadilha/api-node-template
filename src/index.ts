import createCore from '@config/Core';
import { config } from 'dotenv';

try {
  config();
  const core = createCore();
  core.start();
  core.stop();
} catch (error) {
  console.log('[index] Uncaugth error!');
  console.log(error);
}
