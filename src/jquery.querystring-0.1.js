/* 
	jquery.querystring-0.1.js
	Provides mechanism parse querystring and hash.

	Copyright (c) 2009 Stefano Valente, dr.wahrheit@gmail.com

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function($){
	// Used to store current (in order) document.location.hash and window.location.search
	var dlh, wls;
	
	$.querystring = function(key){ 
		if(wls != window.location.search){ wls = window.location.search; }
		
		var keys = wls != '' ? wls.substr(1).split('&') : null;
		return getValue(key, keys); 
	}
	
	$.hash = function(key){ 
		if(dlh != document.location.hash){ dlh = document.location.hash; }
		
		var keys = dlh != '' ? dlh.substr(1).split('&') : null;
		return getValue(key, keys); 
	}
	
	// Search in the array for the value of the key
	function getValue(key, location){
		if (key == '' || location == null) return '';
		
		var param_value = '';
		for (var i = 0; i < location.length; ++i)
		{
			var param = location[i].split('=');
			if (param.length != 2) { continue; }
			if (param[0] == key)
			{
				param_value = decodeURIComponent(param[1].replace(/\+/g, " "));
				break;
			}
		}
		
		return param_value;
	}
	
})(jQuery);