var bgcolor=document.querySelector(".index-body"),wrapperPromo=document.querySelector(".promo-slider-wrapper"),slidesPromo=wrapperPromo.querySelectorAll(".promo-slides"),radioList=document.createElement("ul");radioList.classList.add("radio-in-slider-list"),wrapperPromo.appendChild(radioList);for(var radioElement=[],radioButton=[],i=0;i<slidesPromo.length;i++)radioElement[i]=document.createElement("li"),radioElement[i].classList.add("radio-in-slider-item"),radioList.appendChild(radioElement[i]),radioButton[i]=document.createElement("button"),radioElement[i].appendChild(radioButton[i]);var radioButtonList=wrapperPromo.querySelectorAll(".radio-in-slider-item button");radioButtonList[0].classList.add("current-radio-slider-btn");var findCurrentSlideAndButtonPromo=function(){for(var o=0,r=0;r<slidesPromo.length;r++)slidesPromo[r].classList.contains("show-promo-slide")&&(o=r);return o},changeSlidePromo=function(t,d,s){t.addEventListener("click",function(o){o.preventDefault();var r=findCurrentSlideAndButtonPromo(),i="body-slider-color-"+r,e="body-slider-color-"+s;radioButtonList[r].classList.remove("current-radio-slider-btn"),slidesPromo[r].classList.remove("show-promo-slide"),bgcolor.classList.remove(i),d.classList.add("show-promo-slide"),t.classList.add("current-radio-slider-btn"),bgcolor.classList.add(e)})};for(i=0;i<slidesPromo.length;i++)changeSlidePromo(radioButtonList[i],slidesPromo[i],i);