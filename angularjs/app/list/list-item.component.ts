import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "list-item",
    templateUrl: "list-item.component.html",
    styleUrls: ["list-item.component.css"],
    inputs: ["codename"]
})
export class ListItemComponent {
	codename: any = 0

	@Output()
    up: EventEmitter<number> = new EventEmitter();

    @Output()
    down: EventEmitter<number> = new EventEmitter();

	fup(){
		this.up.emit(this.codename);
	}

	fdown(){
		this.down.emit(this.codename);
	}
}