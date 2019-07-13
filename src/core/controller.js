import _ from 'underscore';
import Backbone from 'backbone';
import log from './log.js'

import Router from './router.js'
import Service from './service.js'

const _category = "controller";

/**
 *   @module VueSPA
 *   @class VueSPA.Controller
 *
 *   @property $vue
 *   @type {object} Vueオブジェクト
 */
export default class Controller {

    /**
     *
     * @class VueSPA.Controller
     * @constructor
     *
     * @param {object} vue Vue定義
     *
     * @example
     *
     *      export default class FooController extends VueSPA.Controller {
     *          data(){
     *              return {
     *                  foo : 1
     *              }
     *          }
     *          methods(){
     *              return {
     *                  method1 : function(){
     *                      // this オブジェクトはこのControllerオブジェクト
     *                  }
     *              }
     *          },
     *          onEnter(){
     *              //  画面遷移された時の処理
     *          },
     *          onExit(){
     *              //  画面から抜けた時の処理
     *          }
     *      }
     */
    constructor(vue){
        _.extend(this,Backbone.Events);

        if(!_.isUndefined(vue)){

            if(!_.isUndefined(vue.services)){
                let context = Service.defaultContext();
                log.debug(_category)("services context ",context);
                for(let name in vue.services){
                    let s = vue.services[name];
                    log.debug(_category)("set service [" + name + "]",s,this);
                    s.$context = context;
                    if(!s._init) {
                        s.$_init();
                    }
                    if(!_.isUndefined(s.constructor.name)){
                        if(typeof s.constructor.name == 'function'){
                            const _name = s.constructor.name();
                            log.debug(_category)("found static name() function [" + _name + "]");
                            context.set(_name, s);
                        }
                        else if(typeof s.constructor.name == 'string') {
                            const _name = s.constructor.name;
                            log.debug(_category)("found static name property [" + _name + "]");
                            context.set(_name, s);
                        }
                    }
                    else {
                        log.warn(_category)("not found static name() function");
                        context.set(name,s);
                        this[name] = s;
                    }
                    this.$services = context;
                }
            }
        }
        else{
            vue = {};
        }

        this._vue = vue;
        this._init = false;

        this._navigate = false;

        //  子のコントローラ
        this.$children = [];
    }


    $_init(){

        if(this._navigate){
            this.$vue.$router.push(this._navigate);
            this._navigate = false;
        }

        if(!this._init){
            this.onInit(this.$vue);
            this._init = true;
        }
    }
    $_destroy(){
        this._init = false;
        this.$isEnter = false;
        this.stopListening();
    }

    $_onRouteBefore(to,from,next){
        this.$isEnter = false;
        if(!_.isUndefined(this.onAuth)){
            if(typeof this.onAuth == 'function'){
                return this.onAuth(to,from);
            }
        }
    }

    //  Vue Componentが作成されて、かつ、RouterでのEnterイベントの後
    $_onRouteEnter(vue,to,from,next){
        this.$isEnter = true;
        log.debug(_category)("on route enter ",this,to,from);

        if(this.$parent){
            log.debug(_category)("on route enter : child enter",this.$parent);
            this.$parent.$_onChildEnter(to,from,this);
        }
        else{
            log.debug(_category)("on route enter : parent is NULL");
        }
        let ret = this.onEnter(vue,to.params,to,from);

        if(this.$root){
            if(this.$routeName == to.name) {
                this.$root.trigger('route:enter', to, from, this);
            }
        }

        if(_.isUndefined(ret) || ret === true) {
            vue.$forceUpdate();
        }
    }

    $_onRouteLeave(vue,to,from,next){
        if(this.$isEnter) {
            log.debug(_category)("on exit",this);

            let ret = this.onExit(vue,to,from);
            if (_.isUndefined(ret)) {
                next();
            }
            if (typeof ret == 'boolean' && ret == false) {
                next(false);
            } else {
                next();
            }
            if(this.$parent){
                this.$parent.$_onChildExit(to,from,this);
            }

            this.$isEnter = false;
        }
        else{
            log.debug(_category)("not enter controller, and exit ",this);
        }
    }

    $_onChildEnter(to,from,child){
        this.onChildEnter(to,from,child);
    }

    $_onChildExit(to,from,child){
        this.onChildExit(to,from,child);
    }

    $_createChildren(router,routeItem){
        let that = this;
        if(this.routes){
            let childRoutes = this.routes();

            routeItem.children = [];

            log.debug(_category)("child routes ",childRoutes);
            childRoutes.forEach(child => {
                log.debug(_category)("child route item ",child,routeItem);
                let item = {};
                item.path = child.path;
                item.name = routeItem.name + "." + child.name;

                if(child.controller){
                    let controller = new child.controller();
                    controller.$routeName = item.name;
                    controller.$parent = that;
                    controller.$root = that.$root;
                    that.$children.push(controller);

                    let $component = controller.$component();
                    $component.$controller = controller;
                    item.component = $component;

                    if(!_.isUndefined(child.templateUrl)){

                        item.component.template = "";
                        if(router._preload|| child.preload){
                            this.$loader.add(item.name,child.templateUrl);
                        }
                        item.beforeEnter = function(to,from,next){
                            router.beforeEnter(item.component,item.name,child.templateUrl,to,from,next);
                        };
                    }

                    controller.$_createChildren(router,item);

                    log.debug(_category)("component is ",$component);
                }

                routeItem.children.push(item);
            })
        }
    }


