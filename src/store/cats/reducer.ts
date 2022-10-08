import { ICategories } from "../../interfaces";

const Datas = {
    categories: [],
    images: []
}

export default function CatsReducer(state = Datas, option: any) {
    switch (option.type) {
        case "setCategories":
            state.categories = option.payload
            return state
        case "setActive":
            state.categories.map((el: ICategories) => el.active = false)
            let selected: any = state.categories.find((el: ICategories) => el.id === option.id)
            selected.active = true
            return state
        case "setImgs":
            state.images = option.payload
            return state
        case "newImgs":
            // @ts-ignore
            state.images=state.images.concat(option.payload)
            return state
        default:
            return state
    }
}