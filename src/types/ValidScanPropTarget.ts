import {ScanPropTarget} from "./ScanPropTarget.ts";

export type ValidScanPropTarget = ScanPropTarget | ((...args: any[]) => ScanPropTarget);