    /**
     * コントローラインスタンスが作成された時の初期化メソッド
     *
     * @method init
     */
    init() {

    }

    /**
     *
     * Vueでのdata定義
     *
     * @method data
     * @example
     *
     *      data(){
     *          return {
     *              sid : 0,
     *              list: []
     *          }
     *      }
     *      // アクセスする際のコード例
     *      this.$vue.sid = 3;
     *
     * @returns {{}}
     */
    data(){
        return {};
    }
    methods(){
        return {};
    }
    components(){
        return {};
    }

    //  サービス
    services(){
        return {}
    }

    watch(){

    }

    service(name){
        if(!_.isUndefined(name.constructor)){
            if(!_.isUndefined(name.name)){
                if(typeof name.name == 'function'){
                    name = name.name();
                }
                else if(typeof name.name == 'string'){
                    name = name.name;
                }
                log.debug(_category)("service name - " + name);
            }
            else{
                log.debug(_category)("service name - ",name);
            }
        }
        else{
            log.debug(_category)("service " + typeof name);
        }
        let services = VueSPA.Service.defaultContext();
        if(!services){
            return;
        }
        if(!services.has(name)){
            return false;
        }
        let s = services.get(name);
        if(!s._init){
            s.init();
        }
        return s;
    }

    /**
     * 指定した関数をthisにbindする
     *
     * _.bind(method,this)
     *
     * @method bindMethod
     * @param {function} method
     * @returns {function} bindされた関数
     */
    bindMethod(method){
        let func = _.bind(method,this);
        func.$bindController = true;
        return func;
    }

    /**
     * Vue.$props.$refs から値を取得する
     *
     * @example
     *
     *      <my-component ref="mycomp"></my-component>
     *      let myComp = this.refs("mycomp");
     *
     * @method refs
     * @param {string} name refで指定されたVue Componentを取得する
     * @returns {null|any}
     */
    refs(name){
        if(!_.isUndefined(this.$vue.$refs[name])){
            return this.$vue.$refs[name];
        }
        else{
            return null;
        }
    }

    /**
     * vue.beforeCreate が実行されたタイミングでのメソッド
     *
     * @method onInit
     * @param {object} vue Vueインスタンス
     */
    onInit(vue){

    }

    /**
     * 画面遷移でされた時に実行されるメソッド
     *
     * vue.beforeRouteEnter, vue.beforeRouteUpdate 時に実行されるメソッド
     *
     * @method onEnter
     *
     * @param {object} vue Vueインスタンス
     * @param {object} params Route時のPathパラメータ
     * @param {object} to Vue Routerのtoルート
     * @param {object} from Vue Router のfromルート
     * @returns {boolean}
     */
    onEnter(vue,params,to,from){
        return true;
    }

    /**
     * コントローラを抜けた（画面遷移）時に実行されるメソッド
     *
     * vue.beforeRouteLeave 時に実行されるメソッド
     *
     * @method onExit
     * @param vue
     * @param to
     * @param from
     */
    onExit(vue,to,from){

    }

    /**
     * 子ルートが遷移した時のよばれるメソッド
     *
     * @method onChildEnter
     * @param {object} to
     * @param {object} from
     * @param {object} child 子VueSPA.Controllerのインスタンス
     */
    onChildEnter(to,from,child){

    }

    /**
     *  子ルートから出たとき
     *
     *
     * @method onChildExit
     * @param to
     * @param from
     * @param child
     */
    onChildExit(to,from,child){

    }

    /**
     * vue-router.push のエイリアスメソッド
     *
     * @method navigate
     * @example
     *      this.navigate(-1); // history.back相当
     *      this.navigate(1);  // history.forward相当
     *      this.navigate("^"); // 親ルートに遷移する
     *      this.navigate(".child"); // 自分から見た子(child)ルートに遷移する
     *      this.navigate("path"); // 完全なルート名を指定し遷移する
     *      this.navigate("^.child2"); // 自分から見た親から見た子（child2)、つまり兄弟ルートに遷移する
     *
     *      //  パラメータを指定する場合
     *      this.navigate("^.list",{
     *          page: 2,
     *          limit : 10
     *      });
     *
     * @param {string|number} name パス名もしくは、数字（戻る、進む数）を指定する
     * @param {object} params Pathパラメータの指定が必要な場合に指定する
     */
    navigate(name,params){

        if(typeof name == "number"){
            this.$router.go(name);
            return;
        }

        let ch = name.charAt(0);
        if(name == "."){
            name = this.$routeName;
        }
        else if(ch == "^"){
            if(this.$parent && this.$parent.$routeName) {
                name = this.$parent.$routeName + name.substr(1);
            }
            else{
                let ch2 = name.charAt(1);
                if(ch2 == "."){
                    name = name.substr(2);
                }
                else{
                    name = name.substr(1);
                }
            }
        }
        else if(ch == "."){
            name = this.$routeName + name;
        }

        if(this.$router){
            log.debug(_category)("navigate ",name,params);
            this.$router.push({
                name : name,
                params: params
            });
        }
        else{

            this._navigate = {
                name : name,
                params: params
            };
            log.debug(_category)("navigate stack ",this._navigate);
        }
    }

