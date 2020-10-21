

function pow(a, b) {
    let result = a;
    let i = 1;
    while (i < b){
        result *= a;
        i++;
    }
return result
}

function createUser(firstName, lastName, age) {
    
    let obj = {
        a: firstName ,
        b: lastName ,
        c: age,
    }   
    
    return obj.a + " " + obj.b + "," + obj.c; 
}

//alert(createUser(firstName, lastName, age));


function acceptNum(number,lessNumber,moreNumber) {

    if (number < 100) {
        lessNumber();
    } else {
        moreNumber();
    }
    
}

acceptNum(
    number,
    function () {
        alert('Less');
    },
    function () {
        alert('More');
    },
)
