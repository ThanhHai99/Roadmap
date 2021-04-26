import { Component } from "@angular/core"

@Component({
    selector: "sinhvien",
    templateUrl: "./sinhvien.component.html",
    styleUrls: ["./sinhvien.component.css"],
})

export class SinhVienComponent{
    mauchu: string;
    aoden: boolean;
    constructor() {
        this.mauchu = "red";
        this.aoden = true;
    }

    clickH1(e: any) {
        console.log(e);
    }
}
