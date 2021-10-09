class Vehicle {
    constructor(private color: string) {
        this.color = color;
    }
    // public drive(): void {
    //     console.log('drive drive');
    // }
    private honk(): void {
        console.log('beep beep');
    }

    startHonk(): void {
        console.log(this.color);
        this.honk();
    }
}

class Car extends Vehicle {
    constructor(color){
        super(color);
    }
    private drive(): void {
        //console.log(this.color);
        console.log('vroom');
    }
}

const v = new Vehicle('orange');
v.startHonk();

const vehicle = new Car('blue');
vehicle.startHonk();
//vehicle.drive();
