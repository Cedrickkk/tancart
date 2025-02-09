import { CartSlice } from "@/store/cart-slice";
import { ProductSlice } from "@/store/product-slice";
import { UserSlice } from "@/store/user-slice";

export type Store = UserSlice & ProductSlice & CartSlice;
