var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};


const fireGun = (chamberPosition) => {
    if (chamberPosition === bulletPosition) {
    return ("You're dead!");
    } else {
        return "Keep playing!"
    }
    console.log(chamberPosition);
        
};

console.log(fireGun(spinChamber()));