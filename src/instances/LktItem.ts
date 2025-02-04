import { LktObject } from './../interfaces/LktObject.ts';

const skipDataProps: string[] = [
  'lktDateProps',
  'lktStrictItem'
];

export class LktItem implements LktObject {

  lktDateProps: string[] = [];
  lktStrictItem: boolean = false;

  feed(data: LktObject = {}) {
    for (const [key, value] of Object.entries(data)) this.assignProp(key, value);
  }


  assignProp(key: string, value: any) {
    if (skipDataProps.includes(key)) return;
    if (this.lktStrictItem && !this.hasOwnProperty(key)) return;

    if (this.lktDateProps.includes(key)) {
      (this as any)[key] = new Date(value);
      return;
    }

    (this as any)[key] = value;
  }
}