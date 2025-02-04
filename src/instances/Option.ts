import { LktObject } from './../interfaces/LktObject.ts';
import { OptionConfig } from './../config/OptionConfig.ts';
import { ValidOptionValue } from './../types/ValidOptionValue.ts';
import { LktItem } from './../instances/LktItem.ts';

export class Option extends LktItem implements OptionConfig {
  value: ValidOptionValue = undefined;
  label: string = '';
  data?: LktObject = {};
  disabled?: boolean = false;
  group?: string = '';
  icon?: string = '';
  modal?: string | Function = '';
}