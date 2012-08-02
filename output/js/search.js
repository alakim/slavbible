(function($){
	function hideAd(){
		$("script[src*=yabs]").replaceWith("<br/>");
		$("#bn,#bt").html("").hide();
	}
	
	var first = true;
	
	function selectSpan(anchor, next){
		var loc = anchor.match(/(\d+)(:(\d+)(-(\d+$)|-((\d+):(\d+)))?)?/i);
		if(!loc) return;
		
		var chapterNr = parseInt(loc[1])-1;
		var hdr = $($("h2")[chapterNr]);
		var last;
		if(!loc[2]){
			hdr.addClass("selected")
				.before("<a name='"+anchor+"'></a>");
		}
		else{
			var verses = hdr.nextUntil("h2");
			if(loc[5]){
				var p1 = parseInt(loc[3])-1, p2 = parseInt(loc[5])-1;
				for(var i=p1; i<=p2; i++){
					$(verses[i]).addClass("selected");
					if(i==p2) last = verses[i];
				}
				$(verses[p1]).before("<a name='"+anchor+"'></a>");
			}
			else if(loc[6]){
				var p1 = parseInt(loc[3])-1, p2 = parseInt(loc[7])-1, p3 = parseInt(loc[8]);
				console.log(p1, p2, p3, verses.length);
				for(var i=p1; i<verses.length; i++){
					$(verses[i]).addClass("selected");
					if(i==verses.length-1) last = verses[i];
				}
				$(verses[p1]).before("<a name='"+anchor+"'></a>");
				
				var hdr2 = $($("h2")[p2]);
				var verses2 = hdr2.nextUntil("h2");
				for(var i=0; i<p3; i++){
					$(verses2[i]).addClass("selected");
					if(i==p3-1) last = verses[i];
				}
			}
			else if(loc[3]){
				var v = verses[parseInt(loc[3])-1];
				$(v).addClass("selected")
					.before("<a name='"+anchor+"'></a>");
				last = v;
			}
		}
		
		if(last && next)
			$(last).append(Html.span({"class":"nextRef"}, "&nbsp;&nbsp;&nbsp;", Html.a({href:"#"+next}, ">>")));
		
		if(first){
			document.location.hash=anchor;
			first = false;
		}
	}
	
	function gotoRef(){
		var anchor = document.location.hash.substring(1);
		var ancs = anchor.split(",");
		for(var i=0; i<ancs.length; i++){
			selectSpan(ancs[i], ancs[i+1]);
		}
	}
	
	function displayChapters(){with(Html){
		$("h2:eq(0)").before(div({"class":"toc"},
			apply($("h2"), function(h, i){
				$(h).before(a({name:"ch"+(i+1)}))
				return span({"class":"red"}, (i>0?" · ":""), a({href:"#ch"+(i+1)}, $(h).html().replace(/\s+/, "&nbsp;")));
			})
		));
	}}
	
	function getBbleBook(bk){
		return {
			jm:"ja", co:"col", pm:"ph"
		}[bk] || bk;
	}
	
	function setLinks(){
		var book = getBbleBook(document.location.pathname.match(/([^/]+)\.htm$/i)[1]);
		$.each($("h2"), function(i, h){
			var verses = $(h).nextUntil("h2").find(".red");
			$.each(verses, function(j, v){
				$(v).wrap("<a href='http://"+book+(i+1)+"."+(j+1)+".bble.ru' target='translate' title='перевод', style='text-decoration:none;'>");
			});
			$(h).wrap("<a href='http://"+book+(i+1)+".bble.ru' target='translate' title='перевод' style='text-decoration:none;'>");
		});
	}
	

	$(function(){
		hideAd();
		gotoRef();
		displayChapters();
		setLinks();
	});
})($);