
const allBtn = document.getElementsByClassName('add-btn');

let count = 0;
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        // count
        count++;
        setInnerText('cart-count', count);

        

       

        // get the card text and put it on the place container
        const placeName = event.target.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;

        const selectedContainer = document.getElementById('selected-place-container');
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText = placeName;
        const p2 = document.createElement('p');
        p2.innerText = price + ' $';

        event.target.parentNode.parentNode.style.backgroundColor = 'gray';
        event.target.setAttribute('disabled', true)
        li.appendChild(p);
        li.appendChild(p2);

        // get the budget
        const budget = document.getElementById('budget').innerText;
        const convertedBudget = parseInt(budget);

        if(convertedBudget - parseInt(price) < 0){
            alert('Low budget ');
            return;
            
        }
        

        document.getElementById('budget').innerText = convertedBudget - parseInt(price); 

        selectedContainer.appendChild(li);

        // total cost 1st method

        // const totalCost = document.getElementById('total-cost').innerText;
        // const convertTotal = parseInt(totalCost);

        // // first method
        // // document.getElementById('total-cost').innerText = convertTotal + parseInt(price);

        // // second method by using function
        // sum = convertTotal + parseInt(price);
        // setInnerText('total-cost', sum);

        // total cost 2nd method

        totalCost('total-cost', price)

        // grand total cost first method

        // const grandTotal = document.getElementById('grand-total').innerText;
        // const convertGrandTotal = parseInt(grandTotal);

        //  // first method
        // // document.getElementById('grand-total').innerText = convertTotal + parseInt(price);

        // // second method by using function
        // sum2 = convertGrandTotal + sum;

        // setInnerText('grand-total', sum);

        // grand total second method

        grandTotal('others')



    })
}

function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const convertTotal = parseInt(totalCost);
    sum = convertTotal + parseInt(value);
    setInnerText(id, sum)
}
function grandTotal(category) {
    const totalCost = document.getElementById('total-cost').innerText;
    const convertTotal = parseInt(totalCost);

    if(category === 'bus'){
        setInnerText('grand-total', convertTotal + 100 )
    }
    else if(category === 'train'){
        setInnerText('grand-total', convertTotal - 200 )
    }
    else if(category === 'flight'){
        setInnerText('grand-total', convertTotal + 500)
    }
    else{
        setInnerText('grand-total', convertTotal);
    }
    
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;

}