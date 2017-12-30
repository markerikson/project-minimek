import {Model, many, fk, attr} from "redux-orm";


export default class Unit extends Model {
    static modelName = "Unit";

    static fields = {
        id : attr(),
        name : attr(),
        affiliation : fk("Faction"),
        color : attr(),
        lances : many("Lance"),
        pilots : many("Pilot"),
        mechs : many("Mech")
    };

    static parse(unitData) {
        const {Pilot, Mech, Lance} = this.session;

        const parsedData = {
            ...unitData,
            lances : unitData.lances.map(lanceEntry => Lance.parse(lanceEntry)),
            pilots : unitData.pilots.map(pilotEntry => Pilot.parse(pilotEntry)),
            mechs : unitData.mechs.map(mechEntry => Mech.parse(mechEntry)),
        };

        return this.upsert(parsedData);
    }
}

