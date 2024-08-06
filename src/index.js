import 'dotenv/config'
import prompt from "prompt";
import mainPrompt from "./prompt/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.mjs";

async function main() {

    prompt.get(mainPrompt, async (err, choose) => {
        if (choose.select == 1) createQRCode();
        if (choose.select == 2) createPassword();
    })

    prompt.start()
};

main();