function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{KLHr:function(e,t,n){"use strict";n.r(t);var a=n("ofXK"),i=n("tyNb"),r=n("J7/z"),o=n("AlMu"),c=n("Olgc"),s=n("Jvyb"),l=n("bojg"),u=n("5JmO"),d=n.n(u),b=n("TruH"),f=n.n(b),p=n("uIk+"),h=n("fXoL");d.a.vfs=f.a.pdfMake.vfs;var g,v=((g=function(){function e(t){_classCallCheck(this,e),this.canvas=t}return _createClass(e,[{key:"setTitle",value:function(e,t,n,a,i,r,o){var c;return[{table:{widths:["100%","0%"],body:[[{image:e,alignment:"center",width:60,height:30}],[{text:t,fontSize:c="A6"===o?8:10,alignment:"center",bold:!0}],[{text:n,fontSize:c,alignment:"center"}],[{text:a,fontSize:c,alignment:"center",italics:!0}],[{text:i,fontSize:c,alignment:"center",italics:!0}]]},layout:"noBorders"}]}},{key:"createTableHeader",value:function(e){var t={fila_0:{}};return e.forEach((function(e,n){t.fila_0["col_"+(+n+1)]={text:e,style:"tableHeader",margin:[0,8,0,0]}})),t}},{key:"createBody",value:function(e,t){var n=[];for(var a in e){var i=[];for(var r in e[a])i.push(e[a][r]);n.push(i)}return t.forEach((function(e){var t=[];for(var a in e)t.push(e[a]);n.push(t)})),n}},{key:"getDocDefinition",value:function(e,t,n,a,i,r,o,c,s,l){var u,d,b,f={header:{title:e,header1:t,header2:n,header3:a},body:{header:r,record:o}},p=this.createBody(this.createTableHeader(f.body.header),f.body.record);return"A6"===l?(u=[10,110,10,55],d=10,b=7):(d=16,b=10,u=[10,110,10,55]),{pageOrientation:c,pageSize:l,pageMargins:u,header:this.setTitle(i,e,t,n,a,f,l),footer:function(e,t){return{text:"Page "+e.toString()+" of "+t,alignment:"center",margin:[0,30,0,0]}},content:[{style:"tableContent",table:{widths:s,headerRows:1,body:p}}],styles:{header:{fontSize:d,bold:!0},tableHeader:{bold:!0},tableContent:{fontSize:b}}}}},{key:"generatePdf",value:function(e){d.a.createPdf(e).print()}},{key:"getPdfData",value:function(e){var t=this,n=["32%","32%","36%"],a=["Parent/Guardian","Parent/Guardian","Student"],i="Date: ".concat((new Date).toLocaleString());this.canvas.getBase64Image("./assets/images/schoollogo.jpg").then((function(r){t.generatePdf(t.getDocDefinition("ST. FRANCIS OF ASSISI SECONDARY SCHOOL - KALIINI","P.O BOX 30-90121 - Emali","Tel. No.:072127703",i,r,a,t.mapData(e),"portrait",n,"A4"))}))}},{key:"mapData",value:function(e){return e.map((function(e){return{Name:e.firstParent,Name2:e.secondParent,Code:e.studentID}}))}}]),e}()).\u0275fac=function(e){return new(e||g)(h.Zb(p.a))},g.\u0275prov=h.Lb({token:g,factory:g.\u0275fac,providedIn:"root"}),g),m=n("24YL"),y=n("7CaW"),S=n("rEr+"),k=n("7zfz"),P=n("3Pt+"),C=n("7kUa");function w(e,t){if(1&e&&(h.Vb(0,"th"),h.Ic(1),h.Ub()),2&e){var n=t.$implicit;h.Db(1),h.Kc(" ",n.header," ")}}function I(e,t){if(1&e&&(h.Vb(0,"tr",11),h.Gc(1,w,2,1,"th",12),h.Vb(2,"th"),h.Ic(3,"Student"),h.Ub(),h.Vb(4,"th"),h.Ic(5,"Action"),h.Ub(),h.Ub()),2&e){var n=h.gc();h.Db(1),h.nc("ngForOf",n.columns)}}function D(e,t){if(1&e&&(h.Vb(0,"td"),h.Vb(1,"div"),h.Ic(2),h.Ub(),h.Ub()),2&e){var n=t.$implicit,a=h.gc().$implicit;h.Db(2),h.Jc(a[n.field])}}var U=function(e){return["/main/parents/","parent-details",e]},V=function(e){return["/main/parents/","parent-edit",e]};function _(e,t){if(1&e){var n=h.Wb();h.Vb(0,"tr",11),h.Gc(1,D,3,1,"td",12),h.Vb(2,"td"),h.Ic(3),h.Ub(),h.Vb(4,"td"),h.Vb(5,"div",13),h.Vb(6,"button",14),h.Ic(7,"View"),h.Ub(),h.Vb(8,"button",15),h.Ic(9,"Edit"),h.Ub(),h.Vb(10,"button",16),h.dc("click",(function(){h.zc(n);var e=t.$implicit;return h.gc().deleteParent(e._id)})),h.Ic(11,"Delete"),h.Ub(),h.Ub(),h.Ub(),h.Ub()}if(2&e){var a=t.$implicit,i=h.gc();h.Db(1),h.nc("ngForOf",i.columns),h.Db(2),h.Jc(a.studentID.studentName),h.Db(3),h.nc("routerLink",h.qc(4,U,a._id)),h.Db(2),h.nc("routerLink",h.qc(6,V,a._id))}}var x,z,R=[{path:"",component:(x=function(){function e(t,n,a,i,r){_classCallCheck(this,e),this.dialogService=t,this.toastService=n,this.applicationStateService=a,this.parentsService=i,this.pdfService=r,this.parents=[],this.isMobileResolution=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.isMobileResolution=this.applicationStateService.getIsMobileResolution(),this.pageSize=10,this.columns=[{field:"firstParent",header:"Parent/Guardian"},{field:"secondParent",header:"Parent/Guardian"}],this.getparents()}},{key:"getparents",value:function(){var e=this;this.parentsService.getParents().subscribe((function(t){e.parents=t.data,e.toastService.addSingle("success","Parents Loaded","")}),(function(t){e.toastService.addSingle("error","sorry, we could not find the data","contact the admin for assitance")}))}},{key:"openNew",value:function(){var e=this;this.dialogService.open(s.a,{data:{},header:"Enroll New parent",width:this.isMobileResolution?"400px":"600px"}).onClose.subscribe((function(t){t&&e.toastService.addSingle("success","panel closed","")}))}},{key:"exportPdf",value:function(){this.pdfService.getPdfData(this.parents)}}]),e}(),x.\u0275fac=function(e){return new(e||x)(h.Pb(r.a),h.Pb(c.a),h.Pb(o.a),h.Pb(l.a),h.Pb(v))},x.\u0275cmp=h.Jb({type:x,selectors:[["app-parent-list"]],features:[h.Cb([r.a])],decls:16,vars:5,consts:[["pRipple","",1,"btn","btn-success","btn-sm","m-1",3,"click"],["pRipple","","type","button","icon","pi pi-file-excel","tooltipPosition","bottom",1,"btn","btn-info","btn-sm","mx-2",3,"click"],["header","Parents"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"value","paginator","rows","showCurrentPageReport"],["pTemplate","header"],["pTemplate","body"],[1,"ui-g"],[1,"ui-g-10","ui-sm-8"],[2,"float","right"],[1,"ui-g-2","ui-sm-4"],["type","text","pInputText","",3,"ngModel","ngModelChange"],[1,"text-sm"],[4,"ngFor","ngForOf"],[1,"flex"],["pRipple","",1,"btn","btn-info","btn-sm",2,"margin-right","16px",3,"routerLink"],["pRipple","",1,"btn","btn-primary","btn-sm",2,"margin-right","16px",3,"routerLink"],["pRipple","",1,"btn","btn-danger","btn-sm",3,"click"]],template:function(e,t){1&e&&(h.Qb(0,"app-header-breadcrumb"),h.Vb(1,"div"),h.Vb(2,"button",0),h.dc("click",(function(){return t.openNew()})),h.Ic(3,"Create Parent"),h.Ub(),h.Vb(4,"button",1),h.dc("click",(function(){return t.exportPdf()})),h.Ic(5,"Parent report"),h.Ub(),h.Ub(),h.Vb(6,"p-panel",2),h.Vb(7,"p-table",3),h.Gc(8,I,6,1,"ng-template",4),h.Gc(9,_,12,8,"ng-template",5),h.Ub(),h.Vb(10,"div",6),h.Vb(11,"div",7),h.Vb(12,"label",8),h.Ic(13,"Page Size:"),h.Ub(),h.Ub(),h.Vb(14,"div",9),h.Vb(15,"input",10),h.dc("ngModelChange",(function(e){return t.pageSize=e})),h.Ub(),h.Ub(),h.Ub(),h.Ub()),2&e&&(h.Db(7),h.nc("value",t.parents)("paginator",!0)("rows",t.pageSize)("showCurrentPageReport",!0),h.Db(8),h.nc("ngModel",t.pageSize))},directives:[m.a,y.a,S.c,k.e,P.b,C.a,P.k,P.n,a.j,i.d],styles:[""]}),x)}],L=((z=function e(){_classCallCheck(this,e)}).\u0275mod=h.Nb({type:z}),z.\u0275inj=h.Mb({factory:function(e){return new(e||z)},imports:[[i.g.forChild(R)],i.g]}),z),M=n("EQGD"),O=n("K0h9");n.d(t,"ParentListModule",(function(){return T}));var N,T=((N=function e(){_classCallCheck(this,e)}).\u0275mod=h.Nb({type:N}),N.\u0275inj=h.Mb({factory:function(e){return new(e||N)},imports:[[a.b,L,O.a,M.a]]}),N)},Olgc:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("fXoL"),i=n("7zfz"),r=function(){var e=function(){function e(t){_classCallCheck(this,e),this.messageService=t}return _createClass(e,[{key:"addSingle",value:function(e,t,n){this.messageService.add({severity:e,summary:t,detail:n})}},{key:"addMultiple",value:function(e){this.messageService.addAll(e)}},{key:"clear",value:function(){this.messageService.clear()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Zb(i.d))},e.\u0275prov=a.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);