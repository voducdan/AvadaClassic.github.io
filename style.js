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




},false)