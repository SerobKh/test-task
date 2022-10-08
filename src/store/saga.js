import axios from 'axios'
import { put, takeEvery, } from 'redux-saga/effects'
import { newImgs, setCategories, setImgs } from './cats/action'

function* GetCategory() {
    let result = yield axios.get('https://api.thecatapi.com/v1/categories')
    yield put(setCategories(result.data))
}
function* GetImgs({ id }) {
    let result = yield axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`)
    yield put(setImgs(result.data))
}
function* LoadMore({ids}){
    console.log(ids);
    let result = yield axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${ids}`)
    yield put(newImgs(result.data))
}


export default function* rootSaga() {
    yield (takeEvery('getCategory', GetCategory))
    yield (takeEvery('GetImgs', GetImgs))
    yield (takeEvery('loadMore',LoadMore))
}