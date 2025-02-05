export const enum ButtonType {
    Button = 'button', // Default
    Submit = 'submit', // Form submit
    Reset = 'reset',
    Anchor = 'anchor', // Turns on anchor mode
    Content = 'content', // No click event
    Switch = 'switch', // Has a visible boolean state
    HiddenSwitch = 'hidden-switch', // Has a hidden boolean state
    Split = 'split', // Split button, content always generated
    SplitLazy = 'split-lazy', // Split button, contents generated after first open
    SplitEver = 'split-ever', // Split button, contents generated each time it's clicked
    Tooltip = 'tooltip', // Tooltip button, content always generated
    TooltipLazy = 'tooltip-lazy', // Tooltip button, contents generated after first open
    TooltipEver = 'tooltip-ever', // Tooltip button, contents generated each time it's clicked
}