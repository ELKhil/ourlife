
import { Iposts } from "./Iposts";
import { UserForm } from "./UserForm";

export interface Commentaire{
    id:string,
    message:string,
    user:UserForm,
    postCommenter: Iposts
}