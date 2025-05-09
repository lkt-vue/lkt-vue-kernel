export interface RenderAndDisplayProps {
    canRender?: boolean | (() => boolean)
    canDisplay?: boolean | (() => boolean)
}