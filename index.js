import cowsay from "cowsay"
import info from "./information.cjs"

console.log(
     cowsay.say({
         text : `Hello this is ${info.name} from ${info.campus}`,
   }))