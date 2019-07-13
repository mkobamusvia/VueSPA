
let _log = {
    debug : function(){
        return function(){}
    },
    warn : function(){
        return console.log;
    }
};

export default class Log {

    static setup(writers){
        _log = Object.assign(_log,writers);
    }

    static debug(name) {
        return _log.debug(name);
    }
    static warn(name) {
        return _log.warn(name);
    }
}