import ItemVocabulary from "../../components/web/items/ItemVocabulary";

function ListVocabulary(){


    return(
        <div class="card custom-card">
                    <div class="card-header justify-content-between">
                        <div class="card-title">
                            Danh sách từ vựng
                        </div>
                        <div class="prism-toggle">
                            <button class="btn btn-sm btn-primary-light">Show Code<i class="ri-code-line ms-2 d-inline-block align-middle"></i></button>
                        </div>
                    </div>
         
                    <div class="row px-4">
                        <ItemVocabulary/>
                        <ItemVocabulary/>
                        <ItemVocabulary/>
                    </div>
            </div>
    )
}
export default ListVocabulary;