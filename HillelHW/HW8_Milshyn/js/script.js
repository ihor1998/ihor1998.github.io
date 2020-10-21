

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
    alert(`${firstName}, ${lastName}, ${age}`);   
}

//createUser(firstName, lastName, age);



function acceptNum(lessNumber,moreNumber) {
    const number = +prompt('Enter number:'); 

    if (number < 100) {
        lessNumber();
    } else {
        moreNumber();
    }
    
}

acceptNum(
    function () {
        alert('Less');
    },
    function () {
        alert('More');
    },
)
