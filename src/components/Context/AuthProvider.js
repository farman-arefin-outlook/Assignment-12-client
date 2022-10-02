import { createContext } from "react";
import useCart from "../hooks/useCart.js";
import useFirebase from "../hooks/useFirebase.js";
import useItems from "./../hooks/useItems.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // hooks
    const AllContexts = useFirebase();
    const { items, totalPage, currentPage, setCurrentPage } = useItems();
    const { addToCart, selecteditem, remove, setSelecteditem } = useCart();

    const data = {
        currentPage,
        setCurrentPage,
        AllContexts,
        totalPage,
        items,
        addToCart,
        selecteditem,
        remove,
        setSelecteditem,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
