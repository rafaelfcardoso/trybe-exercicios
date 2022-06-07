// CepModel.js
// Importamos o axios
const axios = require('axios');

// Importamos a conexão com o banco de dados
const connection = require('./connection');

// Importamos a função que criamos em DistrictModel.js
const getDistrictId = require('./DistrictModel');

// Editamos nossa função create. Ela agora só precisa receber o CEP
const create = async (rawCep) => {
  // busca os dados do CEP na API externa
  const cepData = await axios.get(`https://viacep.com.br/ws/${rawCep}/json/`);
  
  // Caso o CEP não exista, retorna null
  if (!cepData) return null;

  // Buscamos as informações que queremos a respeito do CEP e do seu bairro
  const { logradouro, bairro, localidade, uf } = cepData.data;

  // Ajustamos o conteúdo, removendo o -
  const cep = rawCep.replace(/-/ig, '');

  // Buscamos o ID do bairro, caso exista, ou cadastramos e retornamos o ID, caso não exista
  const districtId = await getDistrictId(bairro, localidade, uf);

  const query = 'INSERT INTO ceps (cep, logradouro, bairro_id) VALUES (?, ?, ?)';

  // Fazemos a inserção do dado na tabela de ceps
  await connection.execute(query, [cep, logradouro, districtId]);

  return { cep: rawCep, logradouro, bairro, localidade, uf };
};

module.exports = create;