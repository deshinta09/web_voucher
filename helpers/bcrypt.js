const bcrypt = require("bcryptjs");

const hashedPassword = (password) => bcrypt.hashSync(password, 8);
const comparePassword = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = {
  hashedPassword,
  comparePassword,
};
