import { createContext } from "react";

export type UserType={
    name:string,
    age:number
}

export const UserContext=createContext<UserType|null>(null);
