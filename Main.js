class Car {
   static company = "Unknown";

    constructor(name, price) {
      this.name = name;
      this.price = price;
    }

    speak() {
      console.log(`the name of the car is ${this.name}`);
    }


    
    setNewCompany(name) {
      this.company = name;

      console.log(`the new company`);
    }

    
    getCompany() {
      console.log(`this car belongs to this company: ${this.company}`);

    }



}

  // Creating a new instance for the Car class

   const car = new Car("Toyota", 900000);

     //Accessing the Instance properties and method.
     console.log(`Name : ${car.name}`);
     console.log(` Price: ${car.price}`);
     car.speak();

     //Acessing class method.
       car.setNewCompany("Mercedes");

    //Accessing the class properties and method.
     console.log(`Class property-company : ${car.company}`);
     car.getCompany();

     