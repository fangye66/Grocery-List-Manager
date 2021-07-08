import { Component } from '@angular/core';


@Component({
  selector: 'app-grocery',
  templateUrl: './app.grocery.html',
  styleUrls: [
      '../assets/css/bootstrap.min.css'
  ]
})

export class GroceryComponent {
  task!: string;
  tasks: {name: string, strike : boolean}[] = [];

  onClick(){
  	this.tasks.push({name: this.task, strike: false});
  	this.task = '';
  }
}
