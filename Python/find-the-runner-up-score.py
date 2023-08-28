if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    
    arrList = list(arr)
    largestNum=max(arrList)
    secondLargestNum=min(arrList)
    
    for i in range(n):
        if secondLargestNum<arrList[i] and arrList[i] < largestNum:
            secondLargestNum = arrList[i]
            
    print(secondLargestNum)
       
   
  
