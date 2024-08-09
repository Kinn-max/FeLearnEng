
import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemCategory() {
  return (
    <Link to={"#"}>
        <li class="list-group-item d-flex">
                <img src="../assets/images/media/media-9.jpg" class="avatar rounded-3 avatar-xl me-3 my-auto" alt="avatar-img"/>
                <div class="my-auto">
                    <span class="d-block fs-14 text-dark fw-semibold">Health</span>
                    <a class="text-default ">Health care and fitness awareness</a>
                    <small class="d-block text-muted">22 hrs ago</small>
                </div>
        </li>
    </Link>
  )
}
