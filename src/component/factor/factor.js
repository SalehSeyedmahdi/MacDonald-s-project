export function Factor() {
    const factor = document.createElement("div");
    factor.innerHTML = `
    <div class="w-106.5 h-100 flex flex-col justify-between bg-[#00c8c4] p-5 rounded-lg text-lg font-medium">
        <div class="flex flex-col gap-5">
          <div class="flex flex-row-reverse justify-between">
            <div dir="rtl">جمع کل سفارشات:</div>
            <div class="flex gap-1">
              <p>تومان</p>
              <span class="total-order">0</span>
            </div>
          </div>
          <div class="flex flex-row-reverse justify-between">
            <div dir="rtl">حق سرویس و کارمزد:</div>
            <div class="flex gap-1">
              <p>تومان</p>
              <span class="tax">0</span>
            </div>
          </div>
          <div class="flex flex-row-reverse justify-between">
            <div dir="rtl">تخفیف:</div>
            <div class="flex gap-1">
              <p>تومان</p>
              <span class="discount">0</span>
            </div>
          </div>
          <div class="w-full flex">
            <div class="w-1/9 flex justify-center items-center bg-[#008292] text-[#ffffff] rounded-l-md p-2 cursor-pointer confirm">تایید</div>
            <input type="text" class="w-9/10 bg-[#ffffff] rounded-r-md p-2 font-normal" dir="rtl" id="code">
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <div class="flex flex-row-reverse justify-between bg-[#ffdb02] rounded-md pl-2 pr-2 p-1">
            <div dir="rtl">مبلغ قابل پرداخت:</div>
            <div class="flex gap-1">
              <p>تومان</p>
              <span class="final-price">0</span>
            </div>
          </div>
          <button class="w-full flex justify-center bg-[#008292] text-[#ffffff] rounded-lg p-3 cursor-pointer refresh">ثبت سفارش</button>
        </div>
      </div>
    `;
    return factor;
}