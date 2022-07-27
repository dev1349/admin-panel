class Pagination {
    constructor({ quantity, progress, setProgress, step, setStep }) {
        this.division = 100 / quantity
        this.progress = progress
        this.setProgress = setProgress
        this.step = step
        this.setStep = setStep
    }

    nextStep() {
        this.progress += this.division
        if (this.progress > 100) this.progress = 100
        else {
            this.setStep(this.step + 1)
        }
        this.setProgress(this.progress)
    }

    backStep() {
        this.progress -= this.division
        if (this.progress < 0) this.progress = 0
        else {
            this.setStep(this.step - 1)
        }
        this.setProgress(this.progress)
    }
}
export default Pagination
