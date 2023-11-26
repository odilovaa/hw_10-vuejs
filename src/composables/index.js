import { onMounted, ref  } from 'vue';

export function useProduct() {
    const products = ref([])
    const limitSize = ref(null)
    const name = ref('')
    const search = ref('')
    const filter = ref([])

    function fetchProducts(limit) {
        fetch(`http://localhost:3000/products?${limit ? `_limit=${limit}` : null}`)
        .then(res => res.json())
        .then(json => products.value = json)
    }

    function onCategoryFilter() {
        fetch(`http://localhost:3000/products?category=${name.value}`)
        .then(res => res.json())
        .then(json => products.value = json)
    }

    function onLimitChange() {
        fetchProducts(limitSize.value)
    }

    function searchTitle() {
        for (let i = 0; i < 20; i++) {
            if (search.value != ' ' && search.value != '') {
                if(products.value[i].title.includes(search.value)){
                    console.log(true);
                }
            }
            
        }
    }

    onMounted(() => {
        fetchProducts()
    })

    

    return {
        products,
        limitSize,
        onLimitChange,
        name,
        onCategoryFilter,
        search,
        searchTitle
    }
}