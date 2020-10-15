const buildResponseFromJoiErrors = (joiError) => {
  const errorObject = {};
  joiError.details.forEach((detail) => {
    errorObject[detail.context.key] = detail.message;
  });

  return errorObject;
};

module.exports = buildResponseFromJoiErrors;
