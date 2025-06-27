const calculate = ()=>{
    const p = $("#baseprice").val()
    console.log("Base Price",p)

    const vatRate = 7;
    const vat = (p * vatRate) / 100;

    console.log("Vat",vat)

    const total = parseFloat(p)+vat;
    console.log("Total price ", total);


    $("#result").html(`
            <p>Base Price : ${p}</p>
            <p>VAT 7%:${vat.toFixed(2)}</p>
            <p>Total Price:${total} </p>
        `)
    
}


const calculateReverse = ()=>{
    const totalPrice = $("#totalPrice").val()
    console.log("Total Price",totalPrice)

    const originalPrice = totalPrice  / (7/100)
    console.log("Total price ", totalPrice);

    const vatRate = 7;
    const vat = totalPrice - originalPrice;

    console.log("Vat",vat)

    


    $("#result").html(`
            <p>Total Price : ${totalPrice}</p>
            <p>VAT 7%:${vat.toFixed(2)}</p>
            <p>Excluding Vat:${total} </p>
        `)
    
}