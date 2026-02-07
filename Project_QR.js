import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs';

inquirer
  .prompt([
    /* Pass your questions in here*/
    {
        message : "Type Your URL",
        name: "URL",
    }
  ])
  .then((answers) => { // It will pass an object {URL: www.google.com}
    const url = answers.URL;
    let qr_png = qr.image(url); // Here second option is type, like what type of image we want png or svg -> By default is PNG. This will generate image in Chunks.
    qr_png.pipe(fs.createWriteStream('qr.png')); // This will connect image and we use 'stream' as it Read small chunk and then Write small chunk and Repeat. Rule of pipe -> 'readableStream.pipe(writableStream)'.
    i++;
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    }
  });