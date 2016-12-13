import {Model, fk} from "redux-orm";


export default class Mech extends Model {
    static get fields() {
        return {
            type : fk("MechDesign"),
            pilot : fk("Pilot"),
        };
    }
    
    static parse(mechData) {
        return this.create(mechData);
    }
}

Mech.modelName = "Mech";