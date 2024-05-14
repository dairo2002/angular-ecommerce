// Ruta en donde se encuentran las APIS
// https://freeapi.miniprojectideas.com/index.html

export const Constante = {
    // Ruta incial de las api
    // https://freeapi.miniprojectideas.com/api/BigBasket/
    API_END_POINT: "https://freeapi.miniprojectideas.com/api/BigBasket/",
    METHODS : {
        // Se agrega el final de la ruta 
        // EJ: https://freeapi.miniprojectideas.com/api/BigBasket/GetAllCategory
        GET_ALL_PRODUCT: "GetAllProducts",        
        GET_ALL_CATEGORY: "GetAllCategory",
        CREATE_PRODUCT: "CreateProduct",       
        UPDATE_PRODUCT: "UpdateProduct",
        DELETE_PRODUCT: "DeleteProductById?id="
        
    }
} 