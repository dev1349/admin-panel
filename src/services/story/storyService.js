export const getVariant = (template, variants, children) => {
    const result = template.bind()
    if (variants === undefined) {
        return result
    } else {
        let arr = []
        if (!Array.isArray(variants)) {
            result.args = {
                children: children,
                [variants]: true,
            }
        } else {
            variants.forEach(el => {
                arr.push([[el], true])
            })
            arr.push({ children: children })
            result.args = Object.fromEntries(arr)
        }
        return result
    }
}
