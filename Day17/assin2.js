function minLengthSubstr(s){
    //write code here
    let outerarr =[]
    let min = 0
      let newa = s.split('')
      let newarr = [...new Set(newa)]
      for(let i=0;i<s.length;i++){
        let temp = ''
        for(let j=i;j<s.length;j++){
          temp+=s[j]
          if(checkChar(temp)){
          // console.log(temp.length)
          // let max  = temp.length
           outerarr.push(temp.length)
          }
          
        }
      }
      // console.log(min)
      console.log(Math.min(...outerarr))
      // function checkChar(str){
      //   for(let i=0;i<newarr.length;i++){
      //     if(!str.includes(newarr[i])){
      //       return false
      //     }
      //   }
      //   return true
      // }
      function checkChar(str){
        for(let i=0;i<newarr.length;i++){
          if(!str.includes(newarr[i])){
            // console.log(str)
            return false
          }
        }
        return true
      }
    }
    minLengthSubstr('zoomsessionmooz')
    
    // let arr = 'zoomsessionmooz'
    
    // console.log(newarr)

    // smallest substring
    // 10
