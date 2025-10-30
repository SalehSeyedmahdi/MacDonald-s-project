export function RemoveFood(e) {
    const finalPrice = document.querySelector(".final-price");
    const countFood = e.target.closest(".food-item").querySelector(".food-number");
    const currentCount = parseInt(countFood.innerText);
    if (currentCount > 0) {
      countFood.innerText = currentCount - 1;
      const totalPrice = e.target.closest(".food-item").querySelectorAll("span")[1];
      const foodPrice = e.target.closest(".food-item").querySelectorAll("span")[0];
      totalPrice.innerText = foodPrice.innerText * countFood.innerText;
        
      const totalOrder = document.querySelector(".total-order");
      const allTotalPrices = document.querySelectorAll(".total-food-price");
      let sum = 0;
      allTotalPrices.forEach(price => {
        sum += parseInt(price.innerText);
      });
      totalOrder.innerText = sum;
      
      const tax = document.querySelector(".tax");
      tax.innerText = totalOrder.innerText / 100 * 9;

      const discount = document.querySelector(".discount");
      finalPrice.innerText = parseInt(totalOrder.innerText) + parseInt(tax.innerText) - parseInt(discount.innerText);
    }
}