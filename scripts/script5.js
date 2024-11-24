import { mealSelect } from "./scrip.js";

export function createElement(type, textContent, className) {
  const element = document.createElement(type);
  element.textContent = textContent;
  element.className = className;
  return {
    element,
    appendTo: (mealSelect) => {
      mealSelect.appendChild(element);
    },
  };
}
