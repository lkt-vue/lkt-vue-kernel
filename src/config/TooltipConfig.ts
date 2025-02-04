import { TooltipLocationY } from '../enums/TooltipLocationY.ts';
import { TooltipLocationX } from '../enums/TooltipLocationX.ts';
import { TooltipPositionEngine } from '../enums/TooltipPositionEngine.ts';

export interface TooltipConfig {
  modelValue?: boolean
  alwaysOpen?: boolean
  class?: string,
  text?: string,
  icon?: string,
  iconAtEnd?: boolean,
  engine?: TooltipPositionEngine,
  referrerMargin?: number | string
  windowMargin?: number | string
  referrerWidth?: boolean,
  referrer: HTMLElement,
  locationY?: TooltipLocationY
  locationX?: TooltipLocationX
}

