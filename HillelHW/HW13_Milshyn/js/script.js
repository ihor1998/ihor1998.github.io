"use strict";

function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
    
    this.meow = function () {
        alert('Meow!')
    };
}

function User(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
   
    this.greet = function () {
        alert(`Hi! ${this.firstName} ${this.lastName})`);
    }
}

