let json = '{ "name": "Yoda", "age": 20 }';
 
try {
    let user = JSON.parse(json);
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// ini untuk jika tidak sesuai properti
let json1 = '{ bad json }';
 
try {
    let user1 = JSON.parse(json1);
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
}

// ini jika menggunakan throw untuk pemberitahuan ke catch ada
let json2 = '{ "age": 20 }';
 
try {
    let user = JSON.parse(json2);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}

// jika menggunakan jawaban if statement
let json6 = '{ "name": "Yoda", "age": 20 }';
 
try {
    let user = JSON.parse(json6);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    errorCode;
 
    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
