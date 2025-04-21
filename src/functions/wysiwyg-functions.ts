export const applyTextFormat = (command: string) => {
    document.execCommand(command, false);
};

export const applyTextAlignment = (alignment: string) => {
    document.execCommand('justify' + alignment, false);
};

export const changeTextColor = (color: string) => {
    document.execCommand('foreColor', false, color);
};

export const changeBackgroundColor = (color: string) => {
    document.execCommand('backColor', false, color);
}

export const changeFontFamily = (event: Event, fontFamily: string) => {
    document.execCommand('fontName', false, fontFamily);
};
