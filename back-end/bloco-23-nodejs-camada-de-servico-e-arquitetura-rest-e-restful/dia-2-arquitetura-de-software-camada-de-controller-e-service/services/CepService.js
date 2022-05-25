// service/CepService.js

/* ... */

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

/* ... */