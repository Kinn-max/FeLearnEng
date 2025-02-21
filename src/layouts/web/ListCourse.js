import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  getAllItemOfCategory,
  getAllItemOfCategoryAndStatus,
} from "../../api/CategoryApi"
import { getAllProductByCategoryStatus } from "../../api/ProductApi"
import { Card } from "antd"
import Meta from "antd/es/card/Meta"

export default function ListCourse() {
  const [listCategory, setListCategory] = useState([])
  const [loading, setLoading] = useState(false)
  const [listProduct, setListProduct] = useState({})

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true)
      try {
        const data = await getAllItemOfCategoryAndStatus("product")
        if (data) {
          setListCategory(data)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  useEffect(() => {
    const fetchProductsForAllCategories = async () => {
      setLoading(true)
      try {
        const productData = {}
        for (let category of listCategory) {
          const products = await getAllProductByCategoryStatus(category.id)
          productData[category.id] = products || []
        }
        setListProduct(productData)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    if (listCategory.length > 0) {
      fetchProductsForAllCategories()
    }
  }, [listCategory])

  if (loading) {
    return <div className="text-center mt-5">Đang tải...</div>
  }
  return (
    <div className="card custom-card pb-5">
      {listCategory.map((item, index) => (
        <div key={index} className="row d-flex row-sm">
          <div className="card-header px-3 pb-3 justify-content-between">
            <div className="card-title fs-6">{item.name}</div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {listProduct[item.id]?.map((product, idx) => (
              <Link key={idx} to={`/book-detail/${product.id}`}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      src={`data:image/jpeg;base64,${product.image}`}
                      alt="product-image"
                      style={{ width: "100%", height: "240px" }}
                    />
                  }
                >
                  <Meta
                    title={product.name}
                    description={product.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  />
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
