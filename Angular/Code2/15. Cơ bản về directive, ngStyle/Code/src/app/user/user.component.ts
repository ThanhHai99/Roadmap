import { Component } from "@angular/core";

@Component ({
    templateUrl: 'user.component.html',
    selector: "app-user",
    styleUrls: ['user.component.css']
})

export class UserComponent {
    name = "";
    evenStyle = { color: 'red', fontSize: '40px' };
    oddStyle = { color: 'blue', fontSize: '20px' };
    isHighlight = true;
    currentClass = { circle: !this.isHighlight, square: this.isHighlight };
};
