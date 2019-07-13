// import VueSPA from './core/vuespa.js'

import _ from 'underscore';

import Loader from './core/loader.js'
import Router from './core/router.js'
import Controller from './core/controller.js'
import Main from './core/main.js'
import Ajax from './core/ajax.js'
import Service from './core/service.js'
import Log from './core/log.js'
import Utils from './core/utils.js'

/**
 *
 * @module VueSPA
 *
 * @type {{Log: Log, Utils: Utils, Loader: Loader, Router: Router, Service: Service, Controller: Controller, Component: Component, Directive: Directive, Ajax: Ajax}}
 *
 */
window.VueSPA = {
    Loader : Loader,
    Router : Router,
    Main : Main,
    Controller : Controller,
    Service : Service,
    Ajax: Ajax,
    Log : Log,
    Utils : Utils
};
