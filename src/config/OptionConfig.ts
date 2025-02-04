import { LktObject } from './../interfaces/LktObject.ts';
import { ValidOptionValue } from './../types/ValidOptionValue.ts';

export interface OptionConfig {
  value: ValidOptionValue;
  label: string;
  data?: LktObject;
  disabled?: boolean;
  group?: string;
  icon?: string;
  modal?: string | Function;
}