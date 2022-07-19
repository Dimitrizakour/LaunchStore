import  "./ProductItem.css";
import ProductImage from "../../assets/coming-soon.jpg"
import ProductDetails from "./ProductDetails";


const ProductItem = (props) => {

    return (

     <div className="container"> 
        
        {/* category name and product image section */}
        <div className="item_container">
            <span className="category_name">Apparel {'>'} </span> <span className="product_name"> Product Title</span>
            <img  className="product_img" src={ProductImage} alt="product"/>
        </div>

         {/* Product details section */}
        <ProductDetails/>

    </div> 

    );
};

export default ProductItem;