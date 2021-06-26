import { Component, OnInit } from "@angular/core";

@Component ({
    templateUrl: 'user.component.html',
    selector: "app-user",
    styleUrls: ['user.component.css']
})

export class UserComponent implements OnInit {
    name = "";
    ngOnInit() {
    };
};
