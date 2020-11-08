import { Component } from "@angular/core";

@Component({
    selector: 'test',
    templateUrl: './test.html',
    styleUrls: ['./test.css']
})
export class TestComponent {
    public description: string = "This is my Test component";
}