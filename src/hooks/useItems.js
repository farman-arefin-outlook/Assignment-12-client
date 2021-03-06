import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const size = 9;
    useEffect(() => {
        fetch(
            `http://localhost:5000?size=${size}&&page=${currentPage}`
        )
            .then((res) => res.json())
            .then((data) => {
                setItems(data.items);
                const totalData = data.count;
                const pages = Math.ceil(totalData / size);
                setTotalPage(pages);
            });
    }, [currentPage]);
    return { items, setItems, totalPage, currentPage, setCurrentPage };
};

export default useItems;
