function getColor(selection)

{
    let upppercase = selection.toUpperCase();
    
	switch(upppercase){

        // Add more options here
        case 'RED':
            return true
            break;
            
        case 'GREEN':
            return true
            break;
            
        case 'BLUE':
            return true    
            break;

        default:
	    	return false;  //returns false because the user picked an unavailable color
	        break;               
	}
}

var colorname = prompt('What color do you want?').trim();
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
