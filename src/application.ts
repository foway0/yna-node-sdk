const debug = process.env.DEBUG
  ? require('debug')('yna:application')
  : () => {};

import express from 'express';

export interface ApplicationOptions {
  port: number;
  host: string;
}

export class Application {
  protected _app: express.Application;
  private readonly _port: number;
  private readonly _host: string;

  constructor(options: ApplicationOptions) {
    this._app = express();
    this._host = options.host;
    this._port = options.port;
  }

  start(): void {
    this._app.listen(this._port, this._host, () => {
      debug('server is on!');
    });
  }
}
