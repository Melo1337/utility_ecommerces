import chalk from "chalk";

function handle() {

    let characters = [];
    let password = "";

    let passwordLength = process.env.LENGTH

    if (process.env.UPPERCASE === "true") characters.push(..."ABCDEFGHIJKLMNOPQRSTUVXYZ");

    if (process.env.LOWERCASE === "true") characters.push(..."abcdefghijklmnopqrstuvwxyz");

    if (process.env.NUMBERS === "true") characters.push(..."123456789");

    if (process.env.SPECIAL_CHARACTERS === "true") characters.push(..."!@#$%^&*()_+[]{}|;:,.<>?");

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex]
    }

    console.log(chalk.bgGreen.bold("Sua senha gerada: \n"))
    console.log(password)

}

export default handle;


