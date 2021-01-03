class Caroussel{
    constructor(width,imgArray) {
        if (width !== undefined){
            this.width = width;
        }
        else{
            this.width = 50;
        }
        if (imgArray !== undefined){
            this.array = imgArray;
        }
        else{
            this.width = 50;
        }
        this.img = document.getElementById("carousselImg");
        this.img.style.width = this.width + "%";
    }
  /*  addImg(img){
        this.array.push(img);
    }*/
    display(index){

        if(index !== undefined){
            if (index === this.array.length) {
                this.img.src = "../img/"+this.array[index];
                this.img.alt = this.array[index];
                setTimeout(this.display, 5000, 0);
            }
            else{
                this.img.src = "../img/"+this.array[index];
                this.img.alt = this.array[index];
                setTimeout(this.display, 5000, index+1);
            }
        }
        else {
            this.img.src = "../img/"+this.array[0];
            this.img.alt = this.array[0];
            setTimeout(this.display, 5000, 1);
        }
    }
}

let imgArray = ("bomb.png","cadran.png","flag.png","flagInterrogation.png","hours.png","minute.png","seconds.png", "timer.png");

let Cour = new Caroussel(75,imgArray);

Cour.display();

