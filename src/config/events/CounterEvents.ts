export interface CounterEvents {
    onChange?: (value: number|string) => void|any,
    onEnd?: () => void|any,
}