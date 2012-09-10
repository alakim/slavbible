var Maps = (function($){
	var maps = [
		{section:"Ветхий Завет", maps:[
			{file:"12tribes.jpg", title:"Раздел земли между двенадцатью коленами"},
			{file:"Assyria.jpg", title:"Пророки ассирийского периода"},
			{file:"Canaan.jpg", title:"Израильтяне завоевывают Ханаан"},
			{file:"David.jpg", title:"Царства Давида и Соломона"},
			{file:"dividedKingdom.jpg", title:"Разделенное царство"},
			{file:"Exodus.jpg", title:"Исход"},
			{file:"Exodus2.jpg", title:"Исход из Египта и завоевание Ханаана"},
			{file:"IsraelJudea.jpg", title:"Царства Израиль и Иудея"},
			{file:"prophets.jpg", title:"Пророки"},
			{file:"unitedKingdom.jpg", title:"Объединенное Израильское царство"}
		]},
		{section:"Новый Завет", maps:[
			{file:"Palestine.jpg", title:"Палестина в эпоху Христа"},
			{file:"JesusChrist.jpg", title:"Жизнь и служение Иисуса Христа"},
			{file:"JesusInGalilee.jpg", title:"Иисус в Галилее"},
			{file:"apostles.jpg", title:"Проповедь апостолов"},
			{file:"PaulTravels.gif", title:"Путешествия апостола Павла"},
			{file:"PaulTravels.jpg", title:"Миссионерские путешествия апостола Павла"},
			{file:"PaulTravels2.jpg", title:"Путешествия Павла"},
			{file:"Pavel_trip.jpg", title:"Путешествия апостола Павла"}
		]},
		{section:"Иерусалим", maps:[
			{file:"JerusalemChrist.jpg", title:"Иерусалим в эпоху Христа"},
			{file:"JerusalemDavid.jpg", title:"Иерусалим во времена Давида и Соломона"},
			{file:"JerusalemHezekiah.jpg", title:"Иерусалим во времена Езекии"},
			{file:"JerusalemJesus.jpg", title:"Иерусалим во времена Иисуса Христа"},
			{file:"JerusalemNehemiah.jpg", title:"Иерусалим во времена Неемии"},
			{file:"JerusalemNow.jpg", title:"Иерусалим сегодня (центр)"}
		]},
		{section:"Древний мир", maps:[
			{file:"phys.jpg", title:"Физическая карта Святой Земли"},
			{file:"Bible.jpg", title:"Страны библейской эпохи"},
			{file:"Babylon.jpg", title:"Вавилонская империя на вершине своего могущества"},
			{file:"PalestinePhys.jpg", title:"Рельеф Палестины"},
			{file:"Judea.png", title:"Иудея"},
			{file:"AsiaMinor.jpg", title:"Малая Азия"},
			{file:"Rome.jpg", title:"Римская империя во времена Нового Завета"}
		]},
	];
	
	function buildLinks(){with(Html){
		$("#maps").html(div(
			a({name:"mapView"}),
			table({border:0}, tr(
				td({valign:"top"},
					h2("Карты"),
					apply(maps, function(s){
						return div({style:"margin:0 0 5px 20px;"},
							h3({style:"margin:25px 0 5px 0;"}, s.section),
							ul(
								apply(s.maps, function(m){
									return li(
										//a({href:"maps/"+m.file, target:"map"}, m.title)
										//span({"class":"action", onclick:callFunction("Maps.show", m.file)}, m.title)
										a({href:"#mapView", onclick:callFunction("Maps.show", m.file)}, m.title)
									);
								})
							)
						)
					})
				),
				td({valign:"top", id:"mapImg"})
			))
		)
		);
	}}
	
	$(buildLinks);
	return {
		show: function(file){
			$("#mapImg").html(
				Html.img({src:"maps/"+file})
			);
		}
	};
})($);