import { registerPlugin } from '@capacitor/core';

import type { AppboxoPlugin } from './definitions';

const Appboxo = registerPlugin<AppboxoPlugin>('Appboxo', {
  web: () => import('./web').then(m => new m.AppboxoWeb()),
});

export * from './definitions';
export { Appboxo };
