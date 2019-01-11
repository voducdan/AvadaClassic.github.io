document.addEventListener('DOMContentLoaded',function(){
    var headermenu = document.querySelectorAll('.headermenu li a');
    for(x of headermenu){
        x.onmouseover = function(){
            this.classList.add('active');
        };
    }
    for(x of headermenu){
        x.onmouseout = function(){
            this.classList.remove('active');
        };
    }
    var hidedheder = document.querySelector('#hidedheder');
    var turnbtn = document.querySelector('.turnbtn');
    var number=1;

    turnbtn.onclick = function(){
        number++;
        this.classList.toggle('onbtn');
        this.classList.remove('turn');
        if(number%2==0){
            this.classList.remove('turnbntmoveup');
            this.classList.add('turnbntmovedown');
            hidedheader.classList.add('appearhidedheader');
            hidedheader.classList.remove('disappearhidedheader');
        }
        else{
            this.classList.add('turnbntmoveup');
            this.classList.remove('turnbntmovedown');
            hidedheader.classList.add('disappearhidedheader');
            hidedheader.classList.remove('appearhidedheader');

        }
    }

    var custombtn = document.querySelector('.custombtn');
    var buyavada  = document.querySelector('.buy-avada');
    var customavada = 1;
    custombtn.onclick = function(){
        customavada++;
        this.classList.remove('custombtnactive');
        buyavada.classList.remove('buyavadaactive');
        if(customavada%2===0){
            this.classList.add('custombtnappear');
            buyavada.classList.add('avadaappear');
            this.classList.remove('custombtndisappear');
            buyavada.classList.remove('avadadisappear');
        }
        else{
            this.classList.remove('custombtnappear');
            buyavada.classList.remove('avadaappear');
            this.classList.add('custombtndisappear');
            buyavada.classList.add('avadadisappear');
        }
    };
    var imgScale = document.querySelectorAll(".box .content span img");
    imgScale.forEach(function(x){
        x.onmouseover = function(){
            this.classList.add('imgOut');
            this.classList.remove('imgIn');
        }
        x.onmouseout = function(){
            this.classList.add('imgIn');
            this.classList.remove('imgOut');
        }
    })
    var additionalFeature = document.querySelector('.btn-view-addition-features');
    var countNumber = document.querySelector(".number-user");    

	function getYOffset(el){
		var elTop = 0;
		while(el.offsetParent){
	 		elTop += el.offsetTop;
	 		el = el.offsetParent;
	 	}
	 	return elTop;
	}
	function isElementOnScreen(el){
		var rect = el.getBoundingClientRect();
		console.log(rect.top,rect.top - window.innerHeight);
		if (rect.top>=0 &&(rect.top-window.innerHeight<=0))
	   	 return true;
		return false;
	}
	window.addEventListener('load',function(){
		var count = 0;
		var MAX = 400;
		if(isElementOnScreen(additionalFeature)){
			additionalFeature.classList.add('jump');
		}
		else {
			document.addEventListener('scroll',function(){
				if(isElementOnScreen(additionalFeature)){
					additionalFeature.classList.add('jump');
				}
			});
		}
		if(isElementOnScreen(countNumber)){
			var timer = setInterval(function(){
				if(count<=MAX){
					countNumber.innerHTML = count + ',000';
					count++;
				}
				else clearInterval(timer);
			},1);
		}
		else {
			document.addEventListener('scroll',function(){
				if(isElementOnScreen(countNumber)){
					var timer = setInterval(function(){
						if(count<=MAX){
							countNumber.innerHTML = count + ',000';
							count++;
						}
						else clearInterval(timer);
					},1);
				}
			});
		}
	});
  
},false)