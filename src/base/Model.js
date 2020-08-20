import EventBus from "./EventBus";

class Model extends EventBus{
    constructor(options) {
        super()
        const keys = ['data', 'update', 'create', 'delete', 'get']
        keys.forEach((key) => {
            if (key in options) {
                this[key] = options[key]
            }
        })
        // this.data = options.data
        // this.update=options.update
        // this.create =options.create
        // this.delete = options.delete
        // this.get = this.get
    }
    create(){
        // ?.可选链  console ?. error ?.("你还没有实现 create")
        console && console.error&& console.error("你还没有实现 create")
    }
    delete(){
        console && console.error&& console.error("你还没有实现 delete")
    }
    update(){
        console && console.error&& console.error("你还没有实现 update")
    }
    get(){
        console && console.error&& console.error("你还没有实现 get")
    }
}
// m.create()
// m.delete()
// m.update()
// m.get()
export default  Model