import { Component } from '@angular/core';
import { PostService} from '../services/post.service';

@Component({
  selector: 'user',
  template: `<h1>Hello </h1>
<h1> Name {{name}}</h1>
<h1> Email: {{email}}</h1>
<h1> Address: {{address.street}} {{address.city}}, {{address.state }}</h1>
<h1> Hobbies: {{hobbies}}</h1>

<button (click)="toggleHobbies()"> {{showHobbies?"Hide Hobbies":"Show Hobbies"}}</button>

<div *ngIf="showHobbies">
	<ul>
		<li *ngFor="let hobby of hobbies; let i=index">
		{{hobby}}  <button (click)="deleteHobby(i)" > X</button> </li>  
	</ul>
 </div>

 <hr />

 <form (submit)="addHobby(hobby.value)">
 	<label for="">Add Hobbie:</label><br />
 	<input type="text" #hobby /><br />
 </form>

<hr />
<h3>Edit User</h3>
<form action="">
	<label for="name">Name</label>
	<input type="text" name="name" [(ngModel)]="name" /><br />
	<label for="email">Email:</label>
	<input type="text" name=email [(ngModel)]="email"/><br />
	<label for="address.street">Street:</label>
	<input type="text" name=address.street [(ngModel)]="address.street"/> <br />
	<label for="address.city">City</label>
	<input type="text" name=address.city [(ngModel)]="address.city"/><br />
	<label for="address.state">State:</label>
	<input type="text" name=address.state [(ngModel)]="address.state"/><br />

</form>
`,
providers:[PostService];
})
export class UserComponent  { 
		
	 name : string;
	email :string;
	address : address;
	hobbies: string[];
	showHobbies: boolean;

	 constructor (private postService: PostService) {
	 	console.log("hola marina");
	 	this.name = 'Sam smith';
		this.email = 'perlamarina@gmail.com';
		this.address ={
			street:"Pelicano 2005",
			city:"Guadalajara",
			state:"Jalisco"
		}
		this.hobbies= ["Sports", "Music", "Movies"];
		this.showHobbies= false;
		
		//call the function, return a observable so, subscribe
		this.postService.getPost().subscribe( post=>{

			console.log(post);
		});

	 }
	 
	 toggleHobbies(){
	 	if(this.showHobbies==true){
	 		this.showHobbies=false;
	 	}
	 	else{
	 		this.showHobbies=true;	
	 	}
	 	
	 }

	 addHobby(hobby){
	 	console.log(hobby);
	 	this.hobbies.push(hobby);
	 }

	 deleteHobby(i){
	 	this.hobbies.splice(i,1);
	 }
}

interface address{
	street: string;
	city:string;
	state:string;
}