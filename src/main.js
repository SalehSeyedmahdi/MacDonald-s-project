import { Container } from './component/container-block/container';
import { AddFood } from './component/add-food/add-food';
import { RemoveFood } from './component/remove-food/remove-food';
import { DiscountCheck } from './component/discount-check/discount-check';
import { RefreshPage } from './component/refresh-page/refresh-page';
import './style.css'

const app = document.getElementById('app');

app.append(Container());

const addBtn = document.querySelectorAll(".add");
addBtn.forEach(btn => {
    btn.addEventListener("click", AddFood);
});

const removeBtn = document.querySelectorAll(".remove");
removeBtn.forEach(btn => {
    btn.addEventListener("click", RemoveFood);
});

const confirmBtn = document.querySelector(".confirm");
confirmBtn.addEventListener("click", DiscountCheck);


const refreshBtn = document.querySelector(".refresh");
refreshBtn.addEventListener("click", RefreshPage);