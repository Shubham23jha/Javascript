// const tinderUser = new Object()//->singelton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);//dot chainings
const { firstname } = regularUser.fullname.userfullname
 console.log(firstname);//hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

 //const obj3 = { obj1, obj2 }
 //console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2, obj4)//here {} this is target and obj1 , obj2 , obj3 are source

//const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = Object.assign(obj1, obj2)
console.log(obj1);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj2);//{ '3': 'a', '4': 'b' }
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

//console.log(Object.keys(tinderUser));//[ 'id', 'name', 'isLoggedIn' ]
//console.log(Object.values(tinderUser));//[ '123abc', 'Sammy', false ]
//console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

/*
The terms "singleton object" and "instance object" refer to concepts in object-oriented programming, particularly in the context of design patterns and class-based languages. Let's explore the differences between them:

Singleton Object:

A singleton is a design pattern that ensures a class has only one instance and provides a global point of access to that instance.

The singleton pattern is often used when exactly one object is needed to coordinate actions across the system. It is useful in scenarios where a single point of control is necessary, such as managing a configuration, a logging service, or a connection pool.

The singleton pattern typically involves a class that maintains a reference to the single instance and a method that provides access to that instance.

Instance Object:

An instance object is a specific occurrence of a class, created from the blueprint defined by the class.

In object-oriented programming, classes serve as templates for creating objects. When you instantiate a class, you create an instance object of that class.

Each instance of a class has its own state (properties) and behavior (methods) but shares the same structure defined by the class.


+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
In summary, a singleton object refers to a unique instance of a class that ensures only one instance exists, while an instance object is a specific occurrence of a class created through instantiation. The singleton pattern is a design choice made to address specific requirements, whereas instance objects are created whenever you need a new object based on a class.

*/