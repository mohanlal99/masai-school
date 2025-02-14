function outerFunction(){
    let message = 'Hello world!'
    return function innerFunction(){
      return message
    }
  }
  
  let inner = outerFunction();
  console.log(inner())