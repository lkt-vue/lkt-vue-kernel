export interface StepProcessStepEvents {
    enter?: (args: {from: string}) => void
    leave?: (args: {to: string}) => void
}