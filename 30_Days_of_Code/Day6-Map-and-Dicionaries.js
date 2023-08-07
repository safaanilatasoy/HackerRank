function processData(input) {
    //Enter your code here
  const lines = input.split('\n');
  const n = parseInt(lines[0], 10);
    
  const phoneBook = {};
  
   
  for (let i = 1; i <= n; i++) {
    const [name, phoneNumber] = lines[i].split(' ');
    phoneBook[name] = phoneNumber;
  }

  
  for (let i = n + 1; i < lines.length; i++) {
    const nameToQuery = lines[i].trim();
    if (phoneBook.hasOwnProperty(nameToQuery)) {
      console.log(`${nameToQuery}=${phoneBook[nameToQuery]}`);
    } else {
      console.log(`Not found`);
    }
  }
  
  
  
  
}
    