const client = require("../index");
var fetch = require("node-fetch");
client.on("messageCreate", function (message) {
  try {
    msg = message.content.toLowerCase();
    split = msg.split(" :");
    slice = split[0].slice(-7);
    sliceShort = split[0].slice(-3);
    if (slice.includes("quoi") || slice.includes("kwa")) {
      randomFeur = [
        "feur !",
        "feur",
        "feur ! <:BigIssou:895042487280881725>",
        "feur <:BigIssou:895042487280881725>",
        "https://media.tenor.com/zvg8w0FkecYAAAAC/feur-theobabac.gif",
        "https://media.tenor.com/CJIntL3axZUAAAAd/feur-meme.gif",
        "driladère !",
      ];
//      message.reply(randomFeur[Math.floor(Math.random() * randomFeur.length)]);
    }
    if (sliceShort.includes("oui") || sliceShort.includes("ui")) {
      randomFeur = ["stiti !"];
  //    message.reply(randomFeur[Math.floor(Math.random() * randomFeur.length)]);
    }
    if (sliceShort.includes("non")) {
      randomFeur = ["bril"];
    //  message.reply(randomFeur[Math.floor(Math.random() * randomFeur.length)]);
    }
    if (sliceShort.includes("noa")) {
      randomFeur = ["de coco ! :coconut:"];
     // message.reply(randomFeur[Math.floor(Math.random() * randomFeur.length)]);
    }
    if (slice.includes("hein")) {
      randomFeur = ["deux !"];
     // message.reply(randomFeur[Math.floor(Math.random() * randomFeur.length)]);
    }
  } catch (error) {
    console.error(error);
  }
});
