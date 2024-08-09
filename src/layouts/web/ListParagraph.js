
import React from 'react'
import ItemParagraph from '../../components/web/items/ItemParagraph'

export default function ListParagraph() {
  return (
    <div class="card custom-card">
        <div class="card-header justify-content-between">
            <div class="card-title">
                Đọc điền từ vào đoạn văn
            </div>
            <div class="prism-toggle">
                <button class="btn btn-sm btn-primary-light">Show Code<i class="ri-code-line ms-2 d-inline-block align-middle"></i></button>
            </div>
        </div>

        <div class="row px-4">
                <ItemParagraph/>
                <ItemParagraph/>
                <ItemParagraph/>
                <ItemParagraph/>
        </div>
    </div>
  )
}
