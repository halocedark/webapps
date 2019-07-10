$( document ).ready(function() 
{

	'use strict';

	var uploadImageForm = $('.image-uploader-wrapper #uploadImageForm');
	uploadImageForm.on('submit', uploadImageFile);

	function uploadImageFile(e)
	{

		e.preventDefault();
		var $this = $(this);
		var imageURL = $this.find('#imageURL').val();
		if ( imageURL === '' )
		{
			alert('Please enter image url!');
			return false;
		}

		$.ajax({

			url: $this.attr('action'),
			type: 'POST',
			dataType: 'JSON',
			data: {
				imageURL: imageURL
			},
			beforeSend: function()
			{
				$this.find('#uploadImage').attr('disabled', 'disabled').val('Uploading...');
			},
			success: function(response)
			{
				$('#uploadedImage').html(response.image);
				$this.find('#uploadImage').attr('disabled', false).val('Upload');
				$this.find('#imageURL').val('');
				console.log(response.message);
				console.log(response);
			}

		});

	}


});