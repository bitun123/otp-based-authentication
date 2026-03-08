const ImageKit = require("@imagekit/nodejs");

const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});



async function uploadFile({ buffer, filename, folder }) {

  try {

    const result = await client.files.upload({
      file: buffer.toString("base64"),
      fileName: filename,
      folder: folder
    });

    return result.url;

  } catch (error) {

    console.error("ImageKit Upload Error:", error);
    throw new Error("Image upload failed");

  }

}

module.exports = {
  uploadFile
};
