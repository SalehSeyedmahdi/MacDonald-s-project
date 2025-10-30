import { Factor } from "../factor/factor";
import { Menu } from "../menu/menu";

export function Container() {
    const container = document.createElement("div");
    container.className = "w-full h-dvh bg-[#00688e] flex flex-row gap-10 p-5 font-[Vazir]";
    container.append(Factor(), Menu());
    return container;
}