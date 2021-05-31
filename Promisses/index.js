function sum(a, b) {
    let result = a + b;

    if (result <= 10) {
    return errorCalback()
    }

    successCallback()
}

function errorCalback() {
  console.log('Error')
}

function successCallback() {
  console.log('Success')
}

sum(10,0)