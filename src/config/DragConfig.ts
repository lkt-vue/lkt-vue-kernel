import {ValidDrag} from "../types/ValidDrag.ts";

export interface DragConfig {
    isDraggable?: ValidDrag
    isValid?: ValidDrag
    canRender?: boolean|Function
    dragKey?: string
}