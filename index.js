const container = document.querySelector('.container')
const leftButton = container.querySelector('.left-button')
const rightButton = container.querySelector('.right-button')
const preview = container.querySelector('.preview-list')
const description = container.querySelector('.description-list')
const slidesCount = preview.querySelectorAll('li').length

let activeSlideIndex = 0

description.style.left = `-${(slidesCount - 1) * 100}vw`

leftButton.addEventListener('click', () => {
  changeSlide('left')
})

rightButton.addEventListener('click', () => {
  changeSlide('right')
})

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'ArrowLeft') {
    changeSlide('left')
  } else if (evt.key === 'ArrowRight') {
    changeSlide('right')
  }
})

function changeSlide(direction) {
  if (direction === 'left') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1
    }
  } else if (direction === 'right') {
    activeSlideIndex++
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0
    }

  }

  const width = container.clientWidth

  preview.style.transform = `translateX(-${activeSlideIndex * width}px)`
  description.style.transform = `translateX(${activeSlideIndex * width}px)`
}

