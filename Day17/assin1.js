function newYorkSkylines(n, arr) {
    // write your code here
    let newstr = ''
    for(let i=0;i<n;i++){
        // console.log(arr[i-1]+">"+arr[i]+'>'+arr[i+1])
        if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
        newstr += 2+' '
        }else if(arr[i]>arr[i-1] || arr[i]>arr[i+1]){
          newstr += 1+ ' '
        }else{
          newstr += 0 + ' '
        }
    }console.log(newstr)
    
}

newYorkSkylines(5,[1,4,3,2,7])

// 0 2 1 0 1 
// 