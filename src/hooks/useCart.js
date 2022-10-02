import { useEffect, useState } from "react";
import useFirebase from "./useFirebase.js";

const useCart = () => {
    const { user } = useFirebase();
    const { uid, displayName, email } = user;
    const [selecteditem, setSelecteditem] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:5000/cart/${uid}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length) {
                    setSelecteditem(data);
                }
            });
    }, [uid]);

    function addToCart(item) {
        const isHave = selecteditem.find(
            (selected) => selected._id === item._id
        );
        delete item._id;
        item.uid = uid;
        item.name = displayName;
        item.email = email;
        item.status = "pending";

        if (isHave) {
            alert("Service has been already selected!");
        } else {
            fetch("https://localhost:5000/item/add", {
                method: "post",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(item),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        const newSelection = [...selecteditem, item];
                        setSelecteditem(newSelection);
                    }
                });
        }
    }

    function remove(id) {
        const confirmation = window.confirm("Are you sure to confirm!!");
        if (confirmation) {
            fetch(`https://localhost:5000/delete/${id}`, {
                method: "delete",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount === 1) {
                        const selectAfterRemove = selecteditem.filter(
                            (item) => item._id !== id
                        );
                        setSelecteditem(selectAfterRemove);
                    } else {
                        alert("Something went wrong!!");
                    }
                });
        }
    }

    return { setSelecteditem, remove, addToCart, selecteditem };
};

export default useCart;
