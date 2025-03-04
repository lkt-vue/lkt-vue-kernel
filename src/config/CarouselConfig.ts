export interface CarouselConfig {
    itemsToShow?: number
    itemsToScroll?: number
    autoplay?: number
    infinite?: boolean
    mouseDrag?: boolean
    touchDrag?: boolean
    pauseAutoplayOnHover?: boolean
    dir?: 'ltr' | 'rtl'
    snapAlign?: 'start' | 'end' | 'center' | 'center-odd' | 'center-even'
}