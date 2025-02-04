import { LktObject } from '../interfaces/LktObject.ts';
import { Option } from '../instances/Option.ts';

export type ValidFieldValue =
  string
  | number
  | boolean
  | LktObject
  | Option[];