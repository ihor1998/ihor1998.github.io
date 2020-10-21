

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
        firstName: `${ firstName }` || null,
        lastName: `${ lastName }` || null,
        age: `${ age }` || null,
    }   
    
    return obj; 
}



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
