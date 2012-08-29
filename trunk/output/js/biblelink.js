$.fn.bibleLinks = function(target){var _=$(this);
	var books = {
		��:"mt", ��:"mk", ��:"lk", ��:"jn",
		����:"ac",
		���:"jm", "1���":"1pe", "2���":"2pe", "1��":"1jn", "2��":"2jn", "2��":"2jn", ���:"jd",
		���:"ro", "1���":"1co", "2���":"2co", ���:"ga", ��:"ep", ���:"ph", ���:"co", "1���":"1th", "2���":"2th",
		"1���":"1ti", "2���":"2ti", ���:"ti", ���:"pm", ���:"he", ����:"re"
	};
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