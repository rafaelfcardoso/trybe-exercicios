const express = require("express");
const productInfo = require("./requisicao.js");


const app = express();

app.use(express.json());

app.post('/sales', (req, res) => {
  const obj = JSON.parse(`{
    "productName": "SmarTV",
    "infos": {
      "saleDate": "19/02/2022",
      "warrantyPeriod": 3
    }
  }`)
  const productName = productInfo.filter(productInfo => productInfo.productName.length > 4);
  if (productName) return res.status(200).json(productInfo);

  return res.status(400).json({ "message": "O campo productName é obrigatório"}); 
})

app.listen(3000, () => console.log('ouvindo na porta 3000!'));