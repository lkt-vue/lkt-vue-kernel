export enum ColumnType {
    // New column typing: direct references to final component used
    None = '',
    Field = 'field',
    Button = 'button',
    Anchor = 'anchor',

    // Old Column Types (To Be Removed)
    Text = 'text',
    Number = 'number',
    Check = 'check',
    Switch = 'switch',
    Select = 'select',
    Email = 'email',
    Tel = 'tel',
    File = 'file',
    Link = 'link',
    Action = 'action',
    Integer = 'int',
    Float = 'float',
}
