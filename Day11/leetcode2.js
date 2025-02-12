
//  nums array in if duplicate value then retrun true other wise retrun false

var containsDuplicate = function(nums) {
    let newarr = [...new Set(nums)]
    
    if(newarr.length == nums.length){
        return false
    }else{
        return true
    }
};