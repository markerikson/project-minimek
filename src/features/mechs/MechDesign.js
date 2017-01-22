import {Model} from "redux-orm";

export default class MechDesign extends Model {
    static parse(designData) {
        return this.create(designData);
    }

    toJSON() {
        return {...this.ref};
    }

    updateFrom(otherDesign) {
        this.update(otherDesign.ref);
    }
}

MechDesign.modelName = "MechDesign";