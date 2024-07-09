import { WebPlugin } from '@capacitor/core';

import type { AppboxoPlugin } from './definitions';

export class AppboxoWeb extends WebPlugin implements AppboxoPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
