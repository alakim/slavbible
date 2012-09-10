var Maps = (function($){
	var maps = [
		{section:"������ �����", maps:[
			{file:"12tribes.jpg", title:"������ ����� ����� ����������� ��������"},
			{file:"Assyria.jpg", title:"������� ������������ �������"},
			{file:"Canaan.jpg", title:"����������� ����������� ������"},
			{file:"David.jpg", title:"������� ������ � ��������"},
			{file:"dividedKingdom.jpg", title:"����������� �������"},
			{file:"Exodus.jpg", title:"�����"},
			{file:"Exodus2.jpg", title:"����� �� ������ � ���������� �������"},
			{file:"IsraelJudea.jpg", title:"������� ������� � �����"},
			{file:"prophets.jpg", title:"�������"},
			{file:"unitedKingdom.jpg", title:"������������ ����������� �������"}
		]},
		{section:"����� �����", maps:[
			{file:"Palestine.jpg", title:"��������� � ����� ������"},
			{file:"JesusChrist.jpg", title:"����� � �������� ������ ������"},
			{file:"JesusInGalilee.jpg", title:"����� � �������"},
			{file:"apostles.jpg", title:"��������� ���������"},
			{file:"PaulTravels.gif", title:"����������� �������� �����"},
			{file:"PaulTravels.jpg", title:"������������� ����������� �������� �����"},
			{file:"PaulTravels2.jpg", title:"����������� �����"},
			{file:"Pavel_trip.jpg", title:"����������� �������� �����"}
		]},
		{section:"���������", maps:[
			{file:"JerusalemChrist.jpg", title:"��������� � ����� ������"},
			{file:"JerusalemDavid.jpg", title:"��������� �� ������� ������ � ��������"},
			{file:"JerusalemHezekiah.jpg", title:"��������� �� ������� ������"},
			{file:"JerusalemJesus.jpg", title:"��������� �� ������� ������ ������"},
			{file:"JerusalemNehemiah.jpg", title:"��������� �� ������� ������"},
			{file:"JerusalemNow.jpg", title:"��������� ������� (�����)"}
		]},
		{section:"������� ���", maps:[
			{file:"phys.jpg", title:"���������� ����� ������ �����"},
			{file:"Bible.jpg", title:"������ ���������� �����"},
			{file:"Babylon.jpg", title:"����������� ������� �� ������� ������ ����������"},
			{file:"PalestinePhys.jpg", title:"������ ���������"},
			{file:"Judea.png", title:"�����"},
			{file:"AsiaMinor.jpg", title:"����� ����"},
			{file:"Rome.jpg", title:"������� ������� �� ������� ������ ������"}
		]},
	];
	
	function buildLinks(){with(Html){
		$("#maps").html(div(
			a({name:"mapView"}),
			table({border:0}, tr(
				td({valign:"top"},
					h2("�����"),
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