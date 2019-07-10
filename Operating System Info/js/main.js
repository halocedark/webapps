$( document ).ready(function() 
{

	
	  
	function getOSInfo()
	{

		var OSInfo  = document.querySelector('#OSInfo');
		var InfoTxt = '<p class="info-items">Browser codeName: ' +navigator.appCodeName+ '.</p>';
		InfoTxt += '<p class="info-items">Browser name: ' +navigator.appName+ '.</p>';
		InfoTxt += '<p class="info-items">Browser version: ' +navigator.appVersion+ '.</p>';
		InfoTxt += '<p class="info-items">Cookies enabled: ' +navigator.cookieEnabled+ '.</p>';
		InfoTxt += '<p class="info-items">Platform: ' +navigator.platform+ '.</p>';
		InfoTxt += '<p class="info-items">User-agent header: ' +navigator.userAgent+ '.</p>';

		var IpAddress = '';
		$.getJSON('https://jsonip.com/', function(response) 
		{
			IpAddress = response.ip;
			InfoTxt += '<p class="info-items">IP Address: ' +IpAddress+ '.</p>';
			OSInfo.innerHTML = InfoTxt;
		});

		var ContinentCode = '';
		var ContinentName = '';
		var CountryCode   = '';
		var CountryName   = '';
		var RegionCode    = '';
		var RegionName    = '';
		var City          = '';
		var Zip           = '';
		var Languages     = '';
		
		$.getJSON('https://ipapi.co/' +IpAddress+ '/json/', function(response) 
		{
			ContinentCode = response.continent_code;
			CountryCode   = response.country;
			CountryName   = response.country_name;
			RegionCode    = response.region_code;
			RegionName    = response.region;
			City   		  = response.city;
			Zip    		  = response.postal;
			Languages     = response.languages;

			InfoTxt += '<p class="info-items">Continent code: ' +ContinentCode+ '.</p>';
			InfoTxt += '<p class="info-items">Country code: ' +CountryCode+ '.</p>';
			InfoTxt += '<p class="info-items">Country name: ' +CountryName+ '.</p>';
			InfoTxt += '<p class="info-items">Region code: ' +RegionCode+ '.</p>';
			InfoTxt += '<p class="info-items">Region name: ' +RegionName+ '.</p>';
			InfoTxt += '<p class="info-items">City: ' +City+ '.</p>';
			InfoTxt += '<p class="info-items">Zip: ' +Zip+ '.</p>';
			InfoTxt += '<p class="info-items">Languages: ' +Languages+ '.</p>';
			OSInfo.innerHTML = InfoTxt;
		});



		
		OSInfo.innerHTML = InfoTxt;

	}

	getOSInfo();




});