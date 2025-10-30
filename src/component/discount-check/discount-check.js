export function DiscountCheck() {

  const finalPrice = document.querySelector(".final-price");

  const totalOrder = document.querySelector(".total-order");
  const discount = document.querySelector(".discount");
  const discountInput = document.getElementById("code");
  

  switch (discountInput.value) {
    case "gold":
      discount.innerText = totalOrder.innerText / 100 * 20;
      break;
    case "silver":
      discount.innerText = totalOrder.innerText / 100 * 15;
      break;
    case "bronze":
      discount.innerText = totalOrder.innerText / 100 * 10;
      break;
    default:
      discount.innerText = 0;
      discountInput.value = "تخفیف نامعتبر";
      break;
  }

  const tax = document.querySelector(".tax");
  finalPrice.innerText = parseInt(totalOrder.innerText) + parseInt(tax.innerText) - parseInt(discount.innerText);
}