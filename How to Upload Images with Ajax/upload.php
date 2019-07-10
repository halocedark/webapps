<?php  

	if ( isset($_POST['imageURL']) ) 
	{
		
		$message = '';
		$image = '';

		if ( filter_var($_POST['imageURL'], FILTER_VALIDATE_URL) ) // Check if it's HTTP/HTTPS (URL Format), you can delete this you want to use paths
		{
			
			$allowedExtensions = array( 'jpg', 'jpeg', 'png', 'gif' );
			$extension = explode('/', $_POST['imageURL']);
			$extension = end($extension);
			$extension = explode('.', $extension);
			$extension = end($extension);
			if ( in_array($extension, $allowedExtensions) ) 
			{
				
				$image_data = file_get_contents($_POST['imageURL']);
				$new_image_path = 'uploads/'.rand().'.'.$extension;
				file_put_contents($new_image_path, $image_data);
				$message = 'Image has been uploaded!';
				$image = '<img src="'.$new_image_path.'" class="img-fluid img-thumbnail" alt="">';

			}
			else
			{
				$message = 'File format not supported!';
			}

		}
		else
		{
			$message = 'Invalid URL Format!';
		}

		$output = array(
			'message' => $message,
			'image' => $image
		);

		echo json_encode($output);

	}