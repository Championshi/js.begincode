// const tinderUser = new Object()
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

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // way to combine all the array element using (object.assign)

const obj3 = {...obj1, ...obj2} // it is best way to combine all the array element (obj1 + obj2)
// console.log(obj3);


const users = [
    {
        id: 1,                          // object 1
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"          // object 2
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // it get the keys and values of objects using this it is important property
// console.log(Object.values(tinderUser)); //  got the values example 
// console.log(Object.entries(tinderUser)); // it separet key and values of that seperate key into a single paranthesis

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // it is used to check this property is availabel to them or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // coudre -> mtlb kaha se value extract karne hai wo course bta rha hai// this strurcture used to destucture thr value og objects

// console.log(courseInstructor); // thought this we get the value of course instuctor
console.log(instructor); // we can modify and or destructure the object using above operation we get the same value here as we get just above

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",       // objects inside jason format
//     "price": "free"
// }

[
    {}, //  jason API  deceleration inside this 
    {},
    {}
]