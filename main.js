function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const resultElement = document.getElementById("result");

    if (birthdate) {
      const today = new Date();
      const birthDate = new Date(birthdate);

      let ageYears = today.getFullYear() - birthDate.getFullYear();
      let ageMonths = today.getMonth() - birthDate.getMonth();
      let ageDays = today.getDate() - birthDate.getDate();

      if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(
          today.getFullYear(),
          today.getMonth(),
          0
        ).getDate();
      }

      if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
      }

      resultElement.innerText = `Sua idade é ${ageYears} anos, ${ageMonths} meses e ${ageDays} dias.`;
      resultElement.style.color = "green"; // cor verde texto
    } else {
      resultElement.innerText = "Please enter your birthdate"; // limpa resultado se a idade estiver incorreta
      resultElement.style.color = "red";
    }
  }