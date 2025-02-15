let input = [ { name: "Alice", marks: 58 },

    { name: "Bob", marks: 85 },
    
    { name: "Charlie", marks: 92 },
    
    { name: "David", marks: 45 } ]
    
    // Output: ["Charlie", "Bob"]
    function processStudents(studentData){
      let res = studentData.filter((key)=> key.marks>60)
      let newarr = res.map(key=>key.name)
      return newarr.reverse()
    }
    
    console.log(processStudents(input))