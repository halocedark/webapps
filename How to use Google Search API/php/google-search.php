<?php  

	if ( isset($_POST['SearchQuery']) ) 
	{
		
		$searchQuery = $_POST['SearchQuery'];

		$URL = 'https://www.googleapis.com/customsearch/v1?q='.$searchQuery.'&cx=011898609541652801162:usneh7dhhh8&key=AIzaSyAxzAD3oDriI0v5tDaGv9mCqTTamqPmj5U';
		$URL = str_replace(' ', '', $URL );
		$searchResponse = file_get_contents( $URL );
		if ( $searchResponse ) 
		{
			
			echo $searchResponse;	

		} 
		else echo 'Error getting data!';

	}
