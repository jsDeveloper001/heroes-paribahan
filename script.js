const totalTickets = document.getElementById("totalTickets");
const ticketPrice = document.getElementById("ticketPrice");
const totalPrice = document.getElementById("totalPrice");
const grandTotal = document.getElementById("grandTotal");
const totalTicketContainer = document.getElementById("totalTicketContainer");

const bookedTickets = [];

function selectSeat(seat) {
  if (bookedTickets.length <= 3) {
    if (!bookedTickets.includes(seat)) {
      makeSelected(seat);
      updateAvailableSeats("totalSeats");
      createElementandUpdatePrice(seat);
      bookedTickets.push(seat);
    } else {
      alert("This seat already booked");
    }
  } else {
    alert("you can book maximum 4 ticket");
  }
  totalTickets.innerText = bookedTickets.length;
}

// set the background color for selected tickets
function makeSelected(ticketId) {
  return document.getElementById(ticketId).classList.add("bg-[#1DD101]");
}

// update the available ticket from the total tickets
function updateAvailableSeats(availableSeats) {
  return (document.getElementById(availableSeats).innerText =
    parseInt(document.getElementById(availableSeats).innerText) - 1);
}

// create booking history
function createElementandUpdatePrice(seat) {
  const seatNumber = document.createElement("p");
  seatNumber.innerText = seat;
  seatNumber.classList.add("font-normal", "text-base", "text-[#03071299]");

  const Price = document.createElement("p");
  Price.innerText = ticketPrice.innerText;
  Price.classList.add("font-normal", "text-base", "text-[#03071299]");

  const ticketClass = document.createElement("p");
  ticketClass.innerText = "Economy";
  ticketClass.classList.add("font-normal", "text-base", "text-[#03071299]");

  return (
    totalTicketContainer.append(seatNumber),
    totalTicketContainer.appendChild(ticketClass),
    totalTicketContainer.appendChild(Price)
  );
}
