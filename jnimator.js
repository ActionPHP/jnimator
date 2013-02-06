/****************************************************
 * 
 * ActionPHP jNimator
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
  		
  			
  		case 'in':
  		
  			this.delay( delay ).fadeIn( duration, function() { 
  		
  				if( typeof options.callback == "function" ){ options.callback.call(); 	 }
  				 
  		 } );
  		
  		break;
  		
  		case 'out':
  		
  			this.delay( delay ).fadeOut( duration, function() { 
  		
  				if( typeof options.callback == "function" ){ options.callback.call(); 	 }
  				 
  		 } );
  		
  		break;  
  		
  		
  	}
 this.html( options.message );
     
     return this.each(function() {        

      

    });


  };
})( jQuery );


 
 //var stepDelay = 0;
 //x = 0;

	
 	function animateThis( step, delay ){
 		
 			sequence = window.sequence;
 			
 			nextStepPosition = step;
 			nextKey = 'step_' + nextStepPosition;
 			nextStep = sequence[nextKey];
 		
 		setTimeout( function() {
 			
 			executeStep( nextStep );
 			stepDelay = Number(sequence[nextKey].delay);
 			step++;
 			
 			if ( step > window.totalSteps ) { return }
 			animateThis( step, stepDelay );
 			
 		}, delay);
 		
 	}
 	
 	
 
  
  	function executeStep ( stepObject ){
  		
  		for ( var step_key in stepObject ){
  	 	
	  	if( stepObject.hasOwnProperty(step_key) ){
	    
			    
	     the_id = String('#' +  stepObject[step_key].id);
	     the_distance =  stepObject[step_key].distance;
	     the_duration = Number( stepObject[step_key].duration );
	     the_direction = stepObject[step_key].direction;
	     the_callback = stepObject[step_key].callback;
	     
	    	jQuery( the_id ).jnimator( {  direction: the_direction, distance: the_distance, duration: the_duration,  callback: function(){ }
	    		 
		} );
		
		 }
	  		
	  	}
  		
  		
  	}
  	
  	function animateThis( step, delay ){
 		
 			sequence = window.sequence;
 			
 			nextStepPosition = step;
 			nextKey = 'step_' + nextStepPosition;
 			nextStep = sequence[nextKey];
 		
 		setTimeout( function() {
 			
 			executeStep( nextStep );
 			stepDelay = Number(sequence[nextKey].delay);
 			step++;
 			
 			if ( step > window.totalSteps ) { return }
 			animateThis( step, stepDelay );
 			
 		}, delay);
 		
 	}
 	
