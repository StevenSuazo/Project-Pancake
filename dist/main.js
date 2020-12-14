!function(e){var t={};function a(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/dist/",a(a.s=0)}([function(e,t){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}var h=document.getElementById("canvas"),s=h.getContext("2d");h.width=1e3,h.height=600;var r=Date.now(),c=function(){function e(){a(this,e),this.pancakesOnBoard=[],this.pancakesOnBoard2=[],this.animate=this.animate.bind(this),this.animate2=this.animate2.bind(this),this.addPancake(),this.animate(),this.animate2()}return i(e,[{key:"addPancake",value:function(){new B instanceof B&&(this.pancakesOnBoard.push(new B),this.pancakesOnBoard2.push(new B))}},{key:"animate",value:function(){s.clearRect(0,0,h.width,h.height),m(d,0,0,g.width,g.height,g.x,g.y,g.width,g.height),this.pancakesOnBoard.forEach((function(e){Date.now()-r>1&&(e.movePancake(),e.makePancake())})),p(),requestAnimationFrame(this.animate)}},{key:"animate2",value:function(){s.clearRect(0,0,h.width,h.height),m(d,0,0,g.width,g.height,g.x,g.y,g.width,g.height),this.pancakesOnBoard2.forEach((function(e){Date.now()-r>5e3&&(e.movePancake(),e.makePancake())})),p(),requestAnimationFrame(this.animate2)}}]),e}(),g={x:200,y:410,width:170,height:200,speed:9},o=[],d=new Image;function m(e,t,a,n,i,h,r,c,g){s.drawImage(e,t,a,n,i,h,r,c,g)}function p(){u.includes(o[o.length-1])?g.x=25:l.includes(o[o.length-1])?g.x=150:k.includes(o[o.length-1])?g.x=275:f.includes(o[o.length-1])?g.x=400:w.includes(o[o.length-1])?g.x=525:y.includes(o[o.length-1])?g.x=650:v.includes(o[o.length-1])&&(g.x=775)}d.src="/src/images/Player.png",window.addEventListener("keydown",(function(e){o.push(e.key)}));var u=["a","h","o","v"],l=["b","i","p","w"],k=["c","j","q","x"],f=["d","k","r","y"],w=["e","l","s","z"],y=["f","m","t"],v=["g","n","u"],P=["/src/images/pancake-A.png","/src/images/pancake-H.png","/src/images/pancake-O.png","/src/images/pancake-V.png"],b=["/src/images/pancake-B.png","/src/images/pancake-I.png","/src/images/pancake-P.png","/src/images/pancake-W.png"],M=["/src/images/pancake-C.png","/src/images/pancake-J.png","/src/images/pancake-Q.png","/src/images/pancake-X.png"],x=["/src/images/pancake-D.png","/src/images/pancake-K.png","/src/images/pancake-R.png","/src/images/pancake-Y.png"],O=["/src/images/pancake-E.png","/src/images/pancake-L.png","/src/images/pancake-S.png","/src/images/pancake-Z.png"],I=["/src/images/pancake-F.png","/src/images/pancake-M.png","/src/images/pancake-T.png"],j=["/src/images/pancake-G.png","/src/images/pancake-N.png","/src/images/pancake-U.png"],B=function(){function e(t){a(this,e),this.x=t,this.y=0,this.img1=P[Math.floor(Math.random()*P.length)],this.img2=b[Math.floor(Math.random()*b.length)],this.img3=M[Math.floor(Math.random()*M.length)],this.img4=x[Math.floor(Math.random()*x.length)],this.img5=O[Math.floor(Math.random()*O.length)],this.img6=I[Math.floor(Math.random()*I.length)],this.img7=j[Math.floor(Math.random()*j.length)],this.width=200,this.height=200,this.speed=1,this.drawPancake=this.drawPancake.bind(this),this.makePancake()}return i(e,[{key:"drawPancake",value:function(e,t,a,n,i,h,r,c,g){s.drawImage(e,t,a,n,i,h,r,c,g)}},{key:"makePancake",value:function(){var e=new Image;e.src=this.img1;var t=new Image;t.src=this.img2;var a=new Image;a.src=this.img3;var n=new Image;n.src=this.img4;var i=new Image;i.src=this.img5;var h=new Image;h.src=this.img6;var s=new Image;s.src=this.img7;var r=[this.drawPancake(e,0,0,this.width,this.height,125,this.y-50,this.width,this.height),this.drawPancake(t,0,0,this.width,this.height,250,this.y-350,this.width,this.height),this.drawPancake(a,0,0,this.width,this.height,375,this.y-200,this.width,this.height),this.drawPancake(n,0,0,this.width,this.height,500,this.y-400,this.width,this.height),this.drawPancake(i,0,0,this.width,this.height,625,this.y-300,this.width,this.height),this.drawPancake(h,0,0,this.width,this.height,750,this.y-600,this.width,this.height),this.drawPancake(s,0,0,this.width,this.height,875,this.y-500,this.width,this.height)];return r[Math.floor(Math.random()*r.length)]}},{key:"movePancake",value:function(){this.y+=this.speed}}]),e}();new c}]);
//# sourceMappingURL=main.js.map