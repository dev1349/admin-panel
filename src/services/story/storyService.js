export const getVariantExample = (template, variant) => {
    const result = template.bind()
    // rest.forEach((r)=>{
    //     result.args[r] = true
    // })
    result.args = {
        [variant]: true
    }
    return result
}


// export const getDefaultExample = (template, )


export const getExample = (template, style) => {
    let examples
    let counter = 1
    if (!arrayIsEmpty(style.variants)) {
        examples = style.variants.map((variant) => {
            a(template, variant, counter)
            counter++
            return variant.props
        })
    }
    console.log(examples)
    return examples
}


function a(template, variant) {
    const Example = template.bind({})
    Example.args = {
        [variant]: true
    }
    return Example
}


// todo refactor
function arrayIsEmpty(array) {
    //If it's not an array, return FALSE.
    if (!Array.isArray(array)) {
        return false
    }
    //If it is an array, check its length property
    if (array.length === 0) {
        //Return TRUE if the array is empty
        return true
    }
    //Otherwise, return FALSE.
    return false
}

