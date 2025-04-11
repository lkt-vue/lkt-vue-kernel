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
    ];

    id?: number|string|undefined = undefined;
    type: FileEntityType = FileEntityType.Image;
    name: string = '';
    src: string = '';
    children?: FileEntityConfig[] = [];

    isPicked: boolean = false;


    constructor(data: Partial<FileEntityConfig> = {}) {
        super();
        this.feed(data);
    }
}