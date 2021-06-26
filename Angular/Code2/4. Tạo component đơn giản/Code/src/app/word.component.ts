import { Component } from "@angular/core";

@Component ({
    template: "<h2>This is Word Component</h2>",
    selector: "app-word",
    styles: [`
        h2 {
            color: red
        }    
    `]
})

export class WordComponent {};
