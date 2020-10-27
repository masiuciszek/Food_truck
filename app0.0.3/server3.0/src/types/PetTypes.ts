import { User } from "./userTypes"

export type Breed =
  | "Pug"
  | "Schnauzer"
  | "Doberman"
  | "Puddle"
  | "Schafer"
  | "Irish Terrier"

export interface Pet {
  ownerId: number
  breed: Breed
  name: string
  id: number
  cool: boolean
  owner: User["id"]
}
