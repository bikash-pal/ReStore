import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Product } from "../../app/models/product";
import agent from "../../app/api/agent";
import { RootState } from "../../app/store/configureStore";

const productsAdaptar = createEntityAdapter<Product>();

export const fetchProductsAsync = createAsyncThunk<Product[]>(
  "catalog/fetchProductsAsync",
  async () => {
    try {
      return await agent.Catalog.list();
    } catch (error) {
      console.log(error);
    }
  }
);

//97 not working

// export const fetchProductAsync = createAsyncThunk<Product, number>(
//   "catalog/fetchProductAsync",
//   async (productId) => {
//     try {
//       return await agent.Catalog.details(productId);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: productsAdaptar.getInitialState({
    productLoaded: false,
    status: "idle",
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.status = "pendingFetchProducts";
    });
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      productsAdaptar.setAll(state, action.payload);
      state.status = "idle";
      state.productLoaded = true;
    });

    builder.addCase(fetchProductsAsync.rejected, (state) => {
      state.status = "idle";
    });
    //97 not working
    // builder.addCase(fetchProductAsync.pending, (state) => {
    //   state.status = "pendingFetchProduct";
    // });
    // builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
    //   productsAdaptar.updateOne(state, action.payload);
    //   state.status = "idle";
    // });
  },
});

export const productSelectors = productsAdaptar.getSelectors(
  (state: RootState) => state.catalog
);
