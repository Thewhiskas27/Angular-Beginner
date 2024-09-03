import { STATEENUM } from "./state-enum";

export class Task {
    titre!: string;
    description!: string;
    etat!: STATEENUM;
    creationDate!: Date;
}
