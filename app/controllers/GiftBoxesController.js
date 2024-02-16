import { AppState } from "../AppState.js";
import { giftBoxesService } from "../services/GiftBoxesService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawGifts() {
    const giftBox = AppState.giftBoxes
    let htmlString = ''
    giftBox.forEach(gift => htmlString += gift.GiftBoxHTMLTemplate);
    setHTML('giftBoxes', htmlString)
}

export class GiftBoxesController {
    constructor() {
        console.log('controller loaded');
        AppState.on('account', this.getGifts)
        AppState.on('giftBoxes', _drawGifts)
    }


    async getGifts() {
        try {
            await giftBoxesService.getGifts()
        } catch (error) {
            Pop.error(error)
            console.error(error)

        }
    }
}