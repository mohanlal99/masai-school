function createBankAccount(amount){
  
    let AcountBlance = amount<=0?0:amount
      return {
        deposit:(amount=0)=>{
          AcountBlance += amount
          return AcountBlance
        },
        withdraw:(amount=0)=>{
          AcountBlance -= amount
          return AcountBlance
        },
        getBalance:()=>{
          return AcountBlance
        }
      }
  }
  
  const account = createBankAccount(100);
  console.log(account.deposit(50)); // Output: 150
  
  console.log(account.withdraw(30)); // Output: 120
  
  console.log(account.getBalance()); // Output: 120
  console.log(account.withdraw()); // Output: 110