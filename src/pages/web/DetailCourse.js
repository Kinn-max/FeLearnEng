import React, { useEffect, useState } from "react"
import OtherCourse from "../../components/OtherCourse"
import { useParams } from "react-router-dom"
import { getProductById, getRanDomProduct } from "../../api/ProductApi"
import Empty from "../../Utils/Empty"
import ShowNotification from "../../Utils/Notification"
import { addCartApi } from "../../api/AddCartApi"
import { getAllCommentById, postComment } from "../../api/ProductRatingApi"
import StarRating from "../../Utils/StarRating"
import StarRatings from "react-star-ratings"
import Loading from "../../Utils/Loading"

export default function DetailCourse() {
  const [loading, setLoading] = useState(true)
  const [reload, setReload] = useState(false)
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(null)
  const [listProduct, setListProduct] = useState([])
  const [listComment, setListComment] = useState([])
  const [rating, setRating] = useState(0)
  const [review, setReview] = useState("")
  const [visibleComments, setVisibleComments] = useState(3)
  const { id } = useParams()
  const token = localStorage.getItem("jwtToken")
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      try {
        const data = await getProductById(id)
        if (data) {
          setProduct(data)
          setPrice(data.price)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])
  useEffect(() => {
    const fetchRating = async () => {
      try {
        const data = await getAllCommentById(id)
        if (data) {
          setListComment(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchRating()
  }, [id, reload])
  const handlePlus = () => {
    setQuantity((prevQuantity) => prevQuantity + 1)
  }

  const handleMinus = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1))
  }

  const handleAddCart = async (e) => {
    e.preventDefault()
    if (!product || !price) {
      ShowNotification("error", "Lỗi", "Thông tin sản phẩm không hợp lệ")
      return
    }
    const data = {
      idProduct: id,
      price: price,
      numberOfProducts: quantity,
      totalMoney: price * quantity,
    }
    try {
      const response = await addCartApi(data)
      if (response) {
        ShowNotification(
          "success",
          "Thành công",
          "Sản phẩm đã được thêm vào giỏ hàng"
        )
      }
    } catch (error) {
      console.error("Error:", error)
      ShowNotification(
        "error",
        "Lỗi",
        "Đã có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng"
      )
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await getRanDomProduct()
        if (data) {
          setListProduct(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  const changeRating = (newRating) => {
    setRating(newRating)
  }
  const hanleSubmit = async (e) => {
    e.preventDefault()
    console.log(rating, review)
    const data = {
      rating: rating,
      review: review,
    }
    if (token == null)
      ShowNotification("error", "Lỗi", "Bạn cần đăng nhập trước!")
    if (rating == 0 || review == "") {
      ShowNotification(
        "warning",
        "Thiếu dữ liệu",
        "Bạn chưa đánh giá sao hoặc bài viết"
      )
    } else {
      try {
        const response = await postComment(id, data)
        setReload((prev) => !prev)
        setRating(0)
        setReview("")
      } catch (error) {
        console.error("Error:", error)
        ShowNotification(
          "error",
          "Lỗi",
          "Đã có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng"
        )
      }
    }
  }
  const handleShowMore = () => {
    setVisibleComments(listComment.length)
  }
  if (loading) {
    return <Loading />
  }

  return (
    <>
      {product ? (
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body h-100">
                  <div className="row text-start ">
                    <div className="col-xl-5 col-lg-12 col-md-12">
                      <div className="product-carousel  border br-5">
                        <div
                          id="Slider"
                          className="carousel slide"
                          data-bs-ride="false"
                        >
                          <div className="carousel-inner py-3">
                            <div className="carousel-item active">
                              <img
                                src={`data:image/jpeg;base64,${product.image}`}
                                alt="img"
                                style={{ width: "100%", height: "100%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="details p-3 col-xl-7 col-lg-12 col-md-12 mt-4 mt-xl-0">
                      <h5 className="product-title mb-1 text-capitalize fs-3">
                        {product.name}
                      </h5>
                      <h6 className="price fs-5">
                        Giá bán:
                        <span className="h4 ms-2 fs-1 d-inline-block text-danger">
                          {price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                      </h6>
                      <p className="product-description fs-5">
                        {product.description}
                      </p>
                      <div className="col-xl-2">
                        <div className="handle-counter input-group rounded flex-nowrap">
                          <button
                            className="btn btn-icon btn-light input-group-text product-quantity-minus"
                            onClick={handleMinus}
                          >
                            <i className="ri-subtract-line"></i>
                          </button>
                          <input
                            type="text"
                            className="form-control form-control-sm text-center"
                            aria-label="quantity"
                            id="product-quantity2"
                            value={quantity}
                            readOnly
                          />
                          <button
                            className="btn btn-icon btn-light input-group-text product-quantity-plus"
                            onClick={handlePlus}
                          >
                            <i className="ri-add-line"></i>
                          </button>
                        </div>
                      </div>
                      <div className="action mt-4">
                        <button
                          onClick={handleAddCart}
                          className="add-to-cart btn btn-primary"
                        >
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title fs-5">Comments</h3>
                </div>
                <div class="card-body d-flex justify-content-between">
                  <div className="col-xl-4">
                    <form onSubmit={hanleSubmit}>
                      <div class="mt-2">
                        <div className="d-flex py-3">
                          <span className="px-3 pt-1"> Chọn sao đánh giá:</span>
                          <StarRatings
                            rating={rating}
                            starRatedColor="yellow"
                            starHoverColor="orange"
                            changeRating={changeRating}
                            numberOfStars={5}
                            name="rating"
                            starEmptyColor="gray"
                            starDimension="30px"
                          />
                        </div>
                        <div class="form-group mb-3">
                          <textarea
                            class="form-control"
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            rows="6"
                            placeholder="Write Review"
                          ></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Send Reply
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-xl-7 text-start border-start ps-5">
                    {listComment
                      .slice(0, visibleComments)
                      .map((item, index) => (
                        <div
                          className="d-sm-flex p-3 mt-1 border "
                          style={{ borderRadius: "15px" }}
                          key={index}
                        >
                          <div className="d-flex me-3">
                            <a href="javascript:void(0);">
                              <img
                                className="media-object rounded-circle avatar"
                                alt="64x64"
                                src="../assets/images/faces/5.jpg"
                              />
                            </a>
                          </div>
                          <div className="media-body">
                            <h6 className="mt-0 mb-1 font-weight-semibold">
                              {item.fullName}
                              <span
                                className="fs-14 ms-0"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title=""
                                data-original-title="verified"
                              >
                                <i className="fe fe-check-circle text-success fs-12"></i>
                              </span>
                              <span className="fs-14 ms-2 d-inline-block">
                                <StarRating rating={item.rating} />
                              </span>
                            </h6>
                            <p className="font-13 mb-2 mt-2">{item.review}</p>
                          </div>
                        </div>
                      ))}
                    <div className="d-flex justify-content-center">
                      {visibleComments < listComment.length && (
                        <button
                          onClick={handleShowMore}
                          type="button"
                          class="mt-3 btn btn-link rounded-pill btn-wave waves-effect waves-light"
                        >
                          Xem thêm
                        </button>
                      )}
                    </div>
                    <div className="d-flex justify-content-center">
                      {listComment.length === 0 && (
                        <span type="button" className="mt-3 ">
                          Chưa có bình luận nào cho cuốn sách này
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-title">Sách gợi ý cho bạn!</h3>
          <div className="row related-products-ltr-l">
            {listProduct.map((item, index) => (
              <OtherCourse key={index} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container d-flex ">
          <div className="row justify-content-center">
            <Empty />
          </div>
        </div>
      )}
    </>
  )
}
