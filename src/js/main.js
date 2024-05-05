export default function main() {
  function getRandomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }
  function activeItem() {
    const items = document.querySelectorAll('.item:not(.active)')
    const randomNumber = getRandomNumber(0, items.length)
    const active = document.querySelector('.active').classList.remove('active')
    items[randomNumber].classList.add('active')
  }
  setInterval(activeItem, 1000)
}
