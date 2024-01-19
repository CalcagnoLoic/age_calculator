export const showingErrorMessage = (
  elem: HTMLElement,
  text: string,
  color: string,
) => {
  (elem.previousElementSibling as HTMLElement).style.color = color;
  (elem.nextElementSibling as HTMLElement).innerText = text;
  elem.style.border = `2px solid ${color}`;
};
