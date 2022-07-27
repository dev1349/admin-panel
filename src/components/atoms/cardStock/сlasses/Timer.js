class Timer {
    constructor({timer}) {
        this.timer = timer
    }

    msToTime(duration) {
        let seconds = parseInt((duration / 1000) % 60)
        let minutes = parseInt((duration / (1000 * 60)) % 60)
        let hours = parseInt((duration / (1000 * 60 * 60)) % 24)

        hours = (hours < 10) ? "0" + hours : hours
        minutes = (minutes < 10) ? "0" + minutes : minutes
        seconds = (seconds < 10) ? "0" + seconds : seconds

        return hours + ":" + minutes + ":" + seconds
    }

    stockTime() {
        const time = new Date(this.timer).getTime() - new Date().getTime()
        return time < 0 ? 0 : time
    }

    get time() {
        return this.msToTime(
            this.stockTime()
        )
    }

    get days() {
        let days = parseInt(this.stockTime() / (1000 * 60 * 60 * 24))
        days = (days < 10) ? "0" + days : days

        return days
    }
}

export default Timer
