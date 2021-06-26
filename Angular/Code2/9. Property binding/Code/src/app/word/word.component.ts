import { Component } from "@angular/core";

@Component ({
    templateUrl: './word.component.html',
    selector: "app-word",
    styleUrls: ['./word.component.css']
})

export class WordComponent {
    en: string = "Hello";
    vi: string = "Xin chao";
    imgUrl: string = "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/181358419_302576574698986_8637600552126454279_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=b9115d&_nc_ohc=1F_nZfeNT_UAX-V9kQc&_nc_ht=scontent.fhan2-4.fna&oh=f0115783bc0d5ec14f5ec614636dbb38&oe=60BFAABE";
    forgot: boolean = true;
};
