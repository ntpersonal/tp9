import { Diplome } from "./diplome";

export class Employe {
    constructor(
        public matricule: number,
        public nom: string,
        public diplomes: Diplome[],
        public dateEmbauche?: Date        
        ) {}
}
