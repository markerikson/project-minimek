import {Model, fk} from "redux-orm";


export default class Pilot extends Model {
    static get fields() {
        return {
            mech : fk("Mech"),
            // some test comments
        };
    }

    static parse(pilotData) {
        // We could do useful stuff in here with relations,
        // but since we have no relations yet, all we need
        // to do is pass the pilot data on to create()

        // Note that in a static class method, `this` is the
        // class itself, not an instance
        return this.create(pilotData);
    }

    toJSON() {
        return {...this.ref};
    }
}

Pilot.modelName = "Pilot";