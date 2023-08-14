
async function getAllCurrency (request, response, next) {
    
    try {    
    let currencyData = await fetch(process.env.THIRD_PARTY_URL + 'markets/summaries')
    let responseData = await currencyData.json()
    // let fromServer = responseJson.myString
    console.log(responseData.length,responseData.length !== 0,  "respon")
    if (responseData.length !== 0) {
      console.log(responseData, "responseData")
        response.send({ message: 'currency Details', data : responseData });   
      } else {
        console.log(responseData.length, "responseData.length")
        response.send(new ErrorBuilder(400, 'There are No Accounts', 'please create account'));
      }
    }catch(err) {
        
    response.send(new ErrorBuilder(400, err.message, err));

}
  }


  async function getSpecficCurrency (request, response, next) {
    
    const  {currency} = request.params;
    
    try {    
    let currencyData = await fetch(process.env.THIRD_PARTY_URL + `markets/${currency}/summary`)
    let responseData = await currencyData.json()
    if (!responseData.hasOwnProperty('code')) {
        response.send({ message: 'currency Details', data : responseData });   
      } else {
        console.log(responseData.length, "responseData.length")
        response.send(new ErrorBuilder(400, 'There are No Currency summary', null));
      }
    }catch(err) {
        
    response.send(new ErrorBuilder(400, err.message, err));

}
  }


  module.exports = {getAllCurrency , getSpecficCurrency}