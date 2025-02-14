function createStack(){
    // if(isNaN(num) || !(num >=1 && num <=2)  ){
    //     return "valid number with in range"
    // }
    let StudentData = []
    let push = ()=>{
        let sName = prompt("Enter Your Name : ")
        let sAge = prompt("Enter Your Age : ")
        let sSubject = prompt("Enter Your Subject [Science, Math] : ")
        let id = 0
        if(StudentData.length ==0){
            id =1;
        }
        else{
            id = StudentData[StudentData.length -1]['id']+1
        }
        let Student = {id,sName,sAge,sSubject,}
        StudentData.push(Student)
    }
    let show = ()=>{
       console.log(StudentData)
    }
    let pop = ()=>{
       if(StudentData.length == 0){
           console.log('Nothing in Student List')
       }
       let res = StudentData.pop()
       console.log(res)
    }
    let loop = true
   while(loop){
       let num = parseInt(prompt("Choose Number in This range [1 for add 2 for delete]:"))
       
        switch(num){
        case 1:{
            push();
            break;
        }
        case 2:{
            pop();
            break;
        }
        case 3:{
            show();
            break;
        }
        case 4:{
           loop = false;
                console.log("Exiting...");
            break;
        }
        default:{
            return "wrong value"
            
        }
    }
   }
}

// let num = prompt("Choose Number in This range [1 for add 2 for delete]:")

createStack()
