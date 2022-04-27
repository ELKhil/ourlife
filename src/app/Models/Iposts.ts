import { UserForm } from "./UserForm";
import { Commentaire } from "./Commentaire";

export interface Iposts{
    id: string;
    media : File;
    contenu :string;
    dateDePost: Date;
    like: number;
    dislike: number;
    active: boolean;
    media2: File;
    typeMedia2: string;
    user: UserForm;
    comment: Commentaire []

 }





  



 