export enum StepRenderType {
    RendersAndVisibleIfActive = 1, // Default
    AlwaysRendersVisibleIfActive = 2,
    AlwaysRendersVisibleAfterFirstActive = 3,
    AlwaysRendersAlwaysVisible = 4,
}