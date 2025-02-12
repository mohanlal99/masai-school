
//If any value with Add and if == target then retrun index which index value add after equal target
var twoSum = function(nums, target) {
    let res = 0
    let arr = []
    console.log(nums)
    let flag = true
      for(let i = 0;i<nums.length;i++){
        let num = nums[i]
        for(let j=1;j<nums.length;j++){
          if(num + nums[j]==target && flag==true){
            arr.push(i,j)
            console.log("Yes",i,j)
            flag = false
          }
        }
        
      }
      
          console.log(arr)
  };
  
  twoSum([3,2,4],6)