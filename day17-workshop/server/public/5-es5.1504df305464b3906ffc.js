(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"EbT/":function(t,i,a){"use strict";a.r(i);var l=a("8Y7J"),e=function(){function t(t,i,a){this.bggSvc=t,this.router=i,this.activatedRoute=a,this.games=[]}return t.prototype.ngOnInit=function(){var t=this;console.log(this.bggSvc),this.bggSvc.getBoardgames().then((function(i){console.info(i),t.games=i}))},t.prototype.viewComments=function(t){this.router.navigate(["comment",t],{relativeTo:this.activatedRoute})},t}(),n=function(){function t(t,i){this.activatedRoute=t,this.bggSvc=i,this.comments=[]}return t.prototype.ngOnInit=function(){var t=this;this.bggSvc.getComments(this.activatedRoute.snapshot.params.gid).then((function(i){t.comments=i}))},t}(),s=function(){},m=a("pMnS"),o=a("Q+lL"),r=a("SVse"),d=a("IP0z"),p=a("Xd0L"),b=a("cUpR"),c=a("/HVE"),u=a("02hT"),g=a("omvX");a("s7LF");var h=l.pb({encapsulation:2,styles:[".mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:0}mat-action-list button{background:0 0;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:0}@media (-ms-high-contrast:active){.mat-selection-list:focus{outline-style:dotted}.mat-list-option:focus,.mat-list-option:hover,.mat-nav-list .mat-list-item:focus,.mat-nav-list .mat-list-item:hover,mat-action-list .mat-list-item:focus,mat-action-list .mat-list-item:hover{outline:dotted 1px}}@media (hover:none){.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-list-option:not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover{background:0 0}}"],data:{}});function x(t){return l.Ib(2,[l.Cb(null,0)],null,null)}var v=l.pb({encapsulation:2,styles:[],data:{}});function f(t){return l.Ib(2,[(t()(),l.rb(0,0,null,null,6,"div",[["class","mat-list-item-content"]],null,null,null,null,null)),(t()(),l.rb(1,0,null,null,1,"div",[["class","mat-list-item-ripple mat-ripple"],["mat-ripple",""]],[[2,"mat-ripple-unbounded",null]],null,null,null,null)),l.qb(2,212992,null,0,p.s,[l.k,l.x,c.a,[2,p.i],[2,g.a]],{disabled:[0,"disabled"],trigger:[1,"trigger"]},null),l.Cb(null,0),(t()(),l.rb(4,0,null,null,1,"div",[["class","mat-list-text"]],null,null,null,null,null)),l.Cb(null,1),l.Cb(null,2)],(function(t,i){var a=i.component;t(i,2,0,a._isRippleDisabled(),a._getHostElement())}),(function(t,i){t(i,1,0,l.Db(i,2).unbounded)}))}var w=a("IheW"),B=function(){function t(t){this.http=t}return t.prototype.getBoardgames=function(t,i){void 0===t&&(t=20),void 0===i&&(i=0);var a=(new w.g).set("limit",t+"").set("offset",i+"");return this.http.get("/api/games",{params:a}).toPromise()},t.prototype.getComments=function(t){return this.http.get("/api/comment/"+t).toPromise()},t}(),y=a("iInd"),k=l.pb({encapsulation:0,styles:[[".game-title[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700}.game-details[_ngcontent-%COMP%]{margin-left:1.2vw}"]],data:{}});function z(t){return l.Ib(0,[(t()(),l.rb(0,0,null,null,13,"mat-list-item",[["class","mat-list-item"]],[[2,"mat-list-item-avatar",null],[2,"mat-list-item-with-avatar",null]],[[null,"click"]],(function(t,i,a){var l=!0;return"click"===i&&(l=!1!==t.component.viewComments(t.context.$implicit.gid)&&l),l}),f,v)),l.qb(1,1228800,null,3,o.c,[l.k,l.h,[2,o.f],[2,o.a]],null,null),l.Fb(603979776,1,{_lines:1}),l.Fb(603979776,2,{_avatar:0}),l.Fb(603979776,3,{_icon:0}),(t()(),l.rb(5,0,null,0,1,"img",[["alt",""],["class","mat-list-avatar"],["matListAvatar",""]],[[8,"src",4]],null,null,null,null)),l.qb(6,16384,[[2,4]],0,o.b,[],null,null),(t()(),l.rb(7,0,null,2,6,"div",[["class","game-details"]],null,null,null,null,null)),(t()(),l.rb(8,0,null,null,2,"div",[["class","game-title mat-line"],["mat-line",""]],null,null,null,null,null)),l.qb(9,16384,[[1,4]],0,p.k,[],null,null),(t()(),l.Hb(10,null,["",""])),(t()(),l.rb(11,0,null,null,2,"div",[["class","mat-line"],["mat-line",""]],null,null,null,null,null)),l.qb(12,16384,[[1,4]],0,p.k,[],null,null),(t()(),l.Hb(13,null,["Rank: ",""]))],null,(function(t,i){t(i,0,0,l.Db(i,1)._avatar||l.Db(i,1)._icon,l.Db(i,1)._avatar||l.Db(i,1)._icon),t(i,5,0,i.context.$implicit.image),t(i,10,0,i.context.$implicit.name),t(i,13,0,i.context.$implicit.ranking)}))}function q(t){return l.Ib(0,[(t()(),l.rb(0,0,null,null,3,"mat-list",[["class","mat-list mat-list-base"]],null,null,null,x,h)),l.qb(1,704512,null,0,o.a,[l.k],null,null),(t()(),l.gb(16777216,null,0,1,null,z)),l.qb(3,278528,null,0,r.i,[l.N,l.K,l.q],{ngForOf:[0,"ngForOf"]},null)],(function(t,i){t(i,3,0,i.component.games)}),null)}var I=l.nb("app-game",e,(function(t){return l.Ib(0,[(t()(),l.rb(0,0,null,null,1,"app-game",[],null,null,null,q,k)),l.qb(1,114688,null,0,e,[B,y.k,y.a],null,null)],(function(t,i){t(i,1,0)}),null)}),{},{},[]),C=a("igqZ"),_=l.pb({encapsulation:2,styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(.4,0,.2,1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}@media (-ms-high-contrast:active){.mat-card{outline:solid 1px}}.mat-card-actions,.mat-card-content,.mat-card-subtitle{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media (max-width:599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card-content>:first-child,.mat-card>:first-child{margin-top:0}.mat-card-content>:last-child:not(.mat-card-footer),.mat-card>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-subtitle:not(:first-child),.mat-card-title:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],data:{}});function j(t){return l.Ib(2,[l.Cb(null,0),l.Cb(null,1)],null,null)}var O=l.pb({encapsulation:2,styles:[],data:{}});function F(t){return l.Ib(2,[l.Cb(null,0),(t()(),l.rb(1,0,null,null,1,"div",[["class","mat-card-header-text"]],null,null,null,null,null)),l.Cb(null,1),l.Cb(null,2)],null,null)}var R=l.pb({encapsulation:0,styles:[[""]],data:{}});function D(t){return l.Ib(0,[(t()(),l.rb(0,0,null,null,15,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,j,_)),l.qb(1,49152,null,0,C.a,[[2,g.a]],null,null),(t()(),l.rb(2,0,null,0,9,"mat-card-header",[["class","mat-card-header"]],null,null,null,F,O)),l.qb(3,49152,null,0,C.d,[],null,null),(t()(),l.rb(4,0,null,0,1,"img",[["class","mat-card-avatar"],["mat-card-avatar",""]],[[8,"src",4]],null,null,null,null)),l.qb(5,16384,null,0,C.b,[],null,null),(t()(),l.rb(6,0,null,1,2,"mat-card-title",[["class","mat-card-title"]],null,null,null,null,null)),l.qb(7,16384,null,0,C.g,[],null,null),(t()(),l.Hb(8,null,["",""])),(t()(),l.rb(9,0,null,1,2,"mat-card-subtitle",[["class","mat-card-subtitle"]],null,null,null,null,null)),l.qb(10,16384,null,0,C.f,[],null,null),(t()(),l.Hb(11,null,["Rating: ",""])),(t()(),l.rb(12,0,null,0,3,"mat-card-content",[["class","mat-card-content"]],null,null,null,null,null)),l.qb(13,16384,null,0,C.c,[],null,null),(t()(),l.rb(14,0,null,null,1,"p",[],null,null,null,null,null)),(t()(),l.Hb(15,null,["",""]))],null,(function(t,i){t(i,0,0,"NoopAnimations"===l.Db(i,1)._animationMode),t(i,4,0,l.vb(1,"https://i.pravatar.cc/150?u=",i.context.$implicit.user,"")),t(i,8,0,i.context.$implicit.user),t(i,11,0,i.context.$implicit.rating),t(i,15,0,i.context.$implicit.c_text)}))}function H(t){return l.Ib(0,[(t()(),l.gb(16777216,null,null,1,null,D)),l.qb(1,278528,null,0,r.i,[l.N,l.K,l.q],{ngForOf:[0,"ngForOf"]},null)],(function(t,i){t(i,1,0,i.component.comments)}),null)}var S=l.nb("app-comment",n,(function(t){return l.Ib(0,[(t()(),l.rb(0,0,null,null,1,"app-comment",[],null,null,null,H,R)),l.qb(1,114688,null,0,n,[y.a,B],null,null)],(function(t,i){t(i,1,0)}),null)}),{},{},[]),$=a("/q54"),N=a("POq0"),P=a("VDRc"),T=a("ura0"),E=a("Nhcz"),L=a("u9T3"),M=a("BzsH"),X=a("Gi4r"),K=a("oapL"),A=a("HsOI"),J=a("ZwOa"),V=a("Fwaw"),Z=a("vvyD");a.d(i,"GamesModuleNgFactory",(function(){return G}));var G=l.ob(s,[],(function(t){return l.Ab([l.Bb(512,l.j,l.Z,[[8,[m.a,I,S]],[3,l.j],l.v]),l.Bb(4608,r.l,r.k,[l.s,[2,r.z]]),l.Bb(4608,w.i,w.o,[r.c,l.z,w.m]),l.Bb(4608,w.p,w.p,[w.i,w.n]),l.Bb(5120,w.a,(function(t){return[t]}),[w.p]),l.Bb(4608,w.l,w.l,[]),l.Bb(6144,w.j,null,[w.l]),l.Bb(4608,w.h,w.h,[w.j]),l.Bb(6144,w.b,null,[w.h]),l.Bb(4608,w.f,w.k,[w.b,l.p]),l.Bb(4608,w.c,w.c,[w.f]),l.Bb(5120,l.b,(function(t,i){return[$.j(t,i)]}),[r.c,l.z]),l.Bb(4608,N.c,N.c,[]),l.Bb(4608,p.b,p.b,[]),l.Bb(4608,B,B,[w.c]),l.Bb(1073742336,r.b,r.b,[]),l.Bb(1073742336,w.e,w.e,[]),l.Bb(1073742336,w.d,w.d,[]),l.Bb(1073742336,$.c,$.c,[]),l.Bb(1073742336,d.a,d.a,[]),l.Bb(1073742336,P.c,P.c,[]),l.Bb(1073742336,T.a,T.a,[]),l.Bb(1073742336,E.a,E.a,[]),l.Bb(1073742336,L.a,L.a,[[2,$.g],l.z]),l.Bb(1073742336,p.j,p.j,[[2,p.c],[2,b.f]]),l.Bb(1073742336,M.b,M.b,[]),l.Bb(1073742336,p.l,p.l,[]),l.Bb(1073742336,c.b,c.b,[]),l.Bb(1073742336,p.t,p.t,[]),l.Bb(1073742336,p.r,p.r,[]),l.Bb(1073742336,u.a,u.a,[]),l.Bb(1073742336,o.d,o.d,[]),l.Bb(1073742336,X.a,X.a,[]),l.Bb(1073742336,C.e,C.e,[]),l.Bb(1073742336,K.c,K.c,[]),l.Bb(1073742336,N.d,N.d,[]),l.Bb(1073742336,A.d,A.d,[]),l.Bb(1073742336,J.b,J.b,[]),l.Bb(1073742336,V.c,V.c,[]),l.Bb(1073742336,Z.a,Z.a,[]),l.Bb(1073742336,y.l,y.l,[[2,y.q],[2,y.k]]),l.Bb(1073742336,s,s,[]),l.Bb(256,w.m,"XSRF-TOKEN",[]),l.Bb(256,w.n,"X-XSRF-TOKEN",[]),l.Bb(1024,y.i,(function(){return[[{path:"",component:e},{path:"games",component:e},{path:"comment/:gid",component:n}]]}),[])])}))}}]);