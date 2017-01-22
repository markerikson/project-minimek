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

    toJSON() {
        return {...this.ref};
    }

    updateFrom(otherMech) {
        this.update(otherMech.ref);
    }
}

Mech.modelName = "Mech";