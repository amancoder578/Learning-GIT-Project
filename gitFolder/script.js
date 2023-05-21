var menu=function(){
	var t=15,z=50,s=6,a;
	function dd(n){this.n=n; this.h=[]; this.c=[]}
	dd.prototype.init=function(p,c){
		a=c; var w=document.getElementById(p), s=w.getElementsByTagName('ul'), l=s.length, i=0;
		for(i;i<l;i++){
			var h=s[i].parentNode; this.h[i]=h; this.c[i]=s[i];
			h.onmouseover=new Function(this.n+'.st('+i+',true)');
			h.onmouseout=new Function(this.n+'.st('+i+')');
		}
	}
	dd.prototype.st=function(x,f){
		var c=this.c[x], h=this.h[x], p=h.getElementsByTagName('a')[0];
		clearInterval(c.t); c.style.overflow='hidden';
		if(f){
			p.className+=' '+a;
			if(!c.mh){c.style.display='block'; c.style.height=''; c.mh=c.offsetHeight; c.style.height=0}
			if(c.mh==c.offsetHeight){c.style.overflow='visible'}
			else{c.style.zIndex=z; z++; c.t=setInterval(function(){sl(c,1)},t)}
		}else{p.className=p.className.replace(a,''); c.t=setInterval(function(){sl(c,-1)},t)}
	}
	function sl(c,f){
		var h=c.offsetHeight;
		if((h<=0&&f!=1)||(h>=c.mh&&f==1)){
			if(f==1){c.style.filter=''; c.style.opacity=1; c.style.overflow='visible'}
			clearInterval(c.t); return
		}
		var d=(f==1)?Math.ceil((c.mh-h)/s):Math.ceil(h/s), o=h/c.mh;
		c.style.opacity=o; c.style.filter='alpha(opacity='+(o*100)+')';
		c.style.height=h+(d*f)+'px'
	}
	return{dd:dd}
}();

/* ****************For login page***********************/
$(document).ready(function() {
	$('select').change(function() {
		var optionSelected = $(this).find("option:selected");
		var valueSelected = optionSelected.val();
		window.location.href = valueSelected
	});
});

var strings = new Array();
/* strings['recaptcha.instructions_visual'] = "<spring:message code='recaptcha.instructions_visual' javaScriptEscape='true'/>"; */
strings['recaptcha.instructions_audio'] = "<spring:message code='recaptcha.instructions_audio' javaScriptEscape='true'/>";
strings['recaptcha.play_again'] = "<spring:message code='recaptcha.play_again' javaScriptEscape='true'/>";
strings['recaptcha.cant_hear_this'] = "<spring:message code='recaptcha.cant_hear_this' javaScriptEscape='true'/>";
strings['recaptcha.visual_challenge'] = "<spring:message code='recaptcha.visual_challenge' javaScriptEscape='true'/>";
strings['recaptcha.audio_challenge'] = "<spring:message code='recaptcha.audio_challenge' javaScriptEscape='true'/>";
strings['recaptcha.refresh_btn'] = "<spring:message code='recaptcha.refresh_btn' javaScriptEscape='true'/>";
strings['recaptcha.help_btn'] = "<spring:message code='recaptcha.help_btn' javaScriptEscape='true'/>";
strings['recaptcha.incorrect_try_again'] = "<spring:message code='recaptcha.incorrect_try_again' javaScriptEscape='true'/>";
strings['recaptcha_privacy'] = "";
strings['recaptcha.response_field'] = "<spring:message code='recaptcha.response_field' javaScriptEscape='true'/>";

var RecaptchaOptions = {
	custom_translations : {
		/* instructions_visual : strings['recaptcha.instructions_visual'], */
		instructions_audio : strings['recaptcha.instructions_audio'],
		play_again : strings['recaptcha.play_again'],
		cant_hear_this : strings['recaptcha.cant_hear_this'],
		visual_challenge : strings['recaptcha.visual_challenge'],
		audio_challenge : strings['recaptcha.audio_challenge'],
		refresh_btn : strings['recaptcha.refresh_btn'],
		help_btn : strings['recaptcha.help_btn'],
		incorrect_try_again : strings['recaptcha.incorrect_try_again'],
		recaptcha_privacy : strings['recaptcha_privacy'],
		recaptcha_response_field : strings['recaptcha.response_field'],

	},
	theme : 'clean'
};
/*function onChangeLang() {
	var value = document.loginForm.langId.options[document.loginForm.langId.selectedIndex].value;
	window.location.href = value;
}*/


/* ****************end for login page***********************/