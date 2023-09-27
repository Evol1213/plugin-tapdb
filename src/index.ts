import { registerPlugin } from '@capacitor/core';

import type { PluginTapDBPlugin } from './definitions';

const PluginTapDB = registerPlugin<PluginTapDBPlugin>('PluginTapDB', {
  web: () => import('./web').then(m => new m.PluginTapDBWeb()),
});

export * from './definitions';
export { PluginTapDB };
