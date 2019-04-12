class Carousel {
    constructor(element){
        this.element = element;
        this.currentIndex = 1;
        this.leftBtn = this.element.querySelector('.left-button');
        this.rightBtn = this.element.querySelector('.right-button');
        this.images = this.element.querySelectorAll('img');
        this.images.forEach( img => img.style.display = 'none');
        this.images[this.currentIndex -1].style.display = 'block';
        this.leftBtn.addEventListener('click', () => this.leftSelect());
        this.rightBtn.addEventListener('click', () => this.rightSelect());
        
    }
    rightSelect(){
        if(this.currentIndex < this.images.length){
            this.currentIndex += 1;
        } else {
            this.currentIndex = 1;
        }
        this.images.forEach( img => img.style.display = 'none');
        this.images[this.currentIndex -1].style.display = 'block'; 
    }
    leftSelect(){
        if(this.currentIndex == 1){
            this.currentIndex = this.images.length; 
        } else {
            this.currentIndex -= 1;
        }
        this.images.forEach( img => img.style.display = 'none');
        this.images[this.currentIndex - 1].style.display = 'block';
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/