    //回到顶部
    function goTop(){
        $('html,body').animate({'scrollTop':0},900);
    }
    /*将轮播图从服务器请求过来*/
    $(function(){
        $.ajax({
            url:"http://127.0.0.1:8888/index",
            type:'get',
            dataType:"json",
            success:function(result){
                var html="";
                    html+=`
                    <li>
                        <a href="list-one.html">
                            <img src="${result[0].img}">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="${result[1].img}">
                        </a>
                    </li>
                    <li>
                        <a href="list-two.html">
                            <img src="${result[2].img}">
                        </a>
                    </li>
                    <li>
                        <a href="list-three.html">
                            <img src="${result[3].img}">
                        </a>
                    </li>
                    <li>
                        <a href="list-four.html">
                            <img src="${result[4].img}">
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="${result[0].img}">
                        </a>
                    </li>
                    `;
                    $('#ul-imgs').html(html);
                // JavaScript Document
                $(document).ready(function(){				
                        function G(s){
                return document.getElementById(s);
            }
            function getStyle(obj, attr){
                if(obj.currentStyle){
                    return obj.currentStyle[attr];
                }else{
                    return getComputedStyle(obj, false)[attr];
                }
            }
            function Animate(obj, json){
                if(obj.timer){
                    clearInterval(obj.timer);
                }
                obj.timer = setInterval(function(){
                    for(var attr in json){
                        var iCur = parseInt(getStyle(obj, attr));
                        iCur = iCur ? iCur : 0;
                        var iSpeed = (json[attr] - iCur) / 5;
                        iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                        obj.style[attr] = iCur + iSpeed + 'px';
                        if(iCur == json[attr]){
                            clearInterval(obj.timer);
                        }
                    }
                },30);
            }
            var oPic = G("picBox");
            var oList = G("listBox");
            var oPrev = G("prev");
            var oNext = G("next");
            var oPrevTop = G("prevTop");
            var oNextTop = G("nextTop");
            var oPicLi = oPic.getElementsByTagName("li");
            var oListLi = oList.getElementsByTagName("li");
            var len1 = oPicLi.length;
            var len2 = oListLi.length;
            var oPicUl = oPic.getElementsByTagName("ul")[0];
            var oListUl = oList.getElementsByTagName("ul")[0];
            var w1 = oPicLi[0].offsetWidth;
            var w2 = oListLi[0].offsetWidth;
            oPicUl.style.width = w1 * len1 + "px";
            oListUl.style.width = w2 * len2 + "px";
            var index = 0;
            var num = 5;
            var num2 = Math.ceil(num / 2);
            function Change(){
                Animate(oPicUl, {left: - index * w1});
                if(index < num2){
                    Animate(oListUl, {left: 0});
                }else if(index + num2 <= len2){
                    Animate(oListUl, {left: - (index - num2 + 1) * w2});
                }else{
                    Animate(oListUl, {left: - (len2 - num) * w2});
                }
                for (var i = 0; i < len2; i++) {
                    oListLi[i].className = "";
                    if(i == index){
                        oListLi[i].className = "on";
                    }
                }
            }
            oNextTop.onclick = oNext.onclick = function(){
                
                index ++;
                index = index == len2 ? 0 : index;
                Change();
            }
            oPrev.onmouseover = oNext.onmouseover = oPrevTop.onmouseover = oNextTop.onmouseover = function(){
                clearInterval(timer);
                }
            oPrev.onmouseout = oNext.onmouseout = oPrevTop.onmouseout = oNextTop.onmouseout = function(){
                timer=setInterval(autoPlay,3000);
                }
            oPrevTop.onclick = oPrev.onclick = function(){

                index --;
                index = index == -1 ? len2 -1 : index;
                Change();
            }
            var timer=null;
            timer=setInterval(autoPlay,3000);
            function autoPlay(){
                index ++;
                    index = index == len2 ? 0 : index;
                    Change();
                }
            for (var i = 0; i < len2; i++) {
                oListLi[i].index = i;
                oListLi[i].onclick = function(){
                    index = this.index;
                    Change();
                }
            }
        });
                var html="";
                for(var i=5;i<=15;i++){
                    html+=`<li><a href="javascript:;"><img src="${result[i].img}" alt=""></a></li>`
                }
                $('#cf').html(html);
                /*小图*/
                var html="";
                for(var i=14;i<=22;i++){
                    html+=`
                    <li class="on">
                    <i class="arr2"></i>
                    <img src="${result[i].img}" alt=""></li>
                    `;
                }
                $('#box').html(html);
                /*3D图*/
            //     var html="";
            //     for(var i=23;i<=28;i++){
            //         html+=`<a href="javascript:;" link="javascript:;">
            //         <img src="${result[i].img}">
            //     </a>`;
            //     }
            //     $('.dg-wrapper').html(html);
            }
        })
    })












