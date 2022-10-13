
export function indent(text: string, tabCount: number = 1, insertSpaces: boolean = true, tabSize: number = 4) {
    const indentation = (insertSpaces ? ' '.repeat(tabSize) : '\t').repeat(tabCount);
    return indentation.concat(text.replace(/(\r\n|\r|\n)/g, `\$1${indentation}`));
}

export function capitalizeFirst(text: string): string {
    return text[0].toUpperCase() + text.slice(1);
}

export function alphanumeric(text: string): string {
    return text.replace(/[^a-zA-Z0-9]/g, '');
}

export function pascalCase(text: string): string {
    let result: string = "";

    let inside: boolean = false;
    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case ' ': case '\t': case '\n': case '\r':
                inside = false;
                break;
            default:
                if (inside) {
                    result = result + text[i];
                } else {
                    result = result + text[i].toUpperCase();
                    inside = true;
                }
        }
    }

    return result;
}
