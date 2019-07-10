<!DOCTYPE html>
<html onmouseout="">
<head>
	<meta charset="utf-8">
	<link rel="icon" type="image/png" href="ico/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
	<meta name="viewport" content="width=device-width" />
	<title>Offline Page</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
</head>
<body>	

	
	<div class="image-uploader-wrapper">
		<div class="container">
			<form action="upload.php" method="POST" id="uploadImageForm" class="p-3 w-50 m-auto">
				<div class="form-group">
					<label for="imageURL">Image URL:</label>
					<input type="text" class="form-control" id="imageURL" placeholder="Enter image url here...">
				</div>
				<div class="form-group">
					<input type="submit" value="Upload" id="uploadImage" class="btn btn-info rounded-0">
				</div>
			</form>
		</div>
	</div>
	<div class="container">
		<div id="uploadedImage"></div>
	</div>

	<!--Javascript-->
	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>