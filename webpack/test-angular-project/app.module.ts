import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TestComponent } from "./test";


@NgModule({
    declarations: [TestComponent],
    imports: [BrowserModule],
    bootstrap: [TestComponent],
})
export class MyModule {

}