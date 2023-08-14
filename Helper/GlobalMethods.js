const path = require('path');

class ErrorBuilder {
  constructor (status = 500, mgs = '', data = {}) {
    this.message = mgs;
    this.status = status;
    this.data = data;
  }
}

global.ErrorBuilder = ErrorBuilder;
