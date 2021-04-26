import { Component } from "@angular/core";

@Component({
    selector: "app-nhanvien",
    template: `
        <div class="nhanvien">
            <h3>ho ten: {{ hoten }}</h3>
            <h3>nam sinh: {{ namsinh }}</h3>
            <h3>So thich</h3>
            <h4>Game: {{ sothich.game }}</h4>
            <h4>Mon hoc: {{ sothich.monhoc }}</h4>
            <h3>Phan tu dau tien: {{ mang[0] }} - Do dai = {{ mang.length }}</h3>
            <img src="{{ hinh }}"/>
        </div>
    `,

})

export class NhanVienComponent {
    hoten: string = "Tran Viet Thanh Hai";
    namsinh: number = 1999;
    sothich = { game: "LOL", monhoc: "toan" };
    mang: string[] = ["One", "Two", "Three"];
    hinh: string = "https://www.anphatpc.com.vn/media/news/0812_wp3850825-4k-pc-wallpapers.jpg";
};
