import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ListComponent } from "./list/list.component";
import { ListItemComponent } from "./list/list-item.component";

import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [AppComponent, ListComponent, ListItemComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
