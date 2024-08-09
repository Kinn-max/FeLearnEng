
import React from 'react'
import ItemExam from '../../components/web/items/ItemExam'

export default function ListExam() {
  return (
    <div class="card custom-card">
        <div class="card-header justify-content-between">
            <div class="card-title">
                Danh sách từ vựng
            </div>
            <div class="prism-toggle">
                <button class="btn btn-sm btn-primary-light">Show Code<i class="ri-code-line ms-2 d-inline-block align-middle"></i></button>
            </div>
        </div>
        <div class="row px-3 text-start">
            <ItemExam/>
            <ItemExam/>
        </div>
    </div>
  )
}
