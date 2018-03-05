'use strict'

class Person {
  private name: string = 'Jane Doe';
  private age: number = 30;
  private gender: string = 'female';

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  }
  getGoal() {
    console.log('My goal is: Live for the moment.');
  }
}
class Students {
  private name: string = 'Jane Doe';
  private age: number = 30;
  private gender: string = 'female';
  private previousOrganization: string = 'The School of Life';
  private skippedDays: number = 0;

  constructor(name: string, age: number, gender: string, previousOrganization: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }
  getGoal() {
    console.log('Be a junior software developer.');
  }
  skipDays(numberOfDay: number) {
    this.skippedDays === numberOfDay++;
  }
}

class Mentor {
  private name: string = 'Jane Doe';
  private age: number = 30;
  private gender: string = 'female';
  private level: string = 'intermediate';

  constructor(name: string, age: number, gender: string, level: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }
  getGoal() {
    console.log('"Educate brilliant junior software developers.');
  }
}

class Sponsor {
  private name: string = 'Jane Doe';
  private age: number = 30;
  private gender: string = 'female';
  private company: string = '';
  private hiredStudents: number = 0;

  constructor(name: string, age: number, gender: string, company: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
  }
  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }
  hire(hiredStudents) {
    this.hiredStudents === hiredStudents++;
  }
  getGoal() {
    console.log('"Educate brilliant junior software developers.');
  }
}

let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
let jane = new Person();
people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
let student = new Student();
people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
let mentor = new Mentor();
people.push(mentor);
let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');

student.skipDays(3);

for (let i = 0; i < 6; i++) {
  elon.hire();
}

for (let i = 0; i < 4; i++) {
  sponsor.hire();
}

for (let person of people) {
  person.introduce();
  person.getGoal();
}