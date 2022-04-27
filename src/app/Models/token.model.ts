export interface Token{
        iat: number,
        exp: number,
        username: string,
        roles: RoleEnum [],
        image_profil: string,
        nom:string
}

export enum RoleEnum{
    ADMIN =  'ROLE_ADMIN',
    USER = 'ROLE_USER',
}