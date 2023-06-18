import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Product } from "../../app/models/product";

export default function Catalog(props: any) {
  return (
    <>
      {/* <ul>
        {props.products.map((product: any) => (
          <li key={product.id}>
            {product.name}-{product.price}
          </li>
        ))}
      </ul> */}

      <List>
        {props.products.map((product: any) => (
          <ListItem key={product.id}>
            <ListItemAvatar>
              <Avatar src={product.pictureUrl} />
            </ListItemAvatar>
            <ListItemText>
              {product.name}-{product.price}
            </ListItemText>
          </ListItem>
        ))}
      </List>

      {/* <button onClick={addProducts}>AddProduct</button> */}
    </>
  );
}
