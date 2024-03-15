// 假父类
class Base {
  // 迁移前上下文中包含组件实例的引用
  context: Record<string, any> = {}

  /** 根据 id 返回组件实例 */
  getComponent(id: string) {
    return this.context[id]
  }
}

export default class Logic extends Base {
  ID_MESSAGE: string

  constructor() {
    super()

    this.ID_MESSAGE = 'message'

    const item = super.getComponent(this.ID_MESSAGE)
    // item.setValue('Hellow World')
  }

  rollSingleColor = () => {
    return Math.floor(Math.random() * 256)
  }

  changeColor() {
    const randomColor = `rgb(${this.rollSingleColor()},${this.rollSingleColor()},${this.rollSingleColor()})`

    const item = super.getComponent(this.ID_MESSAGE)
    item.setColor(randomColor)
  }
}
