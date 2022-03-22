export const dayNumber = timeStamp => {
    const date = new Date(timeStamp)
    return date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
}

export const monthNumber = timeStamp => {
    const date = new Date(timeStamp)
    return date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth()
}

export const year = timeStamp => {
    const date = new Date(timeStamp)
    return date.getFullYear()
}

export const hours = timeStamp => {
    const date = new Date(timeStamp)
    return date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
}

export const minutes = timeStamp => {
    const date = new Date(timeStamp)
    return date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
}
