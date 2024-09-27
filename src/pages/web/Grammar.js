import React, { useEffect, useState } from 'react'
import ItemCategory from '../../components/web/items/ItemCategory'
import { Link } from 'react-router-dom'
import { getAllItemOfCategory } from '../../api/CategoryApi';
import {  getGrammarRandom } from '../../api/GrammarApi';

export default function Grammar() {
    const [listCategory, setListCategory] = useState([]);
    const [listBlog,setListBlog] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllItemOfCategory("grammar");
                if (data) {
                    setListCategory(data);
                }
            } catch (error) {
                console.log(error);
            } 
        };

        fetchCategories();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getGrammarRandom();
                if (data) {
                    setListBlog(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
  return (
    <div className='container text-start'>
            <div class="row">
                <div class="col-xxl-3 col-xl-6 col-lg-6  col-sm-6">
                    <div class="card">
                        <div class="card-header pb-0">
                            <h3 class="card-title">Danh sách ngữ pháp</h3>
                        </div>
                        <div class="card-body pt-1">
                            <div class="list-catergory1">
                                <div class="item-list">
                                    <ul class="list-group mb-0">
                                    {listCategory.map((item, index) => (
                                        <ItemCategory key={item.id} blog={item}/>
                                    ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {listBlog.map((item,index)=>(
                         <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12">
                    <Link to={`/blog/${item.id}`}>
                            <div class="card custom-card" style={{height:"380px"}}>
                                <Link to={`/blog/${item.id}`} >
                                    <div style={{height:"200px"}}>
                                        <img class="card-img-top w-100 w-100 h-100" src={`data:image/jpeg;base64,${item.image}`}  alt=""/>
                                    </div>
                                </Link>
                                <div class="card-body pb-0">
                                    <Link to={`/blog/${item.id}`}class="mt-4"><h5 class=" text-dark">{item.name}</h5></Link>
                                </div>
                                <div class="card-footer p-3">
                                    <div class="item7-card-desc d-sm-flex mt-0">
                                        <div class="d-flex ms-auto">
                                            <a href="javascript:void(0);" class="d-flex me-3"><span class="fe fe-calendar text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">Jan-18-2020</div></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Link> 
                    </div>
                ))}
            </div>
    </div>
  )
}
