function studentMarks(marks){
	let count = 0
	for(let i=0;i<marks.length;i++){
		if(marks[i] < 40){
			
			marks[i] += 20
		}
		if(marks[i]<=50){
			count++
            
		}
	}
console.log(count)
}

studentMarks([33,14,78,93,71,23,42,10,45,89])
