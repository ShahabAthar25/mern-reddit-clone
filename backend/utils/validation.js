const Joi = require("@hapi/joi");

module.exports.registerValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().required().min(3).max(60),
    email: Joi.string().required().min(3).max(60).email(),
    password: Joi.string().required().min(8),
  });

  return schema.validate(data);
};

module.exports.loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  });

  return schema.validate(data);
};

module.exports.subRedditValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(60),
  });

  return schema.validate(data);
};

module.exports.postValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().min(3).max(60),
    body: Joi.string(),
    photo: Joi.string(),
    subreddit: Joi.string().required().min(3).max(60),
  });

  return schema.validate(data);
};
