$( document ).ready(function() 
{

	var GoogleSearchForm = $('#GoogleSearchForm');

	GoogleSearchForm.on('submit', searchGoogle);

	function searchGoogle(e)
	{

		e.preventDefault();

		data = {
			SearchQuery : $('#GoogleSearchForm #SearchQuery').val()
		};

		$.ajax({
			url: '../php/google-search.php',
			type: 'post',
			data,
			success: function(response)
			{
				response = JSON.parse(response);
				console.log(response);
				displaySearchResults(response);
			}
		});

	}

	function displaySearchResults($responseData)
	{

		$('#searchResults').empty();
		$.each( $responseData.items, function(key, value) 
		{
			
			var title = value.title;
			$('#searchResults').append('<p class="items">' +title+ '</p>').fadeIn(500);

		});	

	}


});