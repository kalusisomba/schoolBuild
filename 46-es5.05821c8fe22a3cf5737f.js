function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var c=t[i];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"0tBa":function(e,t,i){"use strict";i.r(t);var c,n,a=i("ofXK"),r=i("tyNb"),o=i("+wT4"),b=i("fXoL"),s=i("24YL"),u=[{path:"",component:(c=function(){function e(t,i,c,n){_classCallCheck(this,e),this.location=t,this.router=i,this.examSetUpService=c,this.actRoute=n,this.history=[],this.examSetUp=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.actRoute.paramMap.subscribe((function(t){e.setUpID=t.get("_id")})),this.examSetUpService.getExamSetup(this.setUpID).subscribe((function(t){e.examSetUp=t.data}))}},{key:"back",value:function(){this.history.pop(),this.history.length>0?this.location.back():this.router.navigateByUrl("/main/examSetUps")}}]),e}(),c.\u0275fac=function(e){return new(e||c)(b.Pb(a.g),b.Pb(r.c),b.Pb(o.a),b.Pb(r.a))},c.\u0275cmp=b.Jb({type:c,selectors:[["app-exam-set-up-details"]],decls:49,vars:11,consts:[[1,"card","card-default"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"row"],[1,"col-sm-8"],[1,"col-sm-6"],[1,"card-footer"],["type","button",1,"btn","btn-info",3,"click"]],template:function(e,t){1&e&&(b.Qb(0,"app-header-breadcrumb"),b.Vb(1,"div",0),b.Vb(2,"div",1),b.Vb(3,"h5",2),b.Ic(4," setUp Details"),b.Ub(),b.Ub(),b.Vb(5,"div",3),b.Vb(6,"div",4),b.Vb(7,"div",5),b.Vb(8,"div",4),b.Vb(9,"div",6),b.Vb(10,"strong"),b.Ic(11,"Exam Name:"),b.Ub(),b.Ub(),b.Vb(12,"div",6),b.Ic(13),b.Ub(),b.Ub(),b.Vb(14,"div",4),b.Vb(15,"div",6),b.Vb(16,"strong"),b.Ic(17,"Exam Code:"),b.Ub(),b.Ub(),b.Vb(18,"div",6),b.Ic(19),b.Ub(),b.Ub(),b.Vb(20,"div",4),b.Vb(21,"div",6),b.Vb(22,"strong"),b.Ic(23,"Academic Year:"),b.Ub(),b.Ub(),b.Vb(24,"div",6),b.Ic(25),b.hc(26,"date"),b.hc(27,"date"),b.Ub(),b.Ub(),b.Vb(28,"div",4),b.Vb(29,"div",6),b.Vb(30,"strong"),b.Ic(31,"Academic Term:"),b.Ub(),b.Ub(),b.Vb(32,"div",6),b.Ic(33),b.Ub(),b.Ub(),b.Vb(34,"div",4),b.Vb(35,"div",6),b.Vb(36,"strong"),b.Ic(37,"Class"),b.Ub(),b.Ub(),b.Vb(38,"div",6),b.Ic(39),b.Ub(),b.Ub(),b.Vb(40,"div",4),b.Vb(41,"div",6),b.Vb(42,"strong"),b.Ic(43,"Description:"),b.Ub(),b.Ub(),b.Vb(44,"div",6),b.Ic(45),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Ub(),b.Vb(46,"div",7),b.Vb(47,"button",8),b.dc("click",(function(){return t.back()})),b.Ic(48,"Back"),b.Ub(),b.Ub(),b.Ub()),2&e&&(b.Db(13),b.Kc(" : ",t.examSetUp.examName," "),b.Db(6),b.Kc(" : ",t.examSetUp.examCode," "),b.Db(6),b.Lc(" : ",b.ic(26,7,t.examSetUp.yearID.beginsAt)," - ",b.ic(27,9,t.examSetUp.yearID.endsAt)," "),b.Db(8),b.Kc(" : ",t.examSetUp.termID.termName," "),b.Db(6),b.Kc(" : ",t.examSetUp.unitID.unitName," "),b.Db(6),b.Kc(" : ",t.examSetUp.examDescription," "))},directives:[s.a],pipes:[a.d],styles:[""]}),c)}],d=((n=function e(){_classCallCheck(this,e)}).\u0275mod=b.Nb({type:n}),n.\u0275inj=b.Mb({factory:function(e){return new(e||n)},imports:[[r.g.forChild(u)],r.g]}),n),l=i("EQGD"),m=i("K0h9");i.d(t,"ExamSetUpDetailsModule",(function(){return f}));var p,f=((p=function e(){_classCallCheck(this,e)}).\u0275mod=b.Nb({type:p}),p.\u0275inj=b.Mb({factory:function(e){return new(e||p)},imports:[[a.b,d,l.a,m.a]]}),p)},"24YL":function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var c=i("4WRT"),n=i("fXoL"),a=i("URcr"),r=function(){var e=function(){function e(t){_classCallCheck(this,e),this.routeStateService=t,this.items=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.routeStateService.getAll().forEach((function(t){e.items.push({label:t.title,command:function(){e.onClickBreadcrumb(t.id)}})})),this.home={icon:"pi pi-home"}}},{key:"onClickBreadcrumb",value:function(e){this.routeStateService.loadById(e)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n.Pb(c.a))},e.\u0275cmp=n.Jb({type:e,selectors:[["app-header-breadcrumb"]],decls:1,vars:2,consts:[["styleClass","header-breadcrumb",3,"model","home"]],template:function(e,t){1&e&&n.Qb(0,"p-breadcrumb",0),2&e&&n.nc("model",t.items)("home",t.home)},directives:[a.a],styles:[""]}),e}()},K0h9:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var c=i("EQGD"),n=i("fXoL"),a=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=n.Nb({type:e}),e.\u0275inj=n.Mb({factory:function(t){return new(t||e)},imports:[[c.a]]}),e}()}}]);