function calculateAge() {
    let dob = document.getElementById('dob').value;
    let result = document.getElementById('result');
  
    if (dob === '') {
      result.innerHTML = "Please select your birth date!";
      return;
    }
  
    let dobDate = new Date(dob);
    let currentDate = new Date();
  
    let yearDiff = currentDate.getFullYear() - dobDate.getFullYear();
    let monthDiff = currentDate.getMonth() - dobDate.getMonth();
    let dayDiff = currentDate.getDate() - dobDate.getDate();
  
    if (dayDiff < 0) {
      monthDiff--;
      dayDiff += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
  
    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }
  
    result.innerHTML = `You are ${yearDiff} years, ${monthDiff} months, and ${dayDiff} days old`;
  }
  