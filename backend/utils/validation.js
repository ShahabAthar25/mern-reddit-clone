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
    name: Joi.string().required().min(3).max(140),
  });

  return schema.validate(data);
};

module.exports.postValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().min(3),
    body: Joi.string(),
    image: Joi.string(),
    subRedditId: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports.commentValidation = (data) => {
  const schema = Joi.object({
    body: Joi.string(),
    postId: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports.emailValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(3).max(60).email(),
  });

  return schema.validate(data);
};

module.exports.usernameValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(60),
  });

  return schema.validate(data);
};
