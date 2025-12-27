export interface LktUserRolePermissions {
    [component: string | number]: Array<{ [component: string | number]: boolean }>
}