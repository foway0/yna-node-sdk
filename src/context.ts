const debug = process.env.DEBUG ? require('debug')('yna:context') : () => {};

export abstract class Context {
  protected constructor() {
    debug('init context');
  }

  get apiSpecPath(): string {
    throw new Error('Override apiSpecPath');
  }

  get operationHandlerPath(): string {
    throw new Error('Override operationHandlerPath');
  }
}
