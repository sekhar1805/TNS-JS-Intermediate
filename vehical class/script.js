/*
## **Problem Statement**

Define a class `Vehicle`.

**`Vehicle` will have the following properties:**

- `name`: The name of the vehicle.
- `hp`: The horsepower of the engine.
- `topSpeed`: The top speed.

Take the vehicle details from user using prompt when the page is loaded and construct a new vehicle using the `Vehicle` class.

On the screen, there will be:

- Name of the vehicle.
- A floating number initially 0.0 in red denotes the speed.
- Four button: `START`, `ACCELERATE`, `BRAKE`, `STOP`.

**`Vehicle` will have the following methods:**

- `start()`: Turn the speed (0.0) to green.
- `accelerate()`: While pressing the `ACCELERATE` button, the speed will increase with an acceleration of `hp / 5`, and as soon as the `ACCELERATE` button is released, the speed will stop increasing and stop at the current number. Display the updated speed at an interval of 10ms.
- `brake()`: While pressing the `BRAKE` button, the speed will decrease with a declaration of `hp / 2` and as soon as the `BRAKE` button is released, the speed will stop decreasing and stop at the current number. Display the updated speed at an interval of 10ms.
- `stop()`: Reset the speed to 0.0 in red.

**Constraints:**

- The speed should never increase beyond top speed and should never decrease below zero
*/

class Vehicle {
  constructor(name, hp, topSpeed) {
    this.name = name;
    this.hp = hp;
    this.topSpeed = topSpeed;
    this.speed = 0.0;
    this.accelerating = false;
    this.braking = false;
    this.intervalId = null;
  }

  start() {
    document.getElementById("speedValue").classList.add("accelerating");
  }

  accelerate() {
    if (this.speed < this.topSpeed) {
      this.speed += this.hp / 5;
    }
    document.getElementById("speedValue").textContent = this.speed.toFixed(1);
  }

  brake() {
    if (this.speed > 0) {
      this.speed -= this.hp / 2;
    }
    document.getElementById("speedValue").textContent = this.speed.toFixed(1);
  }

  stop() {
    this.speed = 0.0;
    document.getElementById("speedValue").textContent = this.speed.toFixed(1);
    document.getElementById("speedValue").classList.remove("accelerating");
  }
}

// Get vehicle details from the user
const name = prompt("Enter the name of the vehicle:");
const hp = parseFloat(prompt("Enter the horsepower of the engine:"));
const topSpeed = parseFloat(prompt("Enter the top speed:"));

const vehicle = new Vehicle(name, hp, topSpeed);
document.getElementById(
  "vehicleName"
).textContent = `Vehicle Name: ${vehicle.name}`;

// Set up button click event listeners
document
  .getElementById("startButton")
  .addEventListener("click", () => vehicle.start());
document
  .getElementById("accelerateButton")
  .addEventListener("mousedown", () => {
    vehicle.accelerating = true;
    vehicle.intervalId = setInterval(() => {
      if (vehicle.accelerating) {
        vehicle.accelerate();
      }
    }, 10);
  });
document.getElementById("accelerateButton").addEventListener("mouseup", () => {
  vehicle.accelerating = false;
  clearInterval(vehicle.intervalId);
});
document.getElementById("brakeButton").addEventListener("mousedown", () => {
  vehicle.braking = true;
  vehicle.intervalId = setInterval(() => {
    if (vehicle.braking) {
      vehicle.brake();
    }
  }, 10);
});
document.getElementById("brakeButton").addEventListener("mouseup", () => {
  vehicle.braking = false;
  clearInterval(vehicle.intervalId);
});
document
  .getElementById("stopButton")
  .addEventListener("click", () => vehicle.stop());
