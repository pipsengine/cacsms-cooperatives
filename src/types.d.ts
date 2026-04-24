// Fix for ESModuleInterop with express
declare module 'express' {
  import exp = require('express');
  export = exp;
}
