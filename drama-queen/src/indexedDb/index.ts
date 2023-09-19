import BaseDexie from "dexie";

import { paradataSchema, type ParadataTable } from "./tables/paradata";
import { surveyUnitSchema, type SurveyUnitTable } from "./tables/surveyUnit";

type DexieTables = SurveyUnitTable & ParadataTable;

export type Dexie<T extends any = DexieTables> = BaseDexie & T;

export const db = new BaseDexie("Queen") as Dexie;

const schema = Object.assign({}, surveyUnitSchema, paradataSchema);

db.version(2).stores(schema);
