import { app } from "./app";

const port: number = 5000;

function main() {
    app.listen(port);
    console.log("lzEditMap Backend UP! ✨🚀");
    console.log("Server is listening on port:", port);
}

main();