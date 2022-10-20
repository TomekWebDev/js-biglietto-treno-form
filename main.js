const priceKmEuro = 0.21
const u18DiscountPerc = 0.2 
const o65DiscountPerc = 0.4

function calculateTotalPrice(){
    // Selecting the input elements and get the values

    let distanceValue = parseInt(document.getElementById("distance").value);
    console.log("check distance:", distanceValue)
    

    let ageValue = (document.getElementById("ageSelect").value);
    console.log("check age:", ageValue)
    
    let price = distanceValue * priceKmEuro

    switch(ageValue){

        case "under18":
            totalPrice = (price - (price * u18DiscountPerc)).toFixed(2)
            break

        case "over65":
            totalPrice = (price - (price * o65DiscountPerc)).toFixed(2)
            break

        default:
            totalPrice = price

    }



    // if(ageValue < 18){
    //     totalPrice = (price - (price * u18DiscountPerc)).toFixed(2)

    // } else if(ageValue > 65){
    //     totalPrice = (price - (price * o65DiscountPerc)).toFixed(2)

    // } else{
    //     totalPrice = price

    // }

    console.log("Total price:",totalPrice)
}

function testSelect(){
    let ageSelected = (document.getElementById("testselect").value)
    console.log(ageSelected)

    
}