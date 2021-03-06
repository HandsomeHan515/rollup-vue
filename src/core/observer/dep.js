import { remove } from '../util/index'

let uid = 0
export default class Dep {
    constructor() {
        this.id = uid++
        this.subs = []
    }

    addSub (sub) {
        this.subs.push(sub)
    }

    removeSub (sub) {
        remove(this.subs, sub)
    }

    depend () {
        if (window.target) {
            // this.addSub(window.target)
            window.target.addDep(this)
        }
    }

    notify () {
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }
}