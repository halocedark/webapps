$( document ).ready(function() 
{

	'use strict';
	
	var convertBTN = $('#convertBTN');

	convertBTN.on('click', imageToPNG);

	function imageToJPEG()
	{

		var src  = $('#imageURL').val();
		var img  = document.createElement('img');

		img.src = src;
		img.onload = function(e)
		{

			var target = e.target;
			var reader = new FileReader();
			var canvas = document.createElement('canvas');
			var ctx    = canvas.getContext('2d');

			canvas.width  = target.width;
			canvas.height = target.height;
			ctx.drawImage(target, 0, 0);
			canvas.toBlob(function(blob)
			{
				reader.readAsDataURL(blob);
			}, 'image/jpeg');

			reader.onload = function()
			{

				$('#convertedImages').append('<img src="'+reader.result+'" alt="">');

			}

		}
		
	}

	function imageToPNG()
	{

		var src  = $('#imageURL').val();
		var img  = document.createElement('img');

		img.src = src;
		img.onload = function(e)
		{

			var target = e.target;
			var reader = new FileReader();
			var canvas = document.createElement('canvas');
			var ctx    = canvas.getContext('2d');

			canvas.width  = target.width;
			canvas.height = target.height;
			ctx.drawImage(target, 0, 0);
			canvas.toBlob(function(blob)
			{
				reader.readAsDataURL(blob);
			}, 'image/png');

			reader.onload = function()
			{

				$('#convertedImages').append('<img src="'+reader.result+'" alt="">');

			}

		}
		
	}



});