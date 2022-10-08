import { ICategories, IImg } from "../../interfaces"


export const setCategories = (data: ICategories[]) => {
    return { type: 'setCategories', payload: data }
}
export const setImgs = (data: IImg[]) => {
    return { type: 'setImgs', payload: data }
}
export const newImgs = (data: IImg[]) => {
    return { type: 'newImgs', payload: data }
}