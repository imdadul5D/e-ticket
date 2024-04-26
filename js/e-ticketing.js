const buttons = document.querySelectorAll('.ticket-btn');
for (const button of buttons){
    button.addEventListener('click', function(){
    button.classList.add('bg-lime-500');
    const seatLeftElement = document.getElementById('seat-left');
    const seatLeftText = seatLeftElement.innerText;
    let seatLeft = parseInt(seatLeftText);
    seatLeft = seatLeft - 1;
    seatLeftElement.innerText = seatLeft;
    
    const seatCountElement = document.getElementById('seat-count');
    const seatCountText = seatCountElement.innerText;
    let seatCount = parseInt(seatCountText);
    
    seatCount = seatCount + 1;
    seatCountElement.innerText = seatCount;


    const ticket_detail = document.getElementById('ticket_detail');

    const p = document.createElement('p');
    p.innerText = button.innerText +'Economy' + 550;

    ticket_detail.appendChild(p);
    // Total Ticket Price
    const totalPriceElement = document.getElementById('total-price');
    const totalPriceText = totalPriceElement.innerText;
    const totalPrice = parseInt(totalPriceText);
    totalPriceElement.innerText = totalPrice + 550;
    // Grand Total Ticket Price 
    const grandTotalElement = document.getElementById('grand-total');
    const grandTotalText = grandTotalElement.innerText;
    const grandTotal = parseInt(grandTotalText);
    grandTotalElement.innerText = grandTotal + 550; 
  })  
}


const passengerName = document.getElementById('name-input');
const contactNumber = document.getElementById('number-input');
const emailID = document.getElementById('email-input');
const nextButton = document.getElementById('next-btn');

// Add event listeners to the input fields
passengerName.addEventListener('input', enableNextButton);
contactNumber.addEventListener('input', enableNextButton);
emailID.addEventListener('input', enableNextButton);

function enableNextButton() {
  if(passengerName.value.length > 0 && contactNumber.value.length > 0 && emailID.value.length > 0){
    document.getElementById('next-btn').removeAttribute('disabled');
  }
  else {
    document.getElementById('next-btn').setAttribute('disabled', true);
  }
}

const seatNumbers = document.querySelectorAll('.ticket-btn'); // replace with the actual selector for the seat number elements
let selectedSeats = [];

function selectSeat(seatNumber) {
  if (selectedSeats.length <= 4) {
    seatNumber.setAttribute('disabled');
  }
  else {
    alert('You can only select up to 4 seats at a time.');
  }
}