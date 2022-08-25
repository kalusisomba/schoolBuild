function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{Olgc:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var o=n("fXoL"),i=n("7zfz"),a=function(){var e=function(){function e(t){_classCallCheck(this,e),this.messageService=t}return _createClass(e,[{key:"addSingle",value:function(e,t,n){this.messageService.add({severity:e,summary:t,detail:n})}},{key:"addMultiple",value:function(e){this.messageService.addAll(e)}},{key:"clear",value:function(){this.messageService.clear()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Zb(i.d))},e.\u0275prov=o.Lb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},v8D2:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),i=n("tyNb"),a=n("7zfz"),r=n("J7/z"),c=n("AlMu"),l=n("Olgc"),s=n("5JmO"),u=n.n(s),d=n("TruH"),b=n.n(d),p=n("uIk+"),f=n("fXoL");u.a.vfs=b.a.pdfMake.vfs;var h,g=((h=function(){function e(t){_classCallCheck(this,e),this.canvas=t}return _createClass(e,[{key:"setTitle",value:function(e,t,n,o,i,a,r){var c;return[{table:{widths:["100%","0%"],body:[[{image:e,alignment:"center",width:60,height:30}],[{text:t,fontSize:c="A6"===r?8:10,alignment:"center",bold:!0}],[{text:n,fontSize:c,alignment:"center"}],[{text:o,fontSize:c,alignment:"center",italics:!0}],[{text:i,fontSize:c,alignment:"center",italics:!0}]]},layout:"noBorders"}]}},{key:"createTableHeader",value:function(e){var t={fila_0:{}};return e.forEach((function(e,n){t.fila_0["col_"+(+n+1)]={text:e,style:"tableHeader",margin:[0,8,0,0]}})),t}},{key:"createBody",value:function(e,t){var n=[];for(var o in e){var i=[];for(var a in e[o])i.push(e[o][a]);n.push(i)}return t.forEach((function(e){var t=[];for(var o in e)t.push(e[o]);n.push(t)})),n}},{key:"getDocDefinition",value:function(e,t,n,o,i,a,r,c,l,s){var u,d,b,p={header:{title:e,header1:t,header2:n,header3:o},body:{header:a,record:r}},f=this.createBody(this.createTableHeader(p.body.header),p.body.record);return"A6"===s?(u=[10,110,10,55],d=10,b=7):(d=16,b=10,u=[10,110,10,55]),{pageOrientation:c,pageSize:s,pageMargins:u,header:this.setTitle(i,e,t,n,o,p,s),footer:function(e,t){return{text:"Page "+e.toString()+" of "+t,alignment:"center",margin:[0,30,0,0]}},content:[{style:"tableContent",table:{widths:l,headerRows:1,body:f}}],styles:{header:{fontSize:d,bold:!0},tableHeader:{bold:!0},tableContent:{fontSize:b}}}}},{key:"generatePdf",value:function(e){u.a.createPdf(e).print()}},{key:"getPdfData",value:function(e){var t=this,n=["20%","35%","25%","20%"],o=["School Code","School Name","School Motto","Principal"],i="Date: ".concat((new Date).toLocaleString());this.canvas.getBase64Image("./assets/images/schoollogo.jpg").then((function(a){t.generatePdf(t.getDocDefinition("ST. FRANCIS OF ASSISI SECONDARY SCHOOL - KALIINI","P.O BOX 30-90121 - Emali","Tel. No.:072127703",i,a,o,t.mapData(e),"portrait",n,"A4"))}))}},{key:"mapData",value:function(e){return e.map((function(e){return{AdmNo:e.schoolCode,StudentName:e.schoolName,Gender:e.schoolMotto,pidNumber:e.schoolPrincipal}}))}}]),e}()).\u0275fac=function(e){return new(e||h)(f.Zb(p.a))},h.\u0275prov=f.Lb({token:h,factory:h.\u0275fac,providedIn:"root"}),h),m=n("wsLY"),v=n("Y5oR"),S=n("24YL"),y=n("7CaW"),C=n("rEr+"),k=n("3Pt+"),w=n("7kUa");function P(e,t){if(1&e){var n=f.Wb();f.Vb(0,"div",14),f.Qb(1,"i",15),f.Vb(2,"input",16),f.dc("input",(function(e){return f.zc(n),f.gc().dt1.filterGlobal(e.target.field,"contains")})),f.Ub(),f.Ub()}}function V(e,t){if(1&e){var n=f.Wb();f.Vb(0,"div",17),f.Qb(1,"i",15),f.Vb(2,"input",18),f.dc("input",(function(e){return f.zc(n),f.gc(),f.yc(9).filterGlobal(e.target.value,"contains")})),f.Ub(),f.Ub()}}function U(e,t){if(1&e&&(f.Vb(0,"th",21),f.Ic(1),f.Qb(2,"p-sortIcon",22),f.Ub()),2&e){var n=t.$implicit;f.nc("pSortableColumn",n.field),f.Db(1),f.Kc(" ",n.header," "),f.Db(1),f.nc("field",n.field)}}function x(e,t){if(1&e&&(f.Vb(0,"tr",19),f.Gc(1,U,3,3,"th",20),f.Vb(2,"th"),f.Ic(3,"Action"),f.Ub(),f.Ub()),2&e){var n=f.gc();f.Db(1),f.nc("ngForOf",n.columns)}}function I(e,t){if(1&e&&(f.Vb(0,"td"),f.Vb(1,"div"),f.Ic(2),f.Ub(),f.Ub()),2&e){var n=t.$implicit,o=f.gc().$implicit;f.Db(2),f.Jc(o[n.field])}}var z=function(e){return["/main/schools/","school-details",e]},D=function(e){return["/main/schools/","school-edit",e]};function O(e,t){if(1&e&&(f.Vb(0,"tr",19),f.Gc(1,I,3,1,"td",23),f.Vb(2,"td"),f.Vb(3,"div",24),f.Vb(4,"button",25),f.Ic(5,"View"),f.Ub(),f.Vb(6,"button",26),f.Ic(7,"Edit"),f.Ub(),f.Ub(),f.Ub(),f.Ub()),2&e){var n=t.$implicit,o=f.gc();f.Db(1),f.nc("ngForOf",o.columns),f.Db(3),f.nc("routerLink",f.qc(3,z,n._id)),f.Db(2),f.nc("routerLink",f.qc(5,D,n._id))}}function M(e,t){1&e&&(f.Vb(0,"tr"),f.Vb(1,"td",27),f.Ic(2,"No data found."),f.Ub(),f.Ub())}var N,_,T=function(){return[10,25,50,100]},R=[{path:"",component:(N=function(){function e(t,n,o,i,a){_classCallCheck(this,e),this.dialogService=t,this.toastService=n,this.pdfService=o,this.applicationStateService=i,this.schoolService=a,this.schools=[],this.isMobileResolution=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.isMobileResolution=this.applicationStateService.getIsMobileResolution(),this.pageSize=10,this.columns=[{field:"schoolName",header:"school Name"},{field:"schoolCode",header:"school Code"},{field:"schoolMotto",header:"school Motto"},{field:"schoolPrincipal",header:"school Principal"}],this.exportColumns=this.columns.map((function(e){return{title:e.header,dataKey:e.field}})),this.getSchools()}},{key:"getSchools",value:function(){var e=this;this.schoolService.getSchools().subscribe((function(t){e.schools=t.data,e.toastService.addSingle("success","schools Loaded","")}),(function(t){e.toastService.addSingle("error","sorry, we could not find the data","contact the admin for assistance")}))}},{key:"openNew",value:function(){var e=this;this.dialogService.open(v.a,{data:{},header:"Enroll New Student",width:this.isMobileResolution?"400px":"600px"}).onClose.subscribe((function(t){t&&e.toastService.addSingle("success","panel closed","")}))}},{key:"exportPdf",value:function(){this.pdfService.getPdfData(this.schools)}}]),e}(),N.\u0275fac=function(e){return new(e||N)(f.Pb(r.a),f.Pb(l.a),f.Pb(g),f.Pb(c.a),f.Pb(m.a))},N.\u0275cmp=f.Jb({type:N,selectors:[["app-school-list"]],features:[f.Cb([r.a,a.d])],decls:20,vars:9,consts:[["pRipple","",1,"btn","btn-success","btn-sm","m-1",3,"click"],["type","button","pRipple","","icon","pi pi-filter","pTooltip","Selection Only","tooltipPosition","bottom",1,"btn","btn-success","btn-sm",3,"click"],["header","Schools"],["pTemplate","caption"],["currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries",3,"columns","value","paginator","resizableColumns","rows","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"ui-g"],[1,"ui-g-10","ui-sm-8"],[2,"float","right"],[1,"ui-g-2","ui-sm-4"],["type","text","pInputText","",3,"ngModel","ngModelChange"],["colspan","2",2,"text-align","right"],[1,"pi","pi-search",2,"margin","4px 4px 0 0"],["type","text","pInputText","","size","50","placeholder","Global Filter",2,"width","auto",3,"input"],[2,"text-align","right"],["type","text","pInputText","","size","20","placeholder","Global Filter",2,"width","auto",3,"input"],[1,"text-sm"],[3,"pSortableColumn",4,"ngFor","ngForOf"],[3,"pSortableColumn"],[3,"field"],[4,"ngFor","ngForOf"],[1,"flex"],["pRipple","",1,"btn","btn-info","btn-sm",2,"margin-right","16px",3,"routerLink"],["pRipple","",1,"btn","btn-primary","btn-sm",2,"margin-right","16px",3,"routerLink"],["colspan","5"]],template:function(e,t){if(1&e){var n=f.Wb();f.Qb(0,"app-header-breadcrumb"),f.Vb(1,"div"),f.Vb(2,"button",0),f.dc("click",(function(){return t.openNew()})),f.Ic(3,"Create New school"),f.Ub(),f.Vb(4,"button",1),f.dc("click",(function(){return f.zc(n),f.yc(9).exportCSV({selectionOnly:!0})})),f.Ic(5,"Print Filtered"),f.Ub(),f.Ub(),f.Vb(6,"p-panel",2),f.Gc(7,P,3,0,"ng-template",3),f.Vb(8,"p-table",4,5),f.Gc(10,V,3,0,"ng-template",3),f.Gc(11,x,4,1,"ng-template",6),f.Gc(12,O,8,7,"ng-template",7),f.Gc(13,M,3,0,"ng-template",8),f.Ub(),f.Vb(14,"div",9),f.Vb(15,"div",10),f.Vb(16,"label",11),f.Ic(17,"Page Size:"),f.Ub(),f.Ub(),f.Vb(18,"div",12),f.Vb(19,"input",13),f.dc("ngModelChange",(function(e){return t.pageSize=e})),f.Ub(),f.Ub(),f.Ub(),f.Ub()}2&e&&(f.Db(8),f.nc("columns",t.columns)("value",t.schools)("paginator",!0)("resizableColumns",!0)("rows",t.pageSize)("showCurrentPageReport",!0)("rowsPerPageOptions",f.pc(8,T)),f.Db(11),f.nc("ngModel",t.pageSize))},directives:[S.a,y.a,a.e,C.c,k.b,w.a,k.k,k.n,o.j,C.b,C.a,i.d],styles:[""]}),N)}],L=((_=function e(){_classCallCheck(this,e)}).\u0275mod=f.Nb({type:_}),_.\u0275inj=f.Mb({factory:function(e){return new(e||_)},imports:[[i.g.forChild(R)],i.g]}),_),G=n("EQGD"),A=n("K0h9");n.d(t,"SchoolListModule",(function(){return E}));var F,E=((F=function e(){_classCallCheck(this,e)}).\u0275mod=f.Nb({type:F}),F.\u0275inj=f.Mb({factory:function(e){return new(e||F)},imports:[[o.b,L,A.a,G.a]]}),F)}}]);