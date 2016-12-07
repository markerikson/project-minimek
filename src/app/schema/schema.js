import {Schema} from "redux-orm";

import Pilot from "features/pilots/Pilot";

const schema = new Schema();
schema.register(Pilot);

export default schema;