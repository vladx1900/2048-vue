webpackJsonp([0],{"72yd":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("7+uW"),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row",attrs:{id:"header"}},[t._m(0),t._v(" "),i("div",{staticClass:" col-lg-2 text-center score-panel"},[i("p",[t._v("Best score")]),t._v(" "),i("h4",[t._v(t._s(t.score))])]),t._v(" "),i("div",{staticClass:" col-lg-2 text-center score-panel"},[i("p",[t._v("Score")]),t._v(" "),i("h4",[t._v(t._s(t.score))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:" col-lg-6 text-center shadow"},[e("span",{attrs:{"data-shadow-text":"Text-Shadow"}},[this._v("2048")])])}]};var a=i("VU/8")({props:["score"]},n,!1,function(t){i("72yd")},"data-v-010dbd1a",null).exports,s={props:["matrix","score"],data:function(){return{row:"",column:""}},methods:{newMatrix:function(){var t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];for(this.getRandomPairData(),t[this.row][this.column]=this.getRandomTwoOrFour(),this.getRandomPairData();0!==t[this.row][this.column];)this.getRandomPairData();t[this.row][this.column]=this.getRandomTwoOrFour(),this.matrix=t,this.score=0,this.$emit("matrixChanged",this.matrix),this.$emit("scoreChanged",this.score)},getRandomPairData:function(){this.row=Math.ceil(4*Math.random())-1,this.column=Math.ceil(4*Math.random())-1},getRandomTwoOrFour:function(){return 2*Math.ceil(2*Math.random())}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[this._m(0),this._v(" "),e("div",{staticClass:"col-xs-3 text-center"},[e("button",{staticClass:"btn btn-primary",on:{click:this.newMatrix}},[this._v("New game")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xs-7 text-right"},[e("h4",[this._v("Let's double it! "),e("b",[this._v("2048")]),this._v(" challenge!")])])}]};var c=i("VU/8")(s,o,!1,function(t){i("VG/m")},null,null).exports,h={data:function(){return{oneCellHeight:"",textSize:""}},props:["value","direction"],methods:{changeCellHeight:function(){this.oneCellHeight=this.$refs.cellHeight.clientHeight,this.textSize=35*this.oneCellHeight/100}},mounted:function(){this.$nextTick(function(){this.changeCellHeight(),window.addEventListener("resize",this.changeCellHeight)})}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"cellHeight",staticClass:"one-cell",class:this.value<=2048?"tile-"+this.value:"tile-super"},[e("p",{staticClass:"one-cell-number",style:{lineHeight:this.oneCellHeight+"px",fontSize:this.textSize+"px"}},[this._v(this._s(this.value))])])},staticRenderFns:[]};var d={props:["matrix","direction"],data:function(){return{windowHeight:0}},methods:{getWindowHeight:function(t){this.windowHeight=this.$refs.board.clientWidth,this.$refs.board.setAttribute("style","height: "+this.windowHeight+"px")}},computed:{},mounted:function(){this.$nextTick(function(){this.$refs.board.setAttribute("style","height: "+this.$refs.board.clientWidth+"px"),window.addEventListener("resize",this.getWindowHeight),this.getWindowHeight()})},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowHeight)},components:{appCell:i("VU/8")(h,l,!1,function(t){i("kGGi")},null,null).exports}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[i("div",{ref:"board",attrs:{id:"board"}},t._l(t.matrix,function(e){return i("div",{staticClass:" grid-row"},t._l(e,function(e){return i("div",{staticClass:" grid-cell"},[0!==e?i("app-cell",{attrs:{value:e,direction:t.direction}}):t._e()],1)}))}))])},staticRenderFns:[]};var f={name:"App",data:function(){return{matrix:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],row:"",column:"",score:0,winner:0,direction:""}},computed:{},methods:{addNewCell:function(t){switch(t.key){case"ArrowUp":this.arrowUpCase(),this.direction=t.key;break;case"ArrowDown":this.arrowDownCase(),this.direction=t.key;break;case"ArrowRight":this.arrowRightCase(),this.direction=t.key;break;case"ArrowLeft":this.arrowLeftCase(),this.direction=t.key;break;default:return}this.winner?this.checkWin():this.checkLose()},newCellNeeded:function(){var t=this.buildIntermediarMatrix();for(this.getRandomPairData();0!==t[this.row][this.column]&&!0!==this.fullMatrix();)this.getRandomPairData();t[this.row][this.column]=this.getRandomTwoOrFour(),this.$nextTick(function(){this.matrix=t})},getRandomPairData:function(){this.row=Math.ceil(4*Math.random())-1,this.column=Math.ceil(4*Math.random())-1},getRandomTwoOrFour:function(){return Math.random()<.9?2:4},fullMatrix:function(){var t=!0;t:for(var e=0;e<4;e++)for(var i=0;i<4;i++)if(0===this.matrix[e][i]){t=!1;break t}return t},canMakeMoves:function(){var t=!1;t:for(var e=0;e<this.matrix.length;e++)for(var i=0;i<this.matrix.length;i++){if(e-1>=0&&this.matrix[e][i]===this.matrix[e-1][i]){t=!0;break t}if(e+1<4&&this.matrix[e][i]===this.matrix[e+1][i]){t=!0;break t}if(i+1<4&&this.matrix[e][i]===this.matrix[e][i+1]){t=!0;break t}if(i-1>=0&&this.matrix[e][i]===this.matrix[e][i-1]){t=!0;break t}}return t},checkWin:function(){t:for(var t=0;t<this.matrix.length;t++)for(var e=0;e<this.matrix.length;e++)if(2048===this.matrix[t][e]){swal("Congrats! You won!","You can celebrate or Continue!"),this.winner=1;break t}},checkLose:function(){this.fullMatrix()&&!this.canMakeMoves()&&swal("The numbers won the battle!","Give it another try, starting a new game!")},buildIntermediarMatrix:function(){for(var t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],e=0;e<t.length;e++)for(var i=0;i<t.length;i++)t[e][i]=this.matrix[e][i];return t},calculateScore:function(t){this.score+=t},arrowUpCase:function(){var t,e,i,r,n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],a=this.buildIntermediarMatrix();for(r=0;r<4;r++)for(i=1;i<4;i++)if(0!==a[i][r]){for(e=i-1;e>=0&&0===a[e][r];)a[e][r]=a[e+1][r],a[e+1][r]=0,e--,t=1;e>=0&&a[e][r]===a[e+1][r]&&1!==n[e][r]&&(a[e][r]=a[e][r]+a[e+1][r],a[e+1][r]=0,n[e][r]=1,t=1,this.calculateScore(a[e][r]))}this.matrix=a,1===t&&this.newCellNeeded()},arrowDownCase:function(){var t,e,i,r,n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],a=this.buildIntermediarMatrix();for(r=0;r<4;r++)for(i=2;i>=0;i--)if(0!==a[i][r]){for(e=i+1;e<=3&&0===a[e][r];)a[e][r]=a[e-1][r],a[e-1][r]=0,e++,t=1;e<=3&&a[e][r]===a[e-1][r]&&1!==n[e][r]&&(a[e][r]=a[e][r]+a[e-1][r],a[e-1][r]=0,n[e][r]=1,t=1,this.calculateScore(a[e][r]))}this.matrix=a,1===t&&this.newCellNeeded()},arrowRightCase:function(){var t,e,i,r,n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],a=this.buildIntermediarMatrix();for(i=0;i<4;i++)for(r=2;r>=0;r--)if(0!==a[i][r]){for(e=r+1;e<=3&&0===a[i][e];)a[i][e]=a[i][e-1],a[i][e-1]=0,e++,t=1;e<=3&&a[i][e]===a[i][e-1]&&1!==n[i][e]&&(a[i][e]=a[i][e]+a[i][e-1],a[i][e-1]=0,n[i][e]=1,t=1,this.calculateScore(a[i][e]))}this.matrix=a,1===t&&this.newCellNeeded()},arrowLeftCase:function(){var t,e,i,r,n=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],a=this.buildIntermediarMatrix();for(i=0;i<4;i++)for(r=1;r<=3;r++)if(0!==a[i][r]){for(e=r-1;e>=0&&0===a[i][e];)a[i][e]=a[i][e+1],a[i][e+1]=0,e--,t=1;e>=0&&a[i][e]===a[i][e+1]&&1!==n[i][e]&&(a[i][e]=a[i][e]+a[i][e+1],a[i][e+1]=0,n[i][e]=1,t=1,this.calculateScore(a[i][e]))}this.matrix=a,1===t&&this.newCellNeeded()}},components:{appHeader:a,appNewGame:c,appGameBoard:i("VU/8")(d,u,!1,function(t){i("rwoi")},null,null).exports},mounted:function(){this.$refs.newGame.newMatrix()},created:function(){window.addEventListener("keyup",this.addNewCell)}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"app"}},[i("app-header",{attrs:{score:t.score},on:{scoreChanged:function(e){t.score=e}}}),t._v(" "),i("app-new-game",{ref:"newGame",attrs:{matrix:t.matrix,score:t.score},on:{matrixChanged:function(e){t.matrix=e},scoreChanged:function(e){t.score=e}}}),t._v(" "),i("app-game-board",{attrs:{matrix:t.matrix,direction:t.direction},on:{matrixChanged:function(e){t.matrix=e}}})],1)},staticRenderFns:[]};var w=i("VU/8")(f,m,!1,function(t){i("USjb")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:w},template:"<App/>"})},USjb:function(t,e){},"VG/m":function(t,e){},kGGi:function(t,e){},rwoi:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.582418f0356aec8d99a3.js.map