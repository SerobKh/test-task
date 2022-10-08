import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar";
import { ICategories, IImg, ISelector, IState } from "../interfaces";
export default function Home() {
    let dispatch = useDispatch()
    const imgList: any = useSelector<ISelector>(state => state.datas.images)
    const categories: any = useSelector<ISelector>(state => state.datas.categories)

    function LoadMore() {
      
        let nonSelected = categories.filter((el: ICategories) => el.active !== true)
        let item = nonSelected[Math.floor(Math.random()*nonSelected.length)]
        
        dispatch({type:"loadMore",ids:item.id})

    }
    console.log(imgList);
    

    return (
        <div className="main">
            <SideBar />

            <div className="blockMain">
                <div className="containerImg">
                    {
                        imgList.map((img: IImg, index: number) => {
                            return (
                                <div key={index} >
                                    <img src={img.url} />
                                </div>
                            )
                        })
                    }

                </div>
                {
                    imgList.length !== 0 ?
                        <p onClick={LoadMore}>Load More</p>
                        : null
                }
            </div>

            <Outlet />
        </div>
    )
}
