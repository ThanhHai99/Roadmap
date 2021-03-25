class Laptop {
    keyboard() {
        console.log("Laptop.keyboard");
    };

    chipset() {
        console.log("Laptop.chipset");
    };
};

class LaptopDell extends Laptop {
    keyboard() {
        console.log("LaptopDell.keyboard");
    };
    mainboard(p1) {
        return p1;
    };
};

let laptop1 = new LaptopDell();
laptop1.keyboard();
console.log(laptop1.mainboard("mainbord-Dell"));
laptop1.chipset();
