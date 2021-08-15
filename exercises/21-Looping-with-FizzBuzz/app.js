function fizzBuzz() {  
	// Your code here

    for ( var Number = 1 ; Number <= 100; Number++){
        if (Number % 3 === 0 && Number % 5 ===0){
            console.log("FizzBuzz")
        } else if (Number % 5 ===0){
            console.log("Buzz")
        } else if (Number % 3 ===0){
            console.log("Fizz")
        } else {console.log(Number)}
          
            
        

    }
    
    
}

fizzBuzz();