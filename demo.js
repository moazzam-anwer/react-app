// // // var name
// // var trainer = "Ashu lekhi"

// // function React(){
// //     console.log("trainer o freact is " , trainer)

// //      var trainer  = "Lekhi Sahab"
// // }

// // console.log(">>>>>>>>>>>>>>>>", trainer)

// // React()


// // var user = {
// //     name:"Ashu",
// //     role:"trainer",
// //     id:343234,
// //     phone:3435345,
// //     email:"ashu.lekhi",
// //     salary:"Chindi",
// //     loaction:"Delhi"
// // }


// // var user1 = {...user}

// // var friends = ["Harion", "Arjun"]
// // var newfriends = [...friends ,  "Pranjali" , "Nayana"]

// // console.log("new friends" , newfriends)

// function getData(){
// console.log("..............")
// }

// function getData(...xyz){  // rest operator 
// console.log(">>>>>>>>>>>>>>>>>>>>>>>>>" , xyz)
// }


// getData()
// getData("Ashu ")
// getData("Ashu " , "Hariom" , "Rohit" , "Saurabh" , "Lekhi" , "Gauresh")



function *series(){
    console.log("execution 111111")
    yield 10
    console.log("execution 222222222")
    yield 20
    console.log("execution 3333333")
    yield 30
    console.log("execution 444444444444")
    yield 40
    console.log("execution 555555555555")
    return 50
}

var gen = series()

console.log("......" , gen.next())
console.log("......" , gen.next())
console.log("......" , gen.next())
console.log("......" , gen.next())
console.log("......" , gen.next())





