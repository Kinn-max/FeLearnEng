import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getBlogById } from '../../api/GrammarApi';

export default function Blog() {
    const [blog, setBlog] = useState(null)

    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBlogById(id);
                console.log(data)
                if (data) {
                    setBlog(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
  return (
    <div className='container card p-3'style={{background:"#ffffff"}}>
            {blog?(
                <div class="row text-start" >
                    <div style={{height:"500px"}}>
                        <img class="card-img-top w-100 w-100 h-100" src={`data:image/jpeg;base64,${blog.image}`}  alt=""/>
                    </div>
                    <span class=" text-center py-5 fs-2 text-capitalize">{blog.name}</span>
                    <div className='px-5'> 
                         <div dangerouslySetInnerHTML={{ __html: blog.content }} /> 
                    </div>
                </div>
            ):(
                <div>Không tìm thấy blog </div>
            )}
    </div>
  )
}
