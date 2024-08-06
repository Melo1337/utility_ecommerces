import qr from "qrcode-terminal";
import chalk from "chalk";

function handle(err, result) {
    if (err) console.log(chalk.red.italic("error on aplication"));
    
    const isSmal = result.type == 2;
    qr.generate(result.link, {small: isSmal}, (qrcode)=>{
        console.log(chalk.green("QR CODE gerado com sucesso:\n"))
        console.log(qrcode)
    })
}

export default handle;