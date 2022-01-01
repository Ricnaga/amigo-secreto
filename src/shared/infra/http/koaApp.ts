import Koa from 'koa';

export const koaApp = new Koa();
export const koaServerRequest = koaApp.callback();
