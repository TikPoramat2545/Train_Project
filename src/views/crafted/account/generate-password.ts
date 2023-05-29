methods: 
{
 generatePassword() 
    {
    const length = 12; // Specify the desired length of the password
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let generatedPassword = '';

    // Ensure at least one character from each character type
    generatedPassword += this.getRandomCharacter(lowercase);
    generatedPassword += this.getRandomCharacter(uppercase);
    generatedPassword += this.getRandomCharacter(numbers);
    generatedPassword += this.getRandomCharacter(specialCharacters);

    // Fill the remaining characters randomly
    for (let i = 4; i < length; i++) {
      const randomCategory = Math.floor(Math.random() * 4); // Randomly select a character category
      let characterSet = '';

      switch (randomCategory) {
        case 0:
          characterSet = lowercase;
          break;
        case 1:
          characterSet = uppercase;
          break;
        case 2:
          characterSet = numbers;
          break;
        case 3:
          characterSet = specialCharacters;
          break;
      }

      generatedPassword += this.getRandomCharacter(characterSet);
    }

    this.password = generatedPassword;
  };
  getRandomCharacter(characterSet) 
  {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    return characterSet.charAt(randomIndex);
  };
};
