import {LktItem} from "./LktItem.ts";
import {FileEntityConfig} from "../config/FileEntityConfig.ts";
import {FileEntityType} from "../enums/FileEntityType.ts";

export class FileEntity extends LktItem implements FileEntityConfig {

    static lktAllowUndefinedProps: string[] = [
        'onClick',
    ];

    static lktDefaultValues: (keyof FileEntityConfig)[] = [
        'id',
        'type',
        'name',
        'src',
        'children',
        'parent',
    ];

    id?: number|string|undefined = undefined;
    type: FileEntityType = FileEntityType.Image;
    name: string = '';
    src: string = '';
    children: FileEntity[] = [];

    isPicked: boolean = false;
    parent?:FileEntity = undefined;


    constructor(data: Partial<FileEntityConfig> = {}) {
        super();
        this.feed(data);

        if (!this.children) this.children = [];
        this.children?.map(child => new FileEntity({...child, parent: this}));
    }
}