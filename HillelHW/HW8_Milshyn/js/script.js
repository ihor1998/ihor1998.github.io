

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
        firstName: `${ firstName }`,
        lastName: `${ lastName }`,
        age: `${ age }`,
    }   
    
    if (!firstName,
        !lastName,
        !age
    ) return null;
    
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
