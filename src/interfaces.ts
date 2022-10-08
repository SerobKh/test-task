export interface ICats {
    id: number;
    name: string;
    category: string;
}
export interface IOptions {

}
export interface ICategories {
    id: number;
    name: string;
    active?:boolean
}
export interface IState {
    categories: ICategories[] | []
    images:IImg[] |[]

}
export interface ISelector {
    datas: IState
}
export interface IImg {
    id: string;
    url: string;
    width: number;
    height: number;
}