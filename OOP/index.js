class Vehicle{
    constructor(efficiency, speed, color) {
        this.efficiency = efficiency;
        this.speed = speed;
        this.color = color;
}
wheel(){
    console.log("The vehicle has wheels");
}

fuel(){
    console.log("The vehicle is using fuel");
}
}

class Car extends Vehicle {
    constructor(country, efficiency, speed, color) {
        super(efficiency, speed, color);
        this.country = country;
}
}


let Bus = new Vehicle("fuel", "30-70 km/h (19-44 mph)", "blue");
console.log(Bus); 
console.log(Bus.wheel())
console.log(Bus.fuel())