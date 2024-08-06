import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow.bold("Digite o link para gerar o QR Code"),
    },
    {
        name: "type",
        description: chalk.yellow.bold("Escolha entre o tipo (1)Imagem ou (2)Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("escolha entre 1 e 2"),
        required: true
    }
];

export default promptQRCode;