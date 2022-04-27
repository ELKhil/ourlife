import { Component, OnInit } from '@angular/core';
import { PostsService } from '../Services/posts.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-poster',
  templateUrl: './make-poster.component.html',
  styleUrls: ['./make-poster.component.scss']
})
export class MakePosterComponent implements OnInit {

  postForm! : FormGroup;

  constructor(
    private postService : PostsService,private fb: FormBuilder, private route: Router
  ) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      media: [],
      contenu: [],
      typeMedia2: [],
      dateDePost: [new Date()]

    })


  }
  submit(){
    console.log(this.postForm.value);

    if(this.postForm.valid){
      console.log("la formulaire est valide");
      this.postService.post(this.postForm.value).subscribe(()=>{
     /*  this.userService.get().subscribe(data => this.users = data); */

     
    });
    this.route.navigateByUrl("");
    }else{
      console.log("la formulaie n'est pas valide");
      
      this.postForm.markAllAsTouched();
    }
    
  }

  onChange($event: any) {
    let file = $event.target.files[0];

    //Récupérer la taille et le type de fichier
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e: any) => {
      this.postForm.get('media')?.setValue(e.target.result);
    }
  }

}
