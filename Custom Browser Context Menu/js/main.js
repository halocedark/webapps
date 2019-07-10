$( document ).ready(function() 
{


	var DOM = $(document);
	var CustomMenu = new CustomMenu();

	function CustomMenu()
	{

		this.CMStyle = ` <style id="CustomMenuStyleTag"> 
			.custommenu-wrapper
			{
				background: linear-gradient(to right top, #ffffff, #fcfcfc, #fafafa, #f7f7f7, #f5f5f5, #f3f3f3, #f1f1f1, #efefef, #ededed, #eaeaea, #e8e8e8, #e6e6e6);
				width: 200px;
				position: absolute;
				top: 0;
				left: 0;
				display: none;
			}
			.custommenu-wrapper hr
			{
				margin: 0.5rem 0;
			}
			.custommenu-wrapper a
			{
				color: #4d4d4d;
				font-size: 0.9rem;
				text-decoration: none;
				padding: 0.5rem 1rem;
				display: block;
				transition: all .3s ease-in-out;
			}
			.custommenu-wrapper a:hover
			{
				background: #e6ffff;
			}
			</style>
		`;
		this.CMWrapper = `
			<div class="custommenu-wrapper" id="CustomMenu">
					<a href="#" data-id="1">Back</a>
					<a href="#" data-id="2">Forward</a>
					<a href="#" data-id="3">Reload</a>
					<hr>
					<a href="#" data-id="4">Save as...</a>
					<a href="#" data-id="5">Print...</a>
					<a href="#" data-id="6">Translate to English</a>
					<hr>
					<a href="#" data-id="7">View page source</a>
					<a href="#" data-id="8">Inspect</a>
			</div>
		`;
		var menu = undefined;
		var menuStyleTag = undefined;
		var dom = undefined;

		$(document.head).children().last().before(this.CMStyle);
		$(document.body).prepend(this.CMWrapper);
		menu = $('#CustomMenu');
		menuStyleTag = $('#CustomMenuStyleTag');
		dom = $(document);

		// Menu
		menu.on('click', function(e) 
		{
			
			$(this).slideUp(200);
			target = $(e.target);	
			dataID = target.data('id');
			
			if ( dataID === 1 ) history.back();
			if ( dataID === 2 ) history.forward();
			if ( dataID === 3 ) window.location.reload;
			if ( dataID === 5 ) window.print();
			if ( dataID === 7 ) 
			{ 
				pageSource = '<html>';
				pageSource += $('html').html();
				pageSource += '</html>'; 
				pageURL   = window.location.href;
				pageTitle = $('title').text();
				pageSource.replace('/>/g', '&gt;');
				win = window.open('', 'View Page Source', ''); 
				txtArea = win.document.createElement('textarea');
				txtArea.style.width = '100%';
				txtArea.style.height = '100%';
				txtArea.style.border = 'none';
				txtArea.style.margin = '0';
				txtArea.style.outline = '0';
				txtArea.style.padding = '1rem';
				txtArea.readOnly  = true;
				txtArea.innerHTML = pageSource;
				win.document.body.appendChild(txtArea);
				win.document.title = pageTitle;
			}

		});

		// DOM
		dom.on('click', function() 
		{
			menu.slideUp(200);
		});

		this.show = function(x, y)
		{
			
			menu.css('left', x);
			menu.css('top', y);
			menu.slideDown(200);

		}

		this.hide = function()
		{
			menu.slideUp(200);
		}

		this.remove = function()
		{

			menuStyleTag.remove();
			menu.remove();

		}

	}

	DOM.on('contextmenu', function(e)
	{

		CustomMenu.show(e.clientX, e.clientY);
		return false;

	});

	



});

	
	








