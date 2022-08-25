function _classCallCheck(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(o,t){for(var c=0;c<t.length;c++){var e=t[c];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}function _createClass(o,t,c){return t&&_defineProperties(o.prototype,t),c&&_defineProperties(o,c),o}(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"24YL":function(o,t,c){"use strict";c.d(t,"a",(function(){return b}));var e=c("4WRT"),i=c("fXoL"),n=c("URcr"),b=function(){var o=function(){function o(t){_classCallCheck(this,o),this.routeStateService=t,this.items=[]}return _createClass(o,[{key:"ngOnInit",value:function(){var o=this;this.routeStateService.getAll().forEach((function(t){o.items.push({label:t.title,command:function(){o.onClickBreadcrumb(t.id)}})})),this.home={icon:"pi pi-home"}}},{key:"onClickBreadcrumb",value:function(o){this.routeStateService.loadById(o)}}]),o}();return o.\u0275fac=function(t){return new(t||o)(i.Pb(e.a))},o.\u0275cmp=i.Jb({type:o,selectors:[["app-header-breadcrumb"]],decls:1,vars:2,consts:[["styleClass","header-breadcrumb",3,"model","home"]],template:function(o,t){1&o&&i.Qb(0,"p-breadcrumb",0),2&o&&i.nc("model",t.items)("home",t.home)},directives:[n.a],styles:[""]}),o}()},K0h9:function(o,t,c){"use strict";c.d(t,"a",(function(){return n}));var e=c("EQGD"),i=c("fXoL"),n=function(){var o=function o(){_classCallCheck(this,o)};return o.\u0275mod=i.Nb({type:o}),o.\u0275inj=i.Mb({factory:function(t){return new(t||o)},imports:[[e.a]]}),o}()},Wz7N:function(o,t,c){"use strict";c.r(t);var e,i,n=c("ofXK"),b=c("tyNb"),r=c("75Oz"),s=c("wsLY"),a=c("fXoL"),l=c("24YL"),h=[{path:"",component:(e=function(){function o(t,c,e,i,n){_classCallCheck(this,o),this.location=t,this.schoolService=c,this.streamService=e,this.actRoute=i,this.router=n,this.history=[],this.school=[]}return _createClass(o,[{key:"ngOnInit",value:function(){var o=this;this._id=this.actRoute.snapshot.paramMap.get("_id"),this.schoolService.getSchool(this._id).subscribe((function(t){o.school=t.data}))}},{key:"back",value:function(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/main/schools")}}]),o}(),e.\u0275fac=function(o){return new(o||e)(a.Pb(n.g),a.Pb(s.a),a.Pb(r.a),a.Pb(b.a),a.Pb(b.c))},e.\u0275cmp=a.Jb({type:e,selectors:[["app-school-details"]],decls:60,vars:8,consts:[[1,"card","card-default"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"col-sm-12"],[1,"row"],[1,"col-sm-8"],[1,"col-sm-6"],[1,"card-footer"],["type","button",1,"btn","btn-info",3,"click"]],template:function(o,t){1&o&&(a.Qb(0,"app-header-breadcrumb"),a.Vb(1,"div",0),a.Vb(2,"div",1),a.Vb(3,"h5",2),a.Ic(4,"School Details"),a.Ub(),a.Ub(),a.Vb(5,"div",3),a.Vb(6,"div",4),a.Vb(7,"div",5),a.Vb(8,"div",6),a.Vb(9,"div",5),a.Vb(10,"div",7),a.Vb(11,"strong"),a.Ic(12,"School Name"),a.Ub(),a.Ub(),a.Vb(13,"div",7),a.Ic(14),a.Ub(),a.Ub(),a.Vb(15,"div",5),a.Vb(16,"div",7),a.Vb(17,"strong"),a.Ic(18,"School Code"),a.Ub(),a.Ub(),a.Vb(19,"div",7),a.Ic(20),a.Ub(),a.Ub(),a.Vb(21,"div",5),a.Vb(22,"div",7),a.Vb(23,"strong"),a.Ic(24,"School Motto"),a.Ub(),a.Ub(),a.Vb(25,"div",7),a.Ic(26),a.Ub(),a.Ub(),a.Vb(27,"div",5),a.Vb(28,"div",7),a.Vb(29,"strong"),a.Ic(30,"School"),a.Ub(),a.Ub(),a.Vb(31,"div",7),a.Ic(32),a.Ub(),a.Ub(),a.Vb(33,"div",5),a.Vb(34,"div",7),a.Vb(35,"strong"),a.Ic(36,"School County"),a.Ub(),a.Ub(),a.Vb(37,"div",7),a.Ic(38),a.Ub(),a.Ub(),a.Vb(39,"div",5),a.Vb(40,"div",7),a.Vb(41,"strong"),a.Ic(42,"School Principal"),a.Ub(),a.Ub(),a.Vb(43,"div",7),a.Ic(44),a.Ub(),a.Ub(),a.Vb(45,"div",5),a.Vb(46,"div",7),a.Vb(47,"strong"),a.Ic(48,"School Deputy"),a.Ub(),a.Ub(),a.Vb(49,"div",7),a.Ic(50),a.Ub(),a.Ub(),a.Vb(51,"div",5),a.Vb(52,"div",7),a.Vb(53,"strong"),a.Ic(54,"School SeniorTeacher"),a.Ub(),a.Ub(),a.Vb(55,"div",7),a.Ic(56),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Ub(),a.Vb(57,"div",8),a.Vb(58,"button",9),a.dc("click",(function(){return t.back()})),a.Ic(59,"Back"),a.Ub(),a.Ub(),a.Ub()),2&o&&(a.Db(14),a.Kc(" : ",t.school.schoolName," "),a.Db(6),a.Kc(" : ",t.school.schoolCode," "),a.Db(6),a.Kc(" : ",t.school.schoolMotto," "),a.Db(6),a.Kc(" : ",t.school.schoolID," "),a.Db(6),a.Kc(" : ",t.school.schoolCounty," "),a.Db(6),a.Kc(" : ",t.school.schoolPrincipal," "),a.Db(6),a.Kc(" : ",t.school.schoolDeputy," "),a.Db(6),a.Kc(" : ",t.school.schoolSeniorTeacher," "))},directives:[l.a],styles:[""]}),e)}],u=((i=function o(){_classCallCheck(this,o)}).\u0275mod=a.Nb({type:i}),i.\u0275inj=a.Mb({factory:function(o){return new(o||i)},imports:[[b.g.forChild(h)],b.g]}),i),d=c("EQGD"),v=c("K0h9");c.d(t,"SchoolDetailsModule",(function(){return p}));var f,p=((f=function o(){_classCallCheck(this,o)}).\u0275mod=a.Nb({type:f}),f.\u0275inj=a.Mb({factory:function(o){return new(o||f)},imports:[[n.b,u,d.a,v.a]]}),f)}}]);