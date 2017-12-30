import {Model, attr} from "redux-orm";


export default class Faction extends Model {
    static modelName = "Faction";

    static fields = {
        id : attr(),
        name : attr(),
    };

    static parse(factionData) {
        return this.upsert(factionData);
    }
}

