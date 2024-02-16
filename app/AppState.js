import { GiftBox } from './models/GiftBoxes.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null


  /** @type {GiftBox[]} */
  giftBoxes = []

}

export const AppState = createObservableProxy(new ObservableAppState())