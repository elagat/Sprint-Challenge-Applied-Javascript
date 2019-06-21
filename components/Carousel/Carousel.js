class Carousel {
  constructor(carousel) {
    // 1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    this.carousel = carousel;
    this.leftButton = this.carousel.querySelector('.leftButton');
    this.rightButton = this.carousel.querySelector('.rightButton');

    // 2. You will need to grab a reference to all of the images
    this.images = this.carousel.getElementsByTagName('img');

    // 3. Create a current index
    this.images = Array.from(this.images);

    // 4. Those buttons are gonna need some click handlers.
    this.leftButton.addEventListener('click', changeImage(i++));
    this.rightButton.addEventListener('click', changeImage(i--));

  }

  changeImage(direction) {
    
  }
}

let carousel = document.querySelector('.carousel');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
