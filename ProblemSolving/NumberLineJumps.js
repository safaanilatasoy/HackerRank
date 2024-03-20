function kangaroo(x1, v1, x2, v2) {

    if ((x2 > x1 && v2 >= v1) || (x1 === x2)) {
        return 'NO';
    }
   
    while (true) {
        x1 += v1;
        x2 += v2;
        
        if (x1 === x2) {
            return 'YES'; 
        } else if (x1 > x2) {
            return 'NO'; 
        }
    }
}