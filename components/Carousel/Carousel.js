class Carousel {
  constructor(carousel) {
    // 1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    this.carousel = carousel
    //this.buttons = this.carousel.getElementsByTagName('div');
    this.leftButton = this.carousel.querySelector('.leftButton');
    this.rightButton = this.carousel.querySelector('.rightButton');

    // 2. You will need to grab a reference to all of the images
    this.images = this.carousel.querySelectorAll('img');

    // 3. Create a current index
    this.images = Array.from(this.images);

    // 4. Those buttons are gonna need some click handlers.
    //this.buttons.addEventListener('click', changeImage(direction));
    this.leftButton.addEventListener('click', changeImage());
    this.rightButton.addEventListener('click', changeImage());

  }

  changeImage() {
    this.leftButton.forEach(click => this.images[click--]);
    this.rightButton.forEach(click => this.images[click++]);

    /*
    for (let i = 0; i < this.images.length; i++) {
      this.rightButton[i]
      this.leftButton[i + 1]
    }
    */

    /*
    if ( click leftButton ) {
      change index of this.images by i--
    }
    if ( click rightButton ) {
       change index of this.images by i++
    }
    */
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
