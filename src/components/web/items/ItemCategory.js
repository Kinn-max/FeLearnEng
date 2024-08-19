
import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemCategory({blog}) {
  return (
    <Link to={"/grammar/"+ blog.id}>
        <li class="list-group-item d-flex">
                <img src={`data:image/jpeg;base64,${blog.image}`} style={{maxWidth: "100px"}} class="avatar rounded-3 avatar-xl me-3 my-auto" alt="avatar-img"/>
                <div class="my-auto">
                    <span class="d-block fs-14 text-dark fw-semibold">{}</span>
                    <a class="text-default ">{blog.name}</a>
                    <small class="d-block text-muted">{blog.createdAt}</small>
                </div>
        </li>
    </Link>
  )
}
