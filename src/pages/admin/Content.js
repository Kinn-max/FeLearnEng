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


export default function Content() {
  return (
    <div className="col-xl-10">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/topic/1" element={<ListVocabulary />} />
        <Route path="/topic/1/vocabulary/1" element={<DetailVocabulary />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/exam/1" element={<ListQuestion />} />
        <Route path="/exam/1/question/1" element={<DetailQuestion />} />
        <Route path="/grammar" element={<Grammar />} />
        <Route path="/grammar/1" element={<ListGrammar />} />
        <Route path="/grammar/edit-grammar" element={<DetailGrammar />} />
        <Route path="/user-list" element={<ListUser />} />
      </Routes>
    </div>
  )
}
