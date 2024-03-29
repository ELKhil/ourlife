import { Component, OnInit } from '@angular/core';
import { PostsService } from '../Services/posts.service';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../Services/session.service';

declare var toastr : any;



@Component({
  selector: 'app-make-poster',
  templateUrl: './make-poste.component.html',
  styleUrls: ['./make-poste.component.scss']
})
export class MakePosterComponent implements OnInit {

  postForm! : FormGroup;
  fileDown : Boolean = false;

  constructor(
    private postService : PostsService,private fb: FormBuilder, private route: Router, public session: SessionService
  ) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      media: [null],
      contenu: [null, Validators.required],
      typemedia: [null],
      userID:[this.session.decodedToken.id]
    })


  }
  submit(){
   
  if(this.postForm.valid){
      console.log("la formulaire est valide");
      this.postService.post(this.postForm.value).subscribe( {
        next : (p) => {
          toastr.success("Votre poste a bien été enregistré");
          this.route.navigateByUrl('');
        }, error: () => {
          toastr.error("Something wrong");
        }
    });
      //this.postService.get().subscribe(data => this.post = data);
 
  }else{
    console.log("le formulaire n'est pas valide");
    console.log(this.postForm.errors);
    toastr.error("Something wrong");
    
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
    this.fileDown= true;
    }
  }

}
