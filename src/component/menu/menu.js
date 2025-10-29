export function Menu() {
    const menu = document.createElement("div");
    menu.innerHTML = `
    <div class="w-2/3 h-full bg-[#00c8c4] flex flex-col justify-between items-center gap-10 rounded-lg p-5">
        <p class="text-[#ffffff] text-2xl font-bold">رستوران مک دونالد شعبه تهران</p>
        <div class="flex flex-col gap-5 overflow-y-scroll" dir="rtl">
          <div class="w-full flex flex-row gap-5" dir="ltr">  
            <div class="w-1/2 flex flex-row-reverse gap-2 items-center relative bg-[#def3fd] rounded-md p-3 shadow-xl/20 food-item">
              <img src="./public/assets/Berguer.jpg" class="w-1/5 h-6/7 rounded-md">
              <div class="flex flex-col items-end gap-5">
                <div class="flex flex-col items-end">
                  <p class="text-lg font-semibold">همبرگر معمولی</p>
                  <div class="flex gap-1 justify-end text-lg">
                    <p>تومان</p>
                    <span>8000</span>
                  </div>
                </div>
                <div class="w-20 flex text-lg">
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-l-md cursor-pointer remove">-</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center shadow-xl food-number">0</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-r-md cursor-pointer add">+</div>
                </div>
              </div>
              <div class="flex gap-1 absolute bottom-3 left-3">
                <div>تومان</div>
                <span class="total-food-price">0</span>
              </div>
            </div>
            <div class="w-1/2 flex flex-row-reverse gap-2 items-center relative bg-[#def3fd] rounded-md p-3 shadow-xl/20 food-item">
              <img src="./public/assets/Berguer.jpg" class="w-1/5 h-6/7 rounded-md">
              <div class="flex flex-col items-end gap-5">
                <div class="flex flex-col items-end">
                  <p class="text-lg font-semibold">همبرگر مخصوص</p>
                  <div class="flex gap-1 justify-end text-lg">
                    <p>تومان</p>
                    <span>10000</span>
                  </div>
                </div>
                <div class="w-20 flex">
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-l-md cursor-pointer remove">-</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center shadow-xl food-number">0</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-r-md cursor-pointer add">+</div>
                </div>
              </div>
              <div class="flex gap-1 absolute bottom-3 left-3">
                <div>تومان</div>
                <span class="total-food-price">0</span>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-row gap-5" dir="ltr">
            <div class="w-1/2 flex flex-row-reverse gap-2 items-center relative bg-[#def3fd] rounded-md p-3 shadow-xl/20 food-item">
              <img src="./public/assets/Berguer.jpg" class="w-1/5 h-6/7 rounded-md">
              <div class="flex flex-col items-end gap-5">
                <div class="flex flex-col items-end">
                  <p class="text-lg font-semibold">همبرگر معمولی با قارچ و پنیر</p>
                  <div class="flex gap-1 justify-end text-lg">
                    <p>تومان</p>
                    <span>10000</span>
                  </div>
                </div>
                <div class="w-20 flex">
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-l-md cursor-pointer remove">-</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center shadow-xl food-number">0</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-r-md cursor-pointer add">+</div>
                </div>
              </div>
              <div class="flex gap-1 absolute bottom-3 left-3">
                <div>تومان</div>
                <span class="total-food-price">0</span>
              </div>
            </div>
            <div class="w-1/2 flex flex-row-reverse gap-2 items-center relative bg-[#def3fd] rounded-md p-3 shadow-xl/20 food-item">
              <img src="./public/assets/Berguer.jpg" class="w-1/5 h-6/7 rounded-md">
              <div class="flex flex-col items-end gap-5">
                <div class="flex flex-col items-end">
                  <p class="text-lg font-semibold">همبرگر مخصوص قارچ و پنیر</p>
                  <div class="flex gap-1 justify-end text-lg">
                    <p>تومان</p>
                    <span>20000</span>
                  </div>
                </div>
                <div class="w-20 flex">
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-l-md cursor-pointer remove">-</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center shadow-xl food-number">0</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-r-md cursor-pointer add">+</div>
                </div>
              </div>
              <div class="flex gap-1 absolute bottom-3 left-3">
                <div>تومان</div>
                <span class="total-food-price">0</span>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-row gap-5" dir="ltr">
            <div class="w-1/2 flex flex-row-reverse gap-2 items-center relative bg-[#def3fd] rounded-md p-3 shadow-xl/20 food-item">
              <img src="./public/assets/french_fries.png" class="w-1/5 h-6/7 rounded-md">
              <div class="flex flex-col items-end gap-5">
                <div class="flex flex-col items-end">
                  <p class="text-lg font-semibold">سیب زمینی سرخ کرده ویژه</p>
                  <div class="flex gap-1 justify-end text-lg">
                    <p>تومان</p>
                    <span>25000</span>
                  </div>
                </div>
                <div class="w-20 flex">
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-l-md cursor-pointer remove">-</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center shadow-xl food-number">0</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-r-md cursor-pointer add">+</div>
                </div>
              </div>
              <div class="flex gap-1 absolute bottom-3 left-3">
                <div>تومان</div>
                <span class="total-food-price">0</span>
              </div>
            </div>
            <div class="w-1/2 flex flex-row-reverse gap-2 items-center relative bg-[#def3fd] rounded-md p-3 shadow-xl/20 food-item">
              <img src="./public/assets/french_fries.png" class="w-1/5 h-6/7 rounded-md">
              <div class="flex flex-col items-end gap-5">
                <div class="flex flex-col items-end">
                  <p class="text-lg font-semibold">سیب زمینی سرخ کرده</p>
                  <div class="flex gap-1 justify-end text-lg">
                    <p>تومان</p>
                    <span>10000</span>
                  </div>
                </div>
                <div class="w-20 flex">
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-l-md cursor-pointer remove">-</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center shadow-xl food-number">0</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-r-md cursor-pointer add">+</div>
                </div>
              </div>
              <div class="flex gap-1 absolute bottom-3 left-3">
                <div>تومان</div>
                <span class="total-food-price">0</span>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-row gap-5" dir="ltr">
            <div class="w-1/2 flex flex-row-reverse gap-2 items-center relative bg-[#def3fd] rounded-md p-3 shadow-xl/20 food-item">
              <img src="./public/assets/soda.png" class="w-1/5 h-6/7 rounded-md">
              <div class="flex flex-col items-end gap-5">
                <div class="flex flex-col items-end">
                  <p class="text-lg font-semibold">نوشابه</p>
                  <div class="flex gap-1 justify-end text-lg">
                    <p>تومان</p>
                    <span>5000</span>
                  </div>
                </div>
                <div class="w-20 flex">
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-l-md cursor-pointer remove">-</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center shadow-xl food-number">0</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-r-md cursor-pointer add">+</div>
                </div>
              </div>
              <div class="flex gap-1 absolute bottom-3 left-3">
                <div>تومان</div>
                <span class="total-food-price">0</span>
              </div>
            </div>
            <div class="w-1/2 flex flex-row-reverse gap-2 items-center relative bg-[#def3fd] rounded-md p-3 shadow-xl/20 food-item">
              <img src="./public/assets/soda.png" class="w-1/5 h-6/7 rounded-md">
              <div class="flex flex-col items-end gap-5">
                <div class="flex flex-col items-end">
                  <p class="text-lg font-semibold">نوشابه رژیمی</p>
                  <div class="flex gap-1 justify-end text-lg">
                    <p>تومان</p>
                    <span>6000</span>
                  </div>
                </div>
                <div class="w-20 flex">
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-l-md cursor-pointer remove">-</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center shadow-xl food-number">0</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-r-md cursor-pointer add">+</div>
                </div>
              </div>
              <div class="flex gap-1 absolute bottom-3 left-3">
                <div>تومان</div>
                <span class="total-food-price">0</span>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-row gap-5" dir="ltr">
            <div class="w-1/2 flex flex-row-reverse gap-2 items-center relative bg-[#def3fd] rounded-md p-3 shadow-xl/20 food-item">
              <img src="./public/assets/salad.png" class="w-1/5 h-6/7 rounded-md">
              <div class="flex flex-col items-end gap-5">
                <div class="flex flex-col items-end">
                  <p class="text-lg font-semibold">سالاد سزار</p>
                  <div class="flex gap-1 justify-end text-lg">
                    <p>تومان</p>
                    <span>25000</span>
                  </div>
                </div>
                <div class="w-20 flex">
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-l-md cursor-pointer remove">-</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center shadow-xl food-number">0</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-r-md cursor-pointer add">+</div>
                </div>
              </div>
              <div class="flex gap-1 absolute bottom-3 left-3">
                <div>تومان</div>
                <span class="total-food-price">0</span>
              </div>
            </div>
            <div class="w-1/2 flex flex-row-reverse gap-2 items-center relative bg-[#def3fd] rounded-md p-3 shadow-xl/20 food-item">
              <img src="./public/assets/salad.png" class="w-1/5 h-6/7 rounded-md">
              <div class="flex flex-col items-end gap-5">
                <div class="flex flex-col items-end">
                  <p class="text-lg font-semibold">سالاد فصل</p>
                  <div class="flex gap-1 justify-end text-lg">
                    <p>تومان</p>
                    <span>5000</span>
                  </div>
                </div>
                <div class="w-20 flex">
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-l-md cursor-pointer remove">-</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center shadow-xl food-number">0</div>
                  <div class="w-1/3 h-5.5 flex justify-center items-center text-[#ffffff] bg-[#008292] rounded-r-md cursor-pointer add">+</div>
                </div>
              </div>
              <div class="flex gap-1 absolute bottom-3 left-3">
                <div>تومان</div>
                <span class="total-food-price">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return menu;
}