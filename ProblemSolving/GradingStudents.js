function gradingStudents(grades) {
    let currentGrade =0;
    for(let i=0; i<grades.length; i++){
           let count = 0;
           let temp = grades[i]
           while(temp%5!==0){
           temp++
           count++    
           }
           if(grades[i]<38){
               grades[i] = grades[i]
           }
           else if(count <3){
            grades[i] = grades[i]+count   
           }else if(count==3){
               grades[i] = grades[i]
           }
        }
        
    
    return grades
}