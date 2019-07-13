import _ from 'underscore';
import Backbone from 'backbone';

import Loader from './loader.js';
import log from './log.js'

const _category = "router";

export default class Router {
    /**
     * Vue RouterでHTMLをダイナミックに読みこんで利用出来るようにしたラッパークラス
     *
     * @class VueSPA.Router
     * @constructor
     * @param options
     *
     * @example
     *      let router = new VueSPA.Router({
     *          routes : [
     *              {
     *                  name : "add",
     *                  path : "/add",
     *                  controller : FooController,
     *                  templateUrl : "tmpl/add.html"
     *              },
     *              {
     *
     *              }
     *          ]
     *      });
     *
     *      let mainController = new VueSPA.Controller({
     *              router : router
     *      }).main();
     */
    constructor(options) {
        _.extend(this, Backbone.Events);
        this._init = false;
        this._options = options;
        this._preload = options.preload || false;
        this._lock = false;

        if(!_.isUndefined(options.base)){
            this._base = options.base;
        }

    }
    init($parentController){
        if(this._init){
            return;
        }
        let options = this._options;
        this.$$routes = [];
        let that = this;
        this.$loader = new Loader();

        if(options.routes){
            log.debug(_category)("routes......",this);
            for(let idx in options.routes){
                let r = options.routes[idx];

                let item = {
                    path : r.path,
                    name : r.name
                };

                if(r.controller){
                    let controller = new r.controller();
                    controller.$parent = $parentController;
                    controller.$root = $parentController;

                    if(controller.routes){
                        let childRoutes = controller.routes();
                        log.debug(_category)("child routes ",childRoutes);
                        childRoutes.forEach(child => {
                            log.debug(_category)("child route item ",child);

                        });
                    }
                    controller.$routeName = r.name;

                    controller.$_createChildren(that,item);

                    log.debug(_category)("route item is ",item);

                    log.debug(_category)("==== $component invoked start ======",controller);
                    item.component = controller.$component();
                    log.debug(_category)("==== $component invoked end ======",controller);
                }

                if(!_.isUndefined(r.templateUrl)){
                    if(this._preload|| r.preload){
                        this.$loader.add(r.name,r.templateUrl);
                    }
                    item.beforeEnter = function(to,from,next){
                        that.beforeEnter(item.component,r.name,r.templateUrl,to,from,next);
                    };
                }
                this.$$routes.push(item);
            }
        }
        this._init = true;
    }

    /**
     * HTMLのローダーインスタンスを取得する
     *
     * @method getLoader
     * @returns {Loader}
     */
    getLoader(){
        return this.$loader;
    }

    getVueRouter($parentController){
        log.debug(_category)("getVueRouter()",this);

        const that = this;
        this.init($parentController);

        log.debug(_category)("routes is ",this.$$routes);

        let opts = {
            routes : this.$$routes
        };

        if(this._base){
            opts.base = this._base;
        }

        log.debug(_category)("getVueRouter()",opts);

        this.$$router = new VueRouter(opts);
        return this.$$router;
    }

    start(){
        log.debug(_category)("start ",this);

        let that = this;
        let p = this.$loader.preload();
        this.$$router.beforeEach((to, from, next) => {
            log.debug(_category)("router locked ? ",that._lock);
            if(that._lock && that.$_lock_promise){
                log.debug(_category)("router locked !! ",that._lock);
                that.$_lock_promise.then(function(){
                    log.debug(_category)("router lock release !! ",that._lock,to,next);
                    next();
                });
            }
            else{
                next();
            }
        });
    }

    /**
     *  ルートしないようにロックする
     *
     *  @method lock
     *  @protected
     */
    lock(){
        if(this._lock){
            return;
        }
        this._lock = true;

        let that = this;

        let ctrl = {
        };

        this.$_lock_promise = new Promise(function(resolve){
            ctrl.release = function(){
                resolve();
                that._lock = false;
            }
        });

        return ctrl;
    }

    beforeEnter(component,name,url,to,from,next){
        log.debug(_category)("before enter ",component,to,from);
        let that = this;

        if(component.template){
            next();
            return;
        }

        if(this.$loader.has(name)){
            component.template = this.$loader.get(name);
            next();
            return;
        }
        else{
            that.trigger('loader:start',that.$loader);
            log.debug(_category)("START : load template(" + name + ") from ",url);
            let p = this.$loader.load(name,url);
            p.then(function(html){
                component.template = html;
                that.trigger('loader:end',that.$loader);
                log.debug(_category)("END: load template(" + name + ") from ",url,html);
                next();
            });
        }
    }
};