export interface MenuEntryConfig {
    key?: string
    href?: string
    label?: string
    icon?: string

    onClick?: Function|undefined
    isActiveChecker?: Function|undefined

    isOpened?: boolean
    isActive?: boolean
    parent?: MenuEntryConfig|undefined

    children?: MenuEntryConfig[]
}