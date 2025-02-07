export enum TablePermission {
    Create = 'create',
    Update = 'update', // Save changes
    Edit = 'edit', // Displays edit button
    Drop = 'drop', // Displays drop button
    Sort = 'sort', // Sort

    InlineEdit = 'inline-edit', // Be able to edit columns inside the table
    InlineCreate = 'inline-create', // Be able to append a new editable row (needs InlineEdit in order to be editable)

    ModalCreate = 'modal-create', // Be able to append a new row after save a modal form

    InlineCreateEver = 'inline-create-ever', // Same as InlineCreate, but isn't required to be in edit mode
}