    digest(){
        this.$vue.$forceUpdate();
    }

    $component(vue) {
        if(!vue){
            vue = {};
        }
        let that = this;

        if(!_.isUndefined(vue.router)){
            if(vue.router instanceof Router){
                this.$router = vue.router;
                this.$controller = this;
                let router = vue.router.getVueRouter(this);
                vue.router = router;
            }
        }

        this.init();

        if(that.$router){
            that.$router.start();
        }

        let context = Service.defaultContext();
        let services = this.services();

        vue.beforeCreate = function(){
            that.$vue = this;

            for(let name in services){
                log.debug(_category)("set service ",name,services[name]);
                if(!services[name]._init) {
                    services[name].$_init();
                }
                if(!_.isUndefined(services[name].constructor.name)){
                    if(typeof services[name].constructor.name == 'function'){
                        const _name = services[name].constructor.name();
                        log.debug(_category)("found static name() function " + _name);
                        context.set(_name, services[name]);
                    }
                    else if(typeof services[name].constructor.name == 'string'){
                        const _name = services[name].constructor.name;
                        log.debug(_category)("found static name property " + _name);
                        context.set(_name, services[name]);
                    }
                }
                else {
                    log.warn(_category)("not found static name() function");
                    const name = services[name]
                    context.set(name, services[name]);
                }
                that[name] = services[name];
            }

            that.$router = this.$router;
            this.$controller = that;

            that.$_init(this);
            that.trigger('vue','beforeCreate',this);
            that.trigger('vue:beforeCreate',this);
        };
        vue.created = function(){
            log.debug(_category)("vue created ",that);
            that.$isCreated = true;
            that.trigger('vue','created',this);
            that.trigger('vue:created',this);
        };
        vue.beforeMount = function(){
            that.trigger('vue','beforeMount',this);
            that.trigger('vue:beforeMount',this);
        };
        vue.mounted = function(){
            log.debug(_category)("vue mounted ",that);
            that.trigger('vue','mounted',this);
            that.trigger('vue:mounted',this);
        };
        vue.beforeUpdate = function(){
            that.trigger('vue','beforeUpdate',this);
            that.trigger('vue:beforeUpdate',this);
        };
        vue.updated = function(){
            that.trigger('vue','updated',this);
            that.trigger('vue:updated',this);
        };
        vue.beforeDestroy = function(){
            that.trigger('vue','beforeDestroy',this);
            that.trigger('vue:beforeDestroy',this);
        };
        vue.destroyed = function(){
            that.trigger('vue','destroyed',this);
            that.trigger('vue:destroyed',this);
            that.$_destroy();

            for(let name in services){
                log.debug(_category)("service unset ",name);
                context.unset(name);
            }
        };

        // vue routerのメソッド
        vue.beforeRouteEnter = function(to, from, next) {
            log.debug(_category)("on route before ....",that);
            let ret = that.$_onRouteBefore(to, from, next);
            if(ret){
                log.debug(_category)("route cancel : next() called", ret);
                next(ret);
            }
            else {
                next(vm => {
                    if (ret) {
                        log.debug(_category)("route cancel : next() called", ret);
                    } else {
                        that.$_onRouteEnter(vm, to, from, next);
                    }
                });
            }
        };

        vue.beforeRouteUpdate = function(to,from,next){
            log.debug(_category)("on beforeRouteUpdate ....",that,to,from);

            next();
            //  自分の場合
            if(to.name == that.$routeName){
                if(to.name == from.name){
                    //  pathが変わった
                    that.$_onRouteEnter(this, to, from, next);
                }
            }
        };



        vue.beforeRouteLeave = function(to, from, next) {
            log.debug(_category)("on beforeRouteLeave ....",that);
            that.$_onRouteLeave(this,to,from,next);
        };

        vue.data = _.bind(this.data,this);
        vue.components = {};
        let components = this.components();
        for(let name in components){
            const comp = components[name];

            if (comp) {
                vue.components[name] = comp;
            } else {
                // TODO warn : component is NULL
                log.warn(_category)("component is NULL ", this);
            }
        }
        log.debug(_category)("components ",vue.components);

        let methods = this.methods();
        for(let name in methods){
            // log.debug(_category)("name is [" + name + "]",typeof methods[name],name,this);
            let func = methods[name];
            if(!func.$bindController){
                methods[name] = _.bind(func,this);
            }
        }

        let watch = this.watch();
        if(watch){
            vue.watch = watch;
        }

        vue.methods = methods;
        //vue.methods = this.methods();
        vue.$controller = this;

        return vue;
    }
    $mount(el){
        this.$vue.$mount(el);
    }
}