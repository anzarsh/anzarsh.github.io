import { Component } from "@angular/core";

class rating_name{
	rating: number
	name: any
}

@Component({
    moduleId: module.id,
    selector: "my-list",
    templateUrl: "list.component.html",
    styleUrls: ["list.component.css"],

})
export class ListComponent {
	list: rating_name[] = [ {rating:0, name:"Россия"},
							{rating:0, name:"Германия"},
							{rating:0, name:"Мексика"},
							{rating:0, name:"Новая Зеландия"},
							{rating:0, name: "Португалия"}
						  ]
	

	sort(){
		this.list.sort(function(a:rating_name, b:rating_name):number{
			return b.rating - a.rating;
		});
	}

	ffup(num){
		let i: number;
		for(i = 0; i<this.list.length; i++){
			if(this.list[i].name === num){
				this.list[i].rating++;
			}
		}
		this.sort();
	}

	ffdown(num){
		let i: number;
		for(i = 0; i<this.list.length; i++){
			if(this.list[i].name === num){
				this.list[i].rating--;
			}
		}
		this.sort();
	}
}