import _ from 'underscore';
import Backbone from 'backbone';
import log from './log.js'
import createjs from 'preload-js';

const _category = "loader";

export default class Loader {
    constructor(){
        _.extend(this,Backbone.Events);
        this.caches = {};
        this.promiseMap = {};

        this.$loadingResolve = null;

        this.queue = new createjs.LoadQueue();
        this.preloads = [];

        let that = this;
        this.$isCompleted = false;

        this.queue.on('complete',function(event){
            log.debug(_category)("load complete ",event);
            that.$isCompleted = true;
            if(that.$_preloadResolve){
                that.$_preloadResolve(event);
                that.$_preloadResolve = null;
            }
            that.preloads = [];

            that.trigger('loader:complete',event);
        });
        this.queue.on('fileload',function(event){
           const id = event.item.id;

           that.caches[id] = event.result;

           if(that.promiseMap[id]){
               let resolve = that.promiseMap[id];
               resolve(event.result);
               that.promiseMap[id] = null;

               if(that.$loadingResolve){
                   that.$loadingResolve(event.result);
                   that.$loadingResolve = null;
               }
           }
        });
    }
    has(name) {
        if(this.caches[name]){
            return true;
        }
        else{
            return false;
        }
    }
    get(name){
        if(this.caches[name]){
            return this.caches[name];
        }
        else{
            return "";
        }
    }
    load(name,url){
        let that = this;
        if(this.promiseMap[name]){
            //  ローディング中

            let promise = new Promise(function(resolve){
                that.$loadingResolve = resolve;
            });
            return promise;
        }

        let promise = new Promise(function(resolve){
            that.promiseMap[name] = resolve;
        });
        this.queue.loadFile({
            id : name,
            src : url
        });
        return promise;
    }
    add(name,url){
        this.preloads.push({
            id : name,
            src : url
        });
    }
    size(){
        return this.preloads.length;
    }
    preload(){
        let that = this;
        let promise = new Promise(function(resolve){
            that.$_preloadResolve = resolve;
        });
        this.queue.loadManifest(this.preloads,true);
        return promise;
    }
}