// service/CepService.js

const create = async (cep) => {
  // testamos o REGEX de nosso CEP
  const CEP_REGEX = /\d{5}-?\d{3}/;
  if (!CEP_REGEX.test(cep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      },
    };
  }

  // Verificamos se o CEP já foi cadastrado. Aqui, podemos usar a mesma função que tínhamos antes.
  const existingCep = await Cep.findAddressByCep(cep);
  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }

  const createdCep = await Model.create(cep);

  // Caso recebamos null, é porque o CEP não foi encontrado pela API
 if (!createdCep) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não existe',
      },
    };
  }
  
  return createdCep;
};

const findAddressByCep = async (searchedCep) => {
  // Começamos buscando o CEP no banco de dados
  const cep = await Cep.findAddressByCep(searchedCep);

  // Caso encontremos, retornamos sem consultar a API
  if (cep) {
    return cep;
  }

  // Caso o CEP não exista no banco de dados, buscamos na API
  const cepFromApi = await ViaCep.lookupCep(searchedCep);

  // Caso o CEP não exista na API,
  // retornamos um erro dizendo que
  // o CEP não foi encontrado
  if (!cepFromApi) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  // Caso o CEP exista na API, pedimos ao model
  // que armazene-o no banco e retornamos
  // o resultado
  return Cep.create(cepFromApi);
};

module.exports = create;