function dayOfProgrammer(year) {
    if (year < 1700 || year > 2700) {
        return "gecersiz yil";
    }

    let dayOfProgrammer;
    if (year === 1700 || year === 1800 || year === 1900) { 
        dayOfProgrammer = 12; 
    } else if (year === 1918) { 
        dayOfProgrammer = 26; 
    } else {
        let sumDays = 0;
        for (let i = 0; i < 8; i++) {
            let date = new Date(year, i + 1, 0);
            sumDays += date.getDate();
        }
        dayOfProgrammer = 256 - sumDays;
    }
    return `${dayOfProgrammer}.09.${year}`;
}