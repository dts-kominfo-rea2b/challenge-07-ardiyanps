const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const dataIXX = await promiseTheaterIXX();
    const dataVGC = await promiseTheaterVGC();

    hasil = dataIXX.concat(dataVGC);

    return hasil.filter((x) => x.hasil == emosi).length;
  } catch (error) {
    return console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
