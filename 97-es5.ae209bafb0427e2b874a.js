function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{"e/zx":function(e,n,t){"use strict";t.r(n);var r,o,i=t("ofXK"),u=t("tyNb"),l=t("fXoL"),a=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=l.Jb({type:r,selectors:[["app-student"]],decls:1,vars:0,template:function(e,n){1&e&&l.Qb(0,"router-outlet")},directives:[u.h],styles:[""]}),r),c=[{path:"",redirectTo:"student-list"},{path:"student-list",component:a,loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(79)]).then(t.bind(null,"im4Y")).then((function(e){return e.StudentListModule}))}},{path:"student-edit/:_id",component:a,loadChildren:function(){return Promise.all([t.e(0),t.e(64)]).then(t.bind(null,"CYJX")).then((function(e){return e.StudentEditModule}))}},{path:"student-create",component:a,loadChildren:function(){return Promise.all([t.e(0),t.e(78)]).then(t.bind(null,"5s06")).then((function(e){return e.StudentCreateModule}))}},{path:"student-details/:_id",component:a,loadChildren:function(){return Promise.all([t.e(0),t.e(63)]).then(t.bind(null,"sVR8")).then((function(e){return e.StudentDetailsModule}))}}],s=((o=function e(){_classCallCheck(this,e)}).\u0275mod=l.Nb({type:o}),o.\u0275inj=l.Mb({factory:function(e){return new(e||o)},imports:[[u.g.forChild(c)],u.g]}),o),d=t("EQGD");t.d(n,"StudentModule",(function(){return p}));var f,p=((f=function e(){_classCallCheck(this,e)}).\u0275mod=l.Nb({type:f}),f.\u0275inj=l.Mb({factory:function(e){return new(e||f)},imports:[[i.b,s,d.a]]}),f)}}]);