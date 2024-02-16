import { AppState } from "../AppState.js";
import { GiftBox } from "../models/GiftBoxes.js";
import { api } from "./AxiosService.js";

class GiftBoxesService {
    async getGifts() {
        const response = await api.get('api/gifts')
        console.log('Got Gifts!', response.data)
        const newGifts = response.data.map(giftPOJO => new GiftBox(giftPOJO))
        AppState.giftBoxes = newGifts
    }
}




export const giftBoxesService = new GiftBoxesService()