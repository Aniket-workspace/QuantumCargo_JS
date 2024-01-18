var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}


// Ship
function calculatePrice() {
  const orgName = document.getElementById("orgName").value;
  const email = document.getElementById("email").value;
  const contactNo = document.getElementById("contactNo").value;
  const category = document.getElementById("category").value;
  const transport = document.getElementById("transport").value;
  const weight = parseFloat(document.getElementById("weight").value);
  const distance = parseFloat(document.getElementById("distance").value);
  let pricePerKm;

  switch (transport) {
    case "byAir":
      pricePerKm = 100;
      break;
    case "byWater":
      pricePerKm = 30;
      break;
    case "byRoad":
      pricePerKm = 50;
      break;
    default:
      pricePerKm = 0;
  }
  var totalPrice = weight * distance * pricePerKm;
  var orderCard = document.createElement("div");
  orderCard.classList.add("order-card");
  orderCard.innerHTML = `
    <h3>Order Details</h3>
    <table>
        <tr>
            <td><p><strong>Name of Organization:</strong></p></td>
            <td><p>${orgName}</p></td>
        </tr>

        <tr>
            <td><p><strong>Type of Transport:</strong></p></td>
            <td><p>${transport}</p></td>
        </tr>

        <tr>
            <td><p><strong>Email:</strong></p></td>
            <td><p>${email}</p></td>
        </tr>

        <tr>
            <td><p><strong>Total Price:</strong></p></td>
            <td><p>${totalPrice.toFixed(2)} Rs.</p></td>
        </tr>
    </table>
    `;
    

  document.getElementById("orderCards").appendChild(orderCard);
  document.getElementById("orderForm").reset();
}
