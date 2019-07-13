import Controller from './controller.js'

/**
 *  @module VueSPA
 *  @class VueSPA.Main
 *  @extends VueSPA.Controller
 */
export default class Main extends Controller{

    /**
     *  メインコントローラでの実行処理
     *
     *  @method start
     *  @example
     *      let main = new VueSPA.Main({
     *
     *      }).start();
     *
     */
    start(){

        this.listenTo(this,'vue:created',this.onCreate);
        this.listenTo(this,'vue:mounted',this.onStart);

        this.$component(this._vue);
        this.$vue = new Vue(this._vue);
        return this;
    }

    /**
     *  Vueが作成されたときのイベント処理
     */
    onCreate(vue){

    }

    /**
     * DOM要素にアクセスできる状態になった時のイベント
     *
     * ( vue.mounted )
     *
     * @method onStart
     * @param vue
     */
    onStart(vue){

    }

    /**
     * Mainの場合には、onEnterは実行されません。代わりに、onStartedを利用してください。
     *
     * @method onEnter
     * @param vue
     */
    onEnter(vue){

    }
}