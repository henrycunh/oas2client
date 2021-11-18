export default function indent(string: string, count = 1, options: any = {}) {
    const {
        indent = ' ',
        includeEmptyLines = false
    } = options
    const indentation = String(indent).repeat(count)
    const lines = string.split("\n")
    return lines.map((line) => {
        if (includeEmptyLines || line !== "") {
            return indentation + line
        }
        return indentation + line
    }).join("\n")
}