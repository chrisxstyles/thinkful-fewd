$(document).ready(function(){
	$('#search-form').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		console.log(searchTerm);
		getRequest(searchTerm);
	});
});



function getRequest(searchTerm){
	var params = {
		part: 'snippet',
		key: '',
		q: searchTerm,
		maxResults: 20
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, function(data){
		console.log(data);
		showResults(data);
	});
};

function showResults(results){
	$('#list').empty();
	$.each(results.items, function(index, value){
		//console.log(value.snippet.thumbnails.default.url);
		var item = value.snippet.title;
		var vidUrl = '<a href="http://youtube.com/watch?v=' +value.id.videoId +'">';
		var thumbnailUrl = value.snippet.thumbnails.medium.url;
		var imgSrc = '<img src="' + thumbnailUrl + '">';
		$('#list').append('<li>' + item + '<br/>' +vidUrl +imgSrc + '</li>');
	});
};