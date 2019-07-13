import _ from 'underscore';
import Backbone from 'backbone';
import url from 'url-template';

import Service from './service.js'
import log from './log.js'

let _default = {
    mode : 'same-origin',
    credentials : 'same-origin',
    headers: {}
};

const _category = "service:ajax";

/**
 *  @module VueSPA
 *  @class VueSPA.Ajax
 *  @extends VueSPA.Service
 */
export default class Ajax extends Service{

    static defaultOptions(opts){
        _default = Object.assign(_default,opts);
    }

    /**
     * @class VueSPA.Ajax
     * @constructor
     * @extends VueSPA.Service
     * @param options
     */
    constructor(options){
        super();

        if(!_.isUndefined(options.prefix)){
            this.prefix = options.prefix;
        }
        else{
            this.prefix = "";
        }

        if(_.isUndefined(options.context)){
            this.$context = Service.defaultContext();
        }
        else{
            this.$context = options.context;
        }


        this._init = false;
        this.template = {};
        this.mode = options.mode || _default.mode;
        this.credentials = options.credentials || _default.credentials;
        this.headers = options.headers || _default.headers;
    }

    $_init(){
        let urls = this.urls();
        for(let name in urls){
            let template = urls[name];
            this.template[name] = url.parse(template);
        }
        this.init();
        this._init = true;
    }

    /**
     * 何らかの初期化処理が必要な場合に上書き定義する
     *
     * @method init
     *
     */
    init(){

    }

    /**
     * アクセスするエンドポイントのマップを定義する
     *
     * @method urls
     * @returns {{}}
     *
     * @example
     *      urls(){
     *          return {
     *              add : "/path/to/add",
     *              update : "/path/to/update/{sid}",
     *              list : "/path/to/list/{page}/{limit}"
     *          }
     *      }
     *
     *      /path/to/update/5 にデータをポストする場合
     *
     *      this.doPost("update",{
     *          title : "名称"
     *      },{
     *          sid : 5
     *      };
     *
     */
    urls(){
        return {};
    }

    filters() {
        return []
    }

    /**
     * ファイルのアップロード処理
     *
     * @method doUpload
     *
     * @param {string} name エンドポイント名. urls()で定義した名前
     * @param {object} file HTML Fileオブジェクト
     * @param {object} params Pathパラメータ
     * @param {object} headers 追加ヘッダ
     * @returns {Promise<any>}
     */
    doUpload(name,file,params,headers){
        if(!this._init){
            this.$_init();
        }

        if (!params) {
            params = {};
        }
        if (!headers) {
            headers = {};
        }

        if(_.isUndefined(this.template[name])){
            log.warn(_category)("no url map : [" + name + "]");
            throw new Error("No url map [" + name + "]");
        }

        let url = this.prefix + this.template[name].expand(params);

        let _headers = Object.assign({}, this.headers, headers);

        let fd = new FormData();
        fd.append('file', file);

        let opts = {
            method: 'POST',
            mode: this.mode,
            cache: "no-cache",
            credentials: this.credentials,
            headers: _headers,
            timeout: 500,
            body: fd,
        };

        return this._request(url, opts);

    }

    /**
     * JSONデータのPOST処理
     *
     * @method doPost
     *
     * @param {string} name エンドポイント名. urls()で定義した名前
     * @param {object} postData POSTデータ
     * @param {object} params Pathパラメータ
     * @param {object} headers 追加ヘッダ
     * @returns {Promise<any>}
     */
    doPost(name,postData,params,headers) {

        if(!this._init){
            this.$_init();
        }

        if (!postData) {
            postData = {};
        }
        if (!params) {
            params = {};
        }
        if (!headers) {
            headers = {};
        }
        let postJson = JSON.stringify(postData);

        if(_.isUndefined(this.template[name])){
            log.warn(_category)("no url map : [" + name + "]");
            throw new Error("No url map [" + name + "]");
        }

        let url = this.prefix + this.template[name].expand(params);

        let _headers = Object.assign({}, this.headers, headers, {
            "Content-Type": "application/json"
        });

        let opts = {
            method: 'POST',
            mode: this.mode,
            cache: "no-cache",
            credentials: this.credentials,
            headers: _headers,
            timeout: 500,
            body: postJson,
        };

        return this._request(url, opts);
    }

    /**
     * GETリクエストを行う
     *
     * @metod doGet
     * @param {string} name エンドポイント名. urls()で定義した名前
     * @param {object} params Pathパラメータ
     * @param {object} headers 追加ヘッダ
     * @returns {Promise<any>}
     */
    doGet(name,params,headers) {

        if(!this._init){
            this.$_init();
        }
        if (!params) {
            params = {};
        }
        if (!headers) {
            headers = {};
        }

        if(_.isUndefined(this.template[name])){
            log.warn(_category)("no url map : [" + name + "]");
            throw new Error("No url map [" + name + "]");
        }

        let url = this.prefix + this.template[name].expand(params);

        let _headers = Object.assign({}, this.headers, headers);

        let opts = {
            method: 'GET',
            mode: this.mode,
            cache: "no-cache",
            credentials: this.credentials,
            headers: _headers,
            timeout: 500
        };
        return this._request(url, opts);
    }

    /**
     * DELETEメソッドを送信する
     *
     * @method doDelete
     * @param {string} name エンドポイント名. urls()で定義した名前
     * @param {object} params Pathパラメータ
     * @param {object} headers 追加ヘッダ
     * @returns {Promise<any>}
     */
    doDelete(name,params,headers){

        if(!this._init){
            this.$_init();
        }
        if (!params) {
            params = {};
        }
        if (!headers) {
            headers = {};
        }

        if(_.isUndefined(this.template[name])){
            log.warn(_category)("no url map : [" + name + "]");
            throw new Error("No url map [" + name + "]");
        }

        let url = this.prefix + this.template[name].expand(params);

        let _headers = Object.assign({}, this.headers, headers);

        let opts = {
            method: 'DELETE',
            mode: this.mode,
            cache: "no-cache",
            credentials: this.credentials,
            headers: _headers,
            timeout: 500
        };
        return this._request(url, opts);
    }

    /**
     * リクエスト実装処理
     *
     * @method _request
     * @param url
     * @param opts
     * @returns {Promise<any>}
     * @private
     */
    _request(url,opts){
        if(this.$context){
            this.$context.trigger('ajax:loading',url,opts);
        }
        let that = this;

        let promise = new Promise((resolve,reject) =>
        {
            log.debug(_category)("request [" + opts.method + "]", url);
            fetch(url, opts).then(res => {

                log.debug(_category)("response ",res);
                if(res.ok) {

                    let json = res.json();
                    log.debug(_category)("resolve ",res,json);

                    if (that.$context) {
                        that.$context.trigger('ajax:success',res,json,that);
                    }

                    let filters = that.filters();
                    let ret = true;
                    for(let i = 0; i < filters.length; i++){
                        let _ret = filters[i](json);
                        log.debug(_category)("request filter ",json,_ret);
                        if(_ret){
                            json = _ret;
                        }
                        else{
                            ret = false;
                        }
                    }
                    if(ret) {
                        resolve(json);
                    }
                    else{
                        reject(json);
                    }
                }
                else{
                    log.debug(_category)("reject ",res);
                    reject(res);
                    that.$context.trigger('ajax:error',res,that);
                }
                that.$context.trigger('ajax:finished',url,opts);

            }).catch(function (error)
                {
                    log.debug(_category)("reject ",error);
                    reject(error);
                    that.$context.trigger('ajax:finished');
                }
            );
        });

        return promise;
    }

}