import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Iposts } from '../Models/Iposts';
import { PostsService } from '../Services/posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts! : Iposts[];
  nextPosts! : Iposts[];
  notEmptyPost = true;
  notScrolly = true;
  nbPage = 1;
  fileType : string = "";
  showCommentaire: boolean = false;
 
  

  constructor(
    private postsService: PostsService,
    private spinner: NgxSpinnerService,
    private http: HttpClient,
  

  ) { }


  ngOnInit(): void {

      //il faut une méthode qui ne charge pas tous les données
      //this.postsService.get().subscribe(data => this.posts = data);
      this.postsService.getPage(this.nbPage).subscribe(data => this.posts = data);
  }

  onScroll(){
    if(this.notScrolly && this.notEmptyPost){  
      this.spinner.show();
      this.notScrolly = false;
      this.loadNextPage();
    }
  }
  loadNextPage(){

      
      this.postsService.getPage(++this.nbPage).subscribe((data: any) => {
              this.nextPosts = data;
              if(this.nextPosts.length !== 0){
                //add the nextPots to the liste posts
              this.posts = this.posts.concat(this.nextPosts);
              this.notScrolly= true;
              this.spinner.hide();
              
              }else{
                this.notEmptyPost = false;
                this.spinner.hide();
              }
              
      });
   };

   showComment(){
     this.showCommentaire = !this.showCommentaire;
   }

     
   
 
  }
 