//第二部分轮播
    // (function(){
    //     var i=0;
    //     var LIWIDTH=1370;
    //     var DURATION=500;
    //     var LICOUNT=9;
    //     var ulImgs=document.getElementById("ul-img");
    //     var lis=ulImgs.children;
    //     function moveTo(to){
    //         if(to==undefined){
    //             to=i+1;
    //         }
    //         if(i==0){
    //             if(to>i){
    //                 ulImgs.className="transition";
    //             }else{
    //                 ulImgs.className="";
    //                 ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
    //                 setTimeout(function(){
    //                 moveTo(LICOUNT-1);
    //                 },100);
    //                 return;
    //             }
    //         }
    //         i=to;
    //         ulImgs.style.marginLeft=-i*LIWIDTH+"px";
    //         for(var li of lis){
    //             li.className=""
    //         }
    //         if(i==LICOUNT){
    //             i=0;
    //             setTimeout(function(){
    //                 ulImgs.className="";
    //                 ulImgs.style.marginLeft=0;
    //             },DURATION)
    //         }
    //     }
    //     var btnLeft=document.getElementById("two-left");
    //     var btnRight=document.getElementById("two-right");
    //     // var btnLeft=document.getElementsByClassName("click-one")[0];
    //     // var btnRight=document.getElementsByClassName("click-two")[0];
    //     var canClick=true;
    //     btnRight.onclick=function(){
    //         move(1)
    //     }
    //     function move(n){
    //         if(canClick){
    //         moveTo(i+n);
    //         canClick=false;
    //         setTimeout(function(){
    //             canClick=true;
    //         },DURATION+100);
    //         }
    //     }
    //     btnLeft.onclick=function(){
    //         move(-1);
    //     }
	// 	var interval=2000;
    //     var timer=setInterval(function(){
    //         moveTo()
    //     },interval);
    //     var div=document.getElementById("one");
    //     div.onmouseover=function(){
    //         clearInterval(timer);
    //     }
    //     div.onmouseout=function(){
    //         timer=setInterval(function(){
    //         moveTo()
    //         },interval);
    //     }
    // })();
    // //第二部分的小轮播
    // (function(){
    //     var i=0;
    //     var left=340;
    //     var DURATION=500;
    //     var LICOUNT=9;
    //     var ulImgs=document.getElementById("two-center");
    //     var lis=ulImgs.firstElementChild;
    //     console.log(ulImgs)
    //     function moveTo(to){
    //         if(to==undefined){
    //             to=i+1;
    //         }
    //         if(i==0){
    //             if(to>i){
    //                 lis.className="transition";
    //             }else{
    //                 lis.className="";
    //                 lis.style.marginLeft=-left*LICOUNT+"px";
    //                 setTimeout(function(){
    //                 moveTo(LICOUNT-1);
    //                 },100);
    //                 return;
    //             }
    //         }
    //         i=to;
    //         lis.style.marginLeft=-i*left+"px";
    //         if(i==LICOUNT){
    //             i=0;
    //             setTimeout(function(){
    //                 lis.className="";
    //                 lis.style.marginLeft=0;
    //             },DURATION)
    //         } 
    //     }
	// 	var interval=2000;
    //     var timer=setInterval(function(){
    //         moveTo()
    //     },interval);
    //     var div=document.getElementById("two");
    //     div.onmouseover=function(){
    //         clearInterval(timer);
    //     }
    //     div.onmouseout=function(){
    //         timer=setInterval(function(){
    //         moveTo()
    //         },interval);
    //     }
    // })();
    //3d图
    // window.addEventListener('load', function () {
    //     var carousels = document.querySelectorAll('.carousel');
    //     for (var i = 0; i < carousels.length; i++) {
    //         carousel(carousels[i]);
    //     }
    // });  
    // function carousel(root) {
    //     var figure = root.querySelector('figure'),
    //         nav = root.querySelector('nav'),
    //         images = figure.children,
    //         n = images.length,
    //         gap = root.dataset.gap || 0,
    //         bfc = 'bfc' in root.dataset,
    //         theta = 2 * Math.PI / n,
    //         currImage = 0;
    //     setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    //     window.addEventListener('resize', function () {
    //         setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    //     });
    //     setupNavigation();
    //     function setupCarousel(n, s) {
    //         var apothem = s / (2 * Math.tan(Math.PI / n));
    //         figure.style.transformOrigin = '50% 50% ' + -apothem + 'px';
    //         for (var i = 0; i < n; i++) {
    //             images[i].style.padding = gap + 'px';
    //         }for (i = 1; i < n; i++) {
    //             images[i].style.transformOrigin = '50% 50% ' + -apothem + 'px';
    //             images[i].style.transform = 'rotateY(' + i * theta + 'rad)';
    //         }
    //         if (bfc) for (i = 0; i < n; i++) {
    //             images[i].style.backfaceVisibility = 'hidden';
    //         }rotateCarousel(currImage);
    //     }
    //     function setupNavigation() {
    //         nav.addEventListener('click', onClick, true);
    //         function onClick(e) {
    //             e.stopPropagation();
    //             var t = e.target;
    //             if (t.tagName.toUpperCase() != 'IMG') return;

    //             if (t.classList.contains('nav-next')) {
    //                 currImage++;
    //             } else {
    //                 currImage--;
    //             }
    //             rotateCarousel(currImage);
    //         }
    //     }
    //     function rotateCarousel(imageIndex) {
    //         figure.style.transform = 'rotateY(' + imageIndex * -theta + 'rad)';
    //     }
    // }
