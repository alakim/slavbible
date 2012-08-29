$.fn.bibleLinks = function(target){var _=$(this);
	var books = {
		Мф:"mt", Мк:"mk", Лк:"lk", Ин:"jn",
		Деян:"ac",
		Иак:"jm", "1Пет":"1pe", "2Пет":"2pe", "1Ин":"1jn", "2Ин":"2jn", "2Ин":"2jn", Иуд:"jd",
		Рим:"ro", "1Кор":"1co", "2Кор":"2co", Гал:"ga", Еф:"ep", Флп:"ph", Кол:"co", "1Фес":"1th", "2Фес":"2th",
		"1Тим":"1ti", "2Тим":"2ti", Тит:"ti", Фил:"pm", Евр:"he", Откр:"re"
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