//coding problem 3

let age = "19";

if(age < 5){ 
    console.log("Toddler");
} else if ( age >= 5 && age <= 12){
    console.log("Child");
} else if ( age >= 13 && age <= 19 ){
    console.log("Teenager");
}else if (age >= 20 && age <= 35){
    console.log("Young adult");
}else if (age >= 36 && age <= 60){
    console.log("Middle-Aged");
}else if ( age >= 60){
    console.log("Senior");
} else {
    console.log("invalid output");
}
