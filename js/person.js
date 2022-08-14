let test_obj={
    firstname: "Peti",
    lastname: "Nagy",
    age:"25"

}

const personDataLog=(persone={firstname: "John",lastname: "Doe",age:"33"})=>{
    return persone.firstname+" "+persone.lastname+" "+persone.age;
} 

console.log(personDataLog());
console.log(personDataLog(test_obj));