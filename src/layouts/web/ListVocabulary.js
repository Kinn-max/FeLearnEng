import { useEffect, useState } from "react";
import ItemVocabulary from "../../components/web/items/ItemVocabulary";
import { getAllItemOfCategory } from "../../api/CategoryApi";

function ListVocabulary(){
    const [listCategory, setListCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [listVocabulary, setListVocabulary] = useState({}); 
    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            try {
                const data = await getAllItemOfCategory("vocabulary");
                if (data) {
                    setListCategory(data);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);
    return(
        <div class="card custom-card">
            <div class="card-header px-5 justify-content-between">
                <div class="card-title">
                    Danh sách từ vựng
                </div>
            </div>
            <div class="row px-4 py-4">
                {listCategory.map((item, index) => (
                    <ItemVocabulary key={item.id} vocabulary={item}/>
                ))}
            </div>
        </div>
    )
}
export default ListVocabulary;