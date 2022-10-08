import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { ICategories, ISelector, } from "../interfaces"
export default function SideBar() {
    const [open,setOpen]=useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'getCategory' })
    }, [])
    const categories: any = useSelector<ISelector>(state => state.datas.categories)
    function selectCategory(id: number) {
        dispatch({ type: "GetImgs", id: id })
        dispatch({ type: "setActive", id: id })

    }
    let selected = categories.find((el: ICategories) => el.id === 1)

    return (
        <>
            <div 
            onClick={()=>{setOpen(!open)}}
            className='menuButton'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
            <div className={open?"":'sidebar'}>
                <p>Categories</p>

                {categories?.map((category: ICategories, index: number) => {
                    return <div key={index}>
                        <h3
                            className={category.active ? "active" : "inactive"}
                            onClick={selectCategory.bind(null, category.id)}
                        >  {category.name}</h3>
                    </div>
                })}
            </div >
        </>
    )
}

{/*  */ }