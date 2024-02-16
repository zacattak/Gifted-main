export class GiftBox {
    constructor(data) {
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.creatorId = data.creatorId
        this.profileIdsOpened = data.profileIdsOpened

    }
    get GiftBoxHTMLTemplate() {
        return `
<div class="col-3 m-2">
    <div class="card">
        <img src="${this.url}" alt="Image/Gif not found">
        <h4 class="text-center p-2 m-0">${this.tag}</h4>
    </div>
</div>
`
    }

}

// {
//     "tag": {
//         "type": "String",
//             "maxlength": 120
//     },
//     "url": {
//         "type": "String",
//             "required": true,
//                 "maxLength": 500
//     },
//     "opened": {
//         "type": "Boolean",
//             "default": false
//     },
//     "creatorId": {
//         "type": "ObjectId",
//             "required": true,
//                 "ref": "Account"
//     },
//     "profileIdsOpened": [
//         {
//             "type": "ObjectId",
//             "ref": "Account"
//         }
//     ]
// }