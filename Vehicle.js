class Vehicle {
    constructor(Vehicle_Id,Name,ManufactureCompany) {
       this.Vehicle_Id = Vehicle_Id; 
       this.Name = Name;
      this.ManufactureCompany = ManufactureCompany;
    
    }
  }
  class Car extends Vehicle {
    constructor(Vehicle_Id,Name,ManufactureCompany, Type_Car) {
      super(Vehicle_Id,Name,ManufactureCompany);
      this.Type_Car = Type_Car;
    }
  }

  class Plane extends Vehicle {
    constructor(Vehicle_Id,Name,ManufactureCompan, Type_Plane) {
      super(Vehicle_Id,Name,ManufactureCompan);
      this.Type_Plane = Type_Plane;
    }
  }

  class Employee {
    constructor(Employee_Id,NameEmployee,DateOfBirth) {
      this.Employee_Id = Employee_Id;
      this.NameEmployee =NameEmployee ;
      this.DateOfBirth = DateOfBirth;
    }
  }

  class Driver extends Employee {
    constructor(Employee_Id,NameEmployee,DateOfBirth, licenseID) {
      super(Employee_Id,NameEmployee,DateOfBirth);
      this.licenseID = licenseID;
    }
  }

  class Pilot extends Employee {
    constructor(Employee_Id,NameEmployee,DateOfBirth, licenseID) {
      super(Employee_Id,NameEmployee,DateOfBirth);
      this.licenseID = licenseID;
    }
  }
  class Reservation  {
     constructor(reservation_Id,reservationDate, employee_id, vehicle_id) {
     this.reservation_Id = reservation_Id;  
     this.reservationDate = reservationDate;
     this.employee_id = employee_id;
     this.vehicle_id = vehicle_id;
             
        }
  }

// 3 object for car
  let Car_Array = Array()
  let Car1 = new Car(123,'Lexus ','Toyota ','Gas')
  Car_Array.push(Car1)
  let Car2 = new Car(345,'ES6','NIO','Electric')
  Car_Array.push(Car2)
  let Car3 = new Car(678,'‏ Model Y','Tesla','Electric')
  Car_Array.push(Car3)

// 2 object for plane 
  let Plane1 = new Plane(901,'A310','Airbus SE','WideBody')
  let Plane2 = new Plane(1012,'Boeing 707','Boeing Commercial Airplanes','WideBody')// 

  

let driver_array = Array()
let driver1 = new Driver(123,'Hassan','01-02-1998',1124563)
driver_array.push(driver1)
let driver2 = new Driver(456,'Ali','22-1-1994',1683618)
driver_array.push(driver2)
let driver3 = new Driver(789,'Shahad','22-10-1998',9365390)
driver_array.push(driver3)

 
 let Pilot1 = new Pilot(1011,'Hanan','20-03-1989', 0340245)
 let Pilot2 = new Pilot(1213,'Fahad','15-11-1978',5495240)
  


let Reservation_Array = new Array ()
 let booking1 = new Reservation (1,'2019-03-2',309,123)
 Reservation_Array.push(booking1)
 let booking2 = new Reservation (2,'2020-03-2',487,345)
 Reservation_Array.push(booking2)
 
 
// Current date
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

// function check if pilot driver plane
  function Check(employee_id,vehicle_id) {
    let car=0
    let driver=0
    
    driver_array.forEach(function(curruntValue,index,array)
      {
        if (curruntValue.Employee_Id==employee_id)
        {
          driver=1
        }
        
      })
    Car_Array.forEach (function(curruntValue,index,array )
      {
        if (curruntValue.Vehicle_Id==vehicle_id)
        {
          car=1
        }
      })
    if (car==1 && driver==1)
    {
      console.log('A vehicle type is a Car that matches the driver')
    }
      if (car==0 && driver==1)
    {
      console.log('A vehicle is a Plane that not matches the driver')
    }
      if (car==0 && driver==0)
    {
    console.log('A vehicle type is a Plane that matches the Pilot')
   let reserved = new Reservation (76879,date,employee_id,vehicle_id);
    Reservation_Array.push(reserved);
    
    }
      if (car==1 && driver==0)
    {
      console.log('A vehicle type is a car that matches the Pilot')
    }
  }

  Check(1213,1012);

  const ViewReservation = Reservation_Array.map(function(curruntValue){
      return curruntValue ;
  })
  console.log(ViewReservation);
