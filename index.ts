import { ProductController } from "./controller";
import * as minimist from "minimist";
function parseaParams(argv) {
  const parseo = minimist(argv);
  if (parseo.search) {
    return {
      searh: parseo.search,
    };
  } else {
    console.log("no hay search");
  }
}

function main() {
  const argumentos = process.argv.slice(2);
  const argumentosParseados = parseaParams(argumentos);
  console.log(argumentosParseados);
  const productsController = new ProductController();
  productsController
    .processOption(argumentosParseados)
    .then((resultado) => console.log(resultado));
}

main();
