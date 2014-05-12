$(function() {
	console.log('AJAJ Request sent...')
	$('.container').on('click','.country-load',function(){
		$('.container').empty();
		$.get('/countries',function(data){
			var list = $('<ul>');
			var listItems = data.map(function(data){
				return $('<li class="country">' + data.name +'</li>')
			});
			list.append(listItems);
			$('.container').append(list);
		});
	});

	$('.search-field').on('click','.search',function(){
		var query = $('.search-query').val();
		// console.log(data);
		$.post('/search',{ 'data':query},function() {
			var searchField = $('.search-query').val();
			data = searchField;
		});
		// var sortedCountries = function(){
			$.get('/countries',function(data){
				var countrySearch = $('<ul>');
				var countryNames = data.map(function(data){
					// console.log("Above Return")
					return $('<li class="country">' + data.name +'</li>')
				});
				// console.log("below countryNames")
				// console.log(data[0].name);
				// var filterCountries = function(data,querys){
					var validCountries = [];
					// console.log(data[0].name);
					for (var i = 0; i < data.length; i++) {
						console.log(data.name)
						if (query === data[i].name) {

							validCountries.push(data[i].name)
						}
						else(
							"This is not an actual country")
					}
					console.log(validCountries)
				
				// }
				
				$('.container').append('<li>Your Searched for Country is: '+validCountries+'</li>');
				
			})
		// }
		// console.log(sortedCountries());
		

	});
});

