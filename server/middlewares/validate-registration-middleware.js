const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const message = "Fill the input properly";
    extraDetails = err.errors[0].message;
    const error = {
      message,
    };
    console.log(message);
    next(message);
  }
};

module.exports = validate;
