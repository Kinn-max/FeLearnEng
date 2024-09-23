
import React, { useEffect, useState } from 'react'
import ItemExam from '../../components/web/items/ItemExam'
import { getAllItemOfCategoryAndStatus } from '../../api/CategoryApi';

export default function ListExam() {
    const [ListExam, setListExam] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            try {
                const data = await getAllItemOfCategoryAndStatus("exam");
                if (data) {
                    setListExam(data);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);
  return (
    <div class="card custom-card">
        <div class="card-header justify-content-between pb-4">
            <div class="card-title">
                Danh sách bài thi
            </div>
        </div>
        <div class="row px-3 text-start">
            {ListExam.map((item, index) => (
                  <ItemExam exam={item} key={item.id}/>   
            ))}       
        </div>
    </div>
  )
}
