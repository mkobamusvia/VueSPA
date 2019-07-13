import Backbone from "backbone";
import _ from 'underscore';


/**
 *  @module VueSPA
 *  @class VueSPA.Utils
 */
export default class Utils {

    /**
     *  Backboneのイベントオブジェクトを作成する
     *
     *  @static
     *  @method createEventObject
     *  @return
     */
    static createEventObject() {
        let target = {};
        _.extend(target, Backbone.Events);
        return target;
    }

    /**
     * 指定したオブジェクトにBackbone.Events機能を追加したオブジェクトにする
     *
     * 通常のVue Componentの場合イベント処理を扱うのが面倒なため、Backbone.Eventsのメソッドを使えるように拡張する等。
     *
     *
     * @static
     * @method extendEvents
     * @param {object} obj
     * @returns {object}
     *
     * @example
     *
     *      let comp = {
     *          created(){
     *              VueSPA.Utils.extendEvents(this);
     *          },
     *          methods : {
     *              foo: function(){
     *                  this.trigger('foo');
     *              }
     *          }
     *      }
     *
     *      // VueSPA.Controller内で以下の様な使い方を想定
     *
     *      onEnter(){
     *          let comp = this.refs("comp");
     *          this.listenTo(comp,"foo",function(){});
     *      }
     *
     *
     */
    static extendEvents(obj){
        _.extend(obj, Backbone.Events);
        return obj;
    }
}