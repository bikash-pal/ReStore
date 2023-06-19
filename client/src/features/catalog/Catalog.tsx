import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

export default function Catalog(props: any) {
  return (
    <>
      <ProductList products={props.products} />
      {/* <ul>
        {props.products.map((product: any) => (
          <li key={product.id}>
            {product.name}-{product.price}
          </li>
        ))}
      </ul> */}

      {/* <button onClick={addProducts}>AddProduct</button> */}
    </>
  );
}
