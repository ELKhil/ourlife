import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service'
import { UserForm } from '../Models/UserForm';
import { Router } from '@angular/router';
import { FileCheck } from 'angular-file-validator';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
  
})


export class RegisterComponent implements OnInit {

  users! : UserForm [];
  fg! : FormGroup;
  inputClicked : boolean = false;
  fileSize : number = 0;
  fileType : string = "";

  constructor(
    private userService : UserService, private fb: FormBuilder, public _router: Router
  ) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      nom: [null, [Validators.minLength(2), Validators.maxLength(30), Validators.required]],
      nomUtilisateur: [null,  Validators.required],
      mdp: [null, Validators.required],
      confirmMdp: [null, Validators.required],

      imageProfil: new FormControl(null, {
        validators: [Validators.required, this.checkFileSize],
        asyncValidators: [FileCheck.ngFileValidator(['png', 'jpeg','jpeg'])] // <-------
      })
      
    }, {validators: this.checkPassword});

    //this.userService.get().subscribe(data=>this.users = data);
  }

  submit(){

    if(this.fg.valid){
  
      this.userService.post(this.fg.value).subscribe(()=>{
     /*  this.userService.get().subscribe(data => this.users = data); */
   
     
    });
    }else{

      this.fg.markAllAsTouched();
    }
  }
  
  onChange($event: any) {
    let file = $event.target.files[0];

    //Récupérer la taille et le type de fichier
    this.fileSize = file.size;
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e: any) => {
      this.fg.get('imageProfil')?.setValue(e.target.result);
    }
  }
  onClick(){
      this.inputClicked = true;
  }

  checkPassword(c : FormGroup) {
    console.log("je suis dans le checkpassword");
    if(c.get('mdp')?.value !== '' && c.get('confirmMdp')?.value !== ''){
      if(c.get('mdp')?.value !== c.get('confirmMdp')?.value){
        console.log("pas le meme mot de psasse");
        return { notsamepassword : true}
      }
      else return null;

    }
    return null;
  }

  checkFileSize (){
    return (c : AbstractControl)=>{
          console.log(this.fileSize);
          if( this.fileSize > 1024 * 1024){

            return {imageBig : true};
          }else{
            return null;
          }
  }
  }

 
 


}
