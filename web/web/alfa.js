var interv1;
var interv2;
var interv3;

window.onload = function(){
	var imag = document.getElementById("mito");
	imag.onclick = function(){
		var x = mito.getBoundingClientRect().left + window.scrollX;
		var i = 0;
		interv1 = setInterval(function(){miscaMito(imag,i++,x);},10);
	};
}

function getWidth() {
  return Math.max(
    //document.body.scrollWidth,
    //document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}


function miscaMito(mito, i, x){
	if (i < (getWidth()/2) - mito.width){
		mito.style.left = x + i +"px";
		//i++;
	}else{
		//mito.style.left = x-mito.width + "px";
		clearInterval(interv1);

		//i = x-mito.width - 1;
		setTimeout(function(){fct2(i,x,mito);},3000);
	}
}

function miscaMitoCont(mito, i, x){
	if (i < getWidth()){
		mito.style.left = x + i +"px";
		//i++;
	}else{
		mito.style.left = x-mito.width + "px";
		clearInterval(interv3);

		i = x-mito.width - 1;
		setInterval(function(){miscaMito2(mito,++i,x);},5);
	}
}

function fct2(i,x,mito){
	interv3 = setInterval(function(){miscaMitoCont(mito,++i,x);},5);
}

function fct(i,x,mito){
	interv2 = setInterval(function(){miscaMito2(mito,++i,x);},5);
}

function miscaMito2(img, i, x){
	if (i <= x){
		img.style.left = i +"px";
		//i++;
	}else{
		//mito.style.left = x + "px";
		clearInterval(interv2);
		
	}
}