function errors(error, req, res, next) {
  let status = 500;
  let message = "Internal Server Error";
  console.log(error, "<< error di function error");

  if (
    error.name === "SequelizeValidationError" ||
    error.name === "SequelizeUniqueConstraintError"
  ) {
    status = 400;
    message = error.errors[0].message;
  } else if (error.name === "Bad Request") {
    status = 400;
    message = error.message;
  } else if (error.name === "Unauthorized") {
    status = 401;
    message = error.message;
  }

  res.status(status).json({ message });
}

module.exports = errors;
