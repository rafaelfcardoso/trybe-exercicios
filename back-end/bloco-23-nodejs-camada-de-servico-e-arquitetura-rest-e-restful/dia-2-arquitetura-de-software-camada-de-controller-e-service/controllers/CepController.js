// CepController.js

const service = require('../services/CepService');

const create = rescue(async (req, res, next) => {
  // Removemos as validações extras do Joi. precisaremos apenas que ele valide o CEP
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
  }).validate(req.body);

  // if (error) return next(error);

  // const newCep = await service.create(req.body);

  // if (newCep.error) {
  //   // Iniciamos o fluxo de erro
  //   return next(newCep.error);
  // }

  // res.status(201).json(newCep);
});

module.exports = create;