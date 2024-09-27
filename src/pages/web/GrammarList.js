import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getAllGrammarByCategoryId, getAllGrammarByCategoryIdRandom } from '../../api/GrammarApi';

export default function GrammarList() {
    const [listGrammar, setListGrammar] = useState([])

    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllGrammarByCategoryId(id);
                console.log(data)
                if (data) {
                    setListGrammar(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
  return (
        <div className='container'>
             <div className='row'>
                    {
                    listGrammar.map((item,index)=>(
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-12 ">
                            <div class="card custom-card" style={{height:"380px"}}>
                                <Link to={`/blog/${item.id}`}  >
                                    <div style={{height:"200px"}}>
                                        <img class="card-img-top w-100 w-100 h-100" src={`data:image/jpeg;base64,${item.image}`}  alt=""/>
                                    </div>
                                </Link>
                                <div class="card-body pb-0">
                                    <Link to={`/blog/${item.id}`} class="mt-4"><h5 class=" text-dark">{item.name}</h5></Link>
                                </div>
                                <div class="card-footer p-3">
                                    <div class="item7-card-desc d-sm-flex mt-0">
                                        <div class="d-flex ms-auto">
                                            <a href="javascript:void(0);" class="d-flex me-3"><span class="fe fe-calendar text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">Jan-18-2020</div></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
            </div>
        </div>
  )
}
