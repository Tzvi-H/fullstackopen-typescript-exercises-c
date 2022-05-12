import diagnoses from "../../data/diagnoses.json";

import { Diagnose } from "../types";

const getDiagnoses = (): Array<Diagnose> => {
  return diagnoses;
};

// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaries.map(({ id, date, weather, visibility }) => ({
//     id,
//     date,
//     weather,
//     visibility,
//   }));
// };

// const addDiary = () => {
//   return null;
// };

export default {
  getDiagnoses,
};
