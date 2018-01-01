import {Model, many, attr} from "redux-orm";


export default class Lance extends Model {
    static modelName = "Lance";
    
    static fields = {
        id : attr(),
        name : attr(),
        pilots : many("Pilot")
    };

    static parse(lanceData) {
        return this.upsert(lanceData);
    }

}