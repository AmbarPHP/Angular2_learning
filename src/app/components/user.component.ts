import { Component } from '@angular/core';
import { PostService} from '../services/post.service';

@Component({
	moduleId : module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
	providers: [PostService]
})
export class UserComponent  { 
		
	name : string;
	email :string;
	address : address;
	hobbies: string[];
	showHobbies: boolean;
	posts: Posts [];
	showPosts:boolean;

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
		this.showPosts= false;
		
		//call the function, return a observable so, subscribe
		this.postService.getPost().subscribe( post=>{
			//console.log(post);
			//como from de observable fron the service
			this.posts = post;
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

	 togglePosts(){
	 	if(this.showPosts==true){
	 		this.showPosts=false;
	 	}
	 	else{
	 		this.showPosts=true;	
	 	}
	 	
	 }

	 deletePost(i){
	 	this.posts.splice(i,1);
	 }

	 

	 
}

interface address{
	street: string;
	city:string;
	state:string;
}

interface Posts{
	id: number;
	title: string;
	body: string;
}