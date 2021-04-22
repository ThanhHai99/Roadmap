abstract class Laptop {
    public keyboard(): void {
        console.log("Laptop.keyboard");
    };

    public abstract mainboard(p1: string): string;
    
    public chipset(): void {
        console.log("Laptop.chipset");
    };
};

class LaptopDell extends Laptop{
    public keyboard(): void {
        console.log("LaptopDell.keyboard");
    };

    public mainboard(p1: string): string {
        return p1;
    };
};

let laptop1: Laptop = new LaptopDell();
laptop1.keyboard();
console.log(laptop1.mainboard("mainbord-Dell"));
laptop1.chipset();
