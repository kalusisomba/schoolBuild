function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"24YL":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("4WRT"),a=n("fXoL"),c=n("URcr"),i=function(){var e=function(){function e(t){_classCallCheck(this,e),this.routeStateService=t,this.items=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.routeStateService.getAll().forEach((function(t){e.items.push({label:t.title,command:function(){e.onClickBreadcrumb(t.id)}})})),this.home={icon:"pi pi-home"}}},{key:"onClickBreadcrumb",value:function(e){this.routeStateService.loadById(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Pb(r.a))},e.\u0275cmp=a.Jb({type:e,selectors:[["app-header-breadcrumb"]],decls:1,vars:2,consts:[["styleClass","header-breadcrumb",3,"model","home"]],template:function(e,t){1&e&&a.Qb(0,"p-breadcrumb",0),2&e&&a.nc("model",t.items)("home",t.home)},directives:[c.a],styles:[""]}),e}()},"8PDj":function(e,t,n){"use strict";n.r(t);var r,a,c=n("ofXK"),i=n("tyNb"),o=n("E0xg"),s=n("4WRT"),u=n("fXoL"),l=n("24YL"),b=n("7CaW"),p=n("7zfz"),f=n("jIHw"),d=[{path:"",component:(r=function(){function e(t,n){_classCallCheck(this,e),this.departmentService=t,this.routeStateService=n}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this.routeStateService.getCurrent();this.department=this.departmentService.getDepartmentById(e.data)}},{key:"back",value:function(){this.routeStateService.loadPrevious()}}]),e}(),r.\u0275fac=function(e){return new(e||r)(u.Pb(o.a),u.Pb(s.a))},r.\u0275cmp=u.Jb({type:r,selectors:[["app-department-detail"]],decls:12,vars:2,consts:[["header","Department Details"],["pButton","","type","button","label","Back",1,"ui-button-secondary","prime-button",3,"click"]],template:function(e,t){1&e&&(u.Qb(0,"app-header-breadcrumb"),u.Vb(1,"p-panel",0),u.Vb(2,"p"),u.Vb(3,"b"),u.Ic(4,"Department Name :"),u.Ub(),u.Ic(5),u.Ub(),u.Vb(6,"p"),u.Vb(7,"b"),u.Ic(8,"Department Description :"),u.Ub(),u.Ic(9),u.Ub(),u.Vb(10,"p-footer"),u.Vb(11,"button",1),u.dc("click",(function(){return t.back()})),u.Ub(),u.Ub(),u.Ub()),2&e&&(u.Db(5),u.Kc(" ",t.department.Name," "),u.Db(4),u.Kc(" ",t.department.Description," "))},directives:[l.a,b.a,p.b,f.b],styles:[""]}),r)}],m=((a=function e(){_classCallCheck(this,e)}).\u0275mod=u.Nb({type:a}),a.\u0275inj=u.Mb({factory:function(e){return new(e||a)},imports:[[i.g.forChild(d)],i.g]}),a),h=n("EQGD"),v=n("K0h9");n.d(t,"DepartmentDetailModule",(function(){return C}));var y,C=((y=function e(){_classCallCheck(this,e)}).\u0275mod=u.Nb({type:y}),y.\u0275inj=u.Mb({factory:function(e){return new(e||y)},imports:[[c.b,m,h.a,v.a]]}),y)},K0h9:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("EQGD"),a=n("fXoL"),c=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=a.Nb({type:e}),e.\u0275inj=a.Mb({factory:function(t){return new(t||e)},imports:[[r.a]]}),e}()}}]);