//Todos os produtos a cima de 30 reias vão receber um desocnto de 10%

const cart = [10,150,321.99]

let finalValue = 0;
let finalValue2 = 0;
 
let valorTotalDesconto


//Essa função retorna o valor apenas do desconto
function discount(price, discount){

    let result = (price * discount) / 100

    return result;
}



cart.forEach(item => {

    if(item > 30){
      let valueDiscount =   discount(item, 10)
        finalValue -= valueDiscount;//valor com desconto
        
    }else if(item != 0){
        let valueDiscount2 =   discount(item, 0)
        finalValue2 += valueDiscount2//valor sem disconto

    }

    
    finalValue += item
    finalValue2 += item
    
     valorTotalDesconto = finalValue2 - finalValue

});
console.log(` Valortotal sem desconto R$ ${finalValue2.toFixed(2)} reais`)
console.log(`Valor total com desconto R$ ${finalValue.toFixed(2)} reais`)
console.log(`Você ganhou um desconto total de R$ ${valorTotalDesconto.toFixed(2)} reais`)



 
