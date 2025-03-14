import {LktStrictItem} from "./LktStrictItem.ts";
import {LktObject} from "../interfaces/LktObject.ts";

export class LktColor extends LktStrictItem {
    r: number = 0;
    g: number = 0;
    b: number = 0;
    a: number = 255;

    constructor(data: LktObject) {
        super();
        this.feed(data);
    }

    static fromHexColor(color: string): LktColor {
        //@ts-ignore
        let r = parseInt(Number('0x' + color.substring(1, 3)), 10);
        //@ts-ignore
        let g = parseInt(Number('0x' + color.substring(3, 5)), 10);
        //@ts-ignore
        let b = parseInt(Number('0x' + color.substring(5, 7)), 10);
        let a = 255;

        if (color.length === 9) {
            //@ts-ignore
            a = parseInt(Number('0x' + color.substring(5, 7)), 10);
        }

        return new LktColor({ r, g, b, a });
    }

    toString() {
        //@ts-ignore
        let red = parseInt(this.r).toString(16).padStart(2, '0').toUpperCase(),
            //@ts-ignore
            green = parseInt(this.g).toString(16).padStart(2, '0').toUpperCase(),
            //@ts-ignore
            blue = parseInt(this.b).toString(16).padStart(2, '0').toUpperCase(),
            color = '#' + red + green + blue
        ;

        if (this.a == 255) return color;

        //@ts-ignore
        let alpha = parseInt(this.a).toString(16).padStart(2, '0').toUpperCase();
        return color + alpha;
    }

    getContrastFontColor() {
        // Counting the perceptive luminance - human eye favors green color...
        let luminance = (0.299 * this.r + 0.587 * this.g + 0.114 * this.b) / this.a;

        if (luminance > 0.5) return '#000000'; // bright colors - black font

        return '#ffffff'; // dark colors - white font
    }
}