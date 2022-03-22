export const fillTimeItems = (name, startValue = 0, endValue = 23) => {
    const timeItems = []
    for (let i = startValue; i <= endValue; i++) {
        timeItems.push({
            id: `${name}${i}`,
            label: `${i}`,
            value: `${i}`,
        })
    }
    return timeItems
}
