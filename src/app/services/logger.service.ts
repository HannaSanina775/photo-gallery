import { Injectable } from '@angular/core';
import { ILogger } from './interfaces/ilogger';

export enum LogLevel {
  None = 0,
  Info = 1,
  Verbose = 2,
  Warn = 3,
  Error = 4
}

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements ILogger {
  constructor() { }

  info(msg: string): void {
    this.logWith(LogLevel.Info, msg);
  }

  warn(msg: string): void {
    this.logWith(LogLevel.Warn, msg);
  }

  error(msg: string): void {
    this.logWith(LogLevel.Error, msg);
  }

  private logWith(level: any, msg: string): void {
    if (level <= LogLevel.Error) {
      switch (level) {
        case LogLevel.None:
          return console.log(msg);
        case LogLevel.Info:
          // tslint:disable-next-line:no-console
          return console.info('%c' + msg, 'color: #6495ED');
        case LogLevel.Warn:
          return console.warn('%c' + msg, 'color: #FF8C00');
        case LogLevel.Error:
          return console.error('%c' + msg, 'color: #DC143C');
        default:
          // tslint:disable-next-line:no-console
          console.debug(msg);
      }
    }
  }
}
