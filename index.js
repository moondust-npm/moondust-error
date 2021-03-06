/**
 * Created by Tristan on 2017/3/28.
 */
function ParamError(code, message) {
    this.name = 'ParamError';
    this.code = code || 500;
    this.status = 500;
    this.message = message || 'unknow error';
    this.stack = (new Error()).stack;
}
ParamError.prototype = Object.create(Error.prototype);
ParamError.prototype.constructor = ParamError;


function BusinessError(code, message) {
    this.name = 'BusinessError';
    this.code = code || 500;
    this.status = 500;
    this.message = message || 'unknow error';
    this.stack = (new Error()).stack;
}

BusinessError.prototype = Object.create(Error.prototype);
BusinessError.prototype.constructor = BusinessError;


function UnckeckError(code, message) {
    this.name = 'UnckeckError';
    this.code = code || 500;
    this.status = 500;
    this.message = message || 'unknow error';
    this.stack = (new Error()).stack;
}

UnckeckError.prototype = Object.create(Error.prototype);
UnckeckError.prototype.constructor = UnckeckError;


function NotFound(code, message) {
    this.name = 'NotFound';
    this.code = code || 500;
    this.status = 404;
    this.message = message || 'resource not found';
    this.stack = (new Error()).stack;
}

NotFound.prototype = Object.create(Error.prototype);
NotFound.prototype.constructor = NotFound;


function Unauthorized(code, message) {
    this.name = 'Unauthorized';
    this.code = code || 500;
    this.status = 401;
    this.message = message || 'Unauthorized error';
    this.stack = (new Error()).stack;
}

Unauthorized.prototype = Object.create(Error.prototype);
Unauthorized.prototype.constructor = Unauthorized;
module.exports = {
    ParamError: ParamError,
    BusinessError: BusinessError,
    UnckeckError: UnckeckError,
    NotFound: NotFound,
    Unauthorized: Unauthorized
}