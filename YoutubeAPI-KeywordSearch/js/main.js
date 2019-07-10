$( document ).ready(function() {

	function _(element) {
	    var element = document.querySelector(element);
	    return element;
	}
	var SearchBtn 		= $('#searchQuery #search');
	var APIKey 			= 'AIzaSyAxzAD3oDriI0v5tDaGv9mCqTTamqPmj5U';
	var URL 			= 'https://www.googleapis.com/youtube/v3/search';

	// Events
	SearchBtn.on('click', getRequestedVideos);
	// 


	function getRequestedVideos() {
		var SearchKeywords	= $('#searchQuery input[type="text"]').val();
		var RequestedData = {
			key  : APIKey,
			maxResults : 25,
			part : 'snippet',
			q    : SearchKeywords,
			type : ''
		};
		$.getJSON(URL, RequestedData, function(data) {
			console.log(data);
			loopThroughVideos(data);
		});
	}

	function loopThroughVideos(data) {
		emptyElement($('#searchResults'));
		$.each(data.items, function(key, value) {
			var videoThumb     		  = value.snippet.thumbnails.high.url;
			var videoTitle 	   		  = strLimit(value.snippet.title, 50);
			var videoId 			  = value.id.videoId;	
			var videoMetaChannelTile  = value.snippet.channelTitle;
			var videoMetaDate  		  = strLimit(value.snippet.publishedAt, 10);
			var videoDesc  	   		  = strLimit(value.snippet.description, 200);
			var article = ' <article data-video-id="'+videoId+'"><div class="thumb"><img src="'+videoThumb+'" alt=""></div><div class="details"><h1><a href="https://www.youtube.com/watch?v='+videoId+'">'+videoTitle+'</a></h1><div class="vid-meta"><span class="channel-title">'+videoMetaChannelTile+'</span><span class="publish-date">'+videoMetaDate+'</span></div><p class="description">'+videoDesc+'</p></div></article> ';	
			postVideos(article);
		});
	}

	function postVideos(data) {
		$('#searchResults').append(data);
	}

	function emptyElement(element) {
		element.empty();
	}

	function strLimit(str, charCount) {
		str = str.substring(0, charCount)+'...';
		return str;
	}
	  

    
    


});