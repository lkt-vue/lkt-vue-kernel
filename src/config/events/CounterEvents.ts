export interface CounterEvents {
    onChange?: (value: number|string) => void,
    onEnd?: () => void,
}