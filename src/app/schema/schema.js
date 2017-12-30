import {ORM } from "redux-orm";

import Pilot from "features/pilots/Pilot";
import MechDesign from "features/mechs/MechDesign";
import Mech from "features/mechs/Mech";
import Unit from "features/unitInfo/Unit";
import Faction from "features/unitInfo/Faction";
import Lance from "features/unitOrganization/Lance";

const orm = new ORM();
orm.register(Pilot, MechDesign, Mech, Unit, Faction, Lance);

export default orm;