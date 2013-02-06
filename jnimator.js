/****************************************************
 * 
 * ActionPHP jNimator v 1.0
 * (c)2013 ActionPHP Ltd
 * 
 * **************************************************/
(function( $ ) {
  $.fn.jnimator = function( options ) {
  
    direction = options.direction;
  	duration = Number( options.duration );
  	distance = options.distance ;
  	callback = options.callback;
  	delay =  Number(options.delay)
  
  	switch ( options.direction ){
  		
  		case 'up':
  	
  			this.delay( delay ).animate( { top: '-='+distance }, duration, function() { 
  			
  				if( typeof options.callback == "function" ){ options.callback.call(); }
  			
  			} );
  		
  		
  		break;
  		
  		case 'down':
  		
  			this.delay( delay ).animate( { top: '+='+distance }, duration, function() { 
  			
  				if( typeof options.callback == "function" ){ options.callback.call(); }
  			
  			} );
  		
  		break;
  		
  		case 'left':
  		
  			this.delay( delay ).animate( { left: '-='+distance }, duration, function() { 	
  			
  				if( typeof options.callback == "function" ){ options.callback.call(); }
  			
  			} );
  		
  		break;
  		
  		case 'right':
  		
  			this.delay( delay ).animate( { left: '+='+distance }, duration, function() { 
  		
  				if( typeof options.callback == "function" ){ options.callback.call(); 	 }
  				 
  		 } );
  		
  		break;  		
  		
  		
  		
  	}
 this.html( options.message );
     
     return this.each(function() {        

      

    });


  };
})( jQuery );
