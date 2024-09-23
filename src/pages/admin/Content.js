import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../layouts/admin/Home'
import Topic from '../../layouts/admin/Topic'
import ListVocabulary from '../../layouts/admin/ListVocabulary'
import DetailVocabulary from '../../components/admin/DetailVocabulary'
import Exam from '../../layouts/admin/Exam'
import ListQuestion from '../../layouts/admin/ListQuestion'
import DetailQuestion from '../../components/admin/DetailQuestion'
import Grammar from '../../layouts/admin/Grammar'
import ListGrammar from '../../layouts/admin/ListGrammar'
import DetailGrammar from '../../components/admin/DetailGrammar'
import ListUser from '../../layouts/admin/ListUser'
import Breadcrumb from '../../Utils/Breadcrumb'
import Product from '../../layouts/admin/Product'
import ListProduct from '../../layouts/admin/ListProduct'
import Order from '../../layouts/admin/Order'




export default function Content() {
  return (
    <div className="col-xl-10">
      <Breadcrumb />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order/>} />
        <Route path="/topic" element={<Topic/>} />
        <Route path="/topic/:id" element={<ListVocabulary/>} />
        <Route path="/topic/:id/vocabulary/:id" element={<DetailVocabulary/>} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/exam/:id" element={<ListQuestion />} />
        <Route path="/exam/:id/question/:id" element={<DetailQuestion />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/grammar/:id" element={<ListGrammar />} />
        <Route path="/grammar/:idCate/edit-grammar" element={<DetailGrammar />} />
        <Route path="/grammar/:idCate/edit-grammar/:idEdit" element={<DetailGrammar />} />
        <Route path="/user-list" element={<ListUser />} />
        <Route path="/category" element={<Product />} />
        <Route path="/category/:id" element={<ListProduct />} />
      </Routes>
    </div>
  )
}
