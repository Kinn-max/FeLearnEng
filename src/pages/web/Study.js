import React from 'react'
import ListVocabulary from '../../layouts/web/ListVocabulary'
import ListParagraph from '../../layouts/web/ListParagraph'
import ListExam from '../../layouts/web/ListExam'


export default function Study() {
  return (
    <div className='container'>
        <ListVocabulary/>
        <ListParagraph/>
        <ListExam/>
    </div>
  )
}
