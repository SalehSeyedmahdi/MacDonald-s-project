import { Container } from './component/container-block/container';
import { AddFood } from './component/add-food/add-food';
import './style.css'

const app = document.getElementById('app');

app.append(Container());

const addBtn = document.querySelectorAll(".add");
addBtn.forEach(btn => {
    btn.addEventListener("click", AddFood);
});