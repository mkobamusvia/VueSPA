import _ from 'underscore';
import Backbone from 'backbone';

import log from './log.js'

class Services extends Backbone.Model{

    initialized(attrs,opts){

    }
};

let _services = new Services();

/**
 *  サービスクラスを作成する為の基底クラス
 *
 *  @class VueSPA.Service
 */
export default class Service{
    static defaultContext(){
        return _services;
    }

    /**
     * サービスの名称を取得する
     *
     * @static
     * @method name
     * @returns {string}
     */
    static name(){
        return "Service";
    }

    /**
     * @class VueSPA.Service
     * @constructor
     */
    constructor(){
        _.extend(this, Backbone.Events);
    }

    //  controllerからよばれる初期化メソッド
    $_init(){

    }

    $createModel(opts){
        return new Backbone.Model(opts);
    }
}