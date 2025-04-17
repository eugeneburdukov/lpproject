/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type cspagePage = typeof import('./pages/cspage');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, cspagePage: cspagePage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
