import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/map';


//injectable decorator
@Injectable() 

export class PostService {
	//in order to use the HTTP module
	constructor(private http: Http ){
		console.log("Post Service inicitialized...");
	}

	getPost(){
		//make a get request to a URL and map response to json format
		return this.http.get('https://jsonplaceholder.typicode.com/posts')
		.map(res => res.json());
	}
}