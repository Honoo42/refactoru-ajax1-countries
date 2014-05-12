$(function() {
	console.log('AJAJ Request sent...')
	$('.container').on('click','.country-load',function(){
		$.get('/countries',function(data){
			var list = $('<ul>');
			var listItems = data.map(function(data){
				return $('<li class="country">' + data.name +'</li>')
			});
			list.append(listItems);
			$('.container').append(list);
			console.log( data);
		});
	});
});