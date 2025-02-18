import {ValidDrag} from "../types/ValidDrag.ts";

export interface DragConfig {
    enabled: boolean                    // Turns on/off drag mode
    isDraggable?: ValidDrag             // Checks if a given item is draggable
    isValid?: ValidDrag                 // Checks if is a valid drag
    isDisabled?: boolean|Function       // Checks if drag indicator is disabled for each item
    canRender?: boolean|Function        // Checks if can render drag indicator for each item
    dragKey?: string                    // Drag CSS selector
}