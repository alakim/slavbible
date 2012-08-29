$.fn.bibleLinks = function(target){var _=$(this);
	var books = {ÃÙ:"mt", ÃÍ:"mk", ÀÍ:"lk", »Ì:"jn"};
	var re = [];
	for(var k in books) re.push(k);
	re = re.join("|");
	re = "("+re+")\.((\\d+):(\\d+)(-(\\d+))?)";
	re = new RegExp(re, "ig");
	
	$.each(_, function(i, el){el = $(el);
		el.html(el.html().replace(re, function(mt, bk, loc){
			return Html.a(
				{href:books[bk]+".htm#"+loc}, 
				target?{target:target}:null,
				mt
			);
		}));
	});
};