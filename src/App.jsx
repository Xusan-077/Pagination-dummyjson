import ReactPaginate from "react-paginate";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem/ProductItem";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);

  const [totalPage, setTotalPage] = useState(0);

  let [limit, setLimit] = useState(10);

  async function getProducts() {
    try {
      setIsLoading(true);

      const res = await axios.get(
        `https://dummyjson.com/products?skip=${page * limit}&limit=${limit}`
      );

      setProducts(res.data.products);

      console.log(res.data);

      setTotalPage(res.data.total);

      setIsLoading(false);
    } catch (err) {
      console.log("Get Productsda xatolik");
    }
  }

  useEffect(() => {
    getProducts();
  }, [page]);

  // function handlePageClick({ selected }) {
  //   setPage(selected);
  // }

  return (
    <div className="min-h-screen bg-gray-50 py-5 px-5 mb-20">
      <h1 className="text-[25px] font-bold text-center text-gray-800 mb-5">
        Products
      </h1>

      {isLoading ? (
        <p className="text-center text-[20px] text-[red]">Loading...</p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-7xl mx-auto">
          {products.map((item) => (
            <ProductItem key={item.id} {...item} />
          ))}
        </ul>
      )}

      {/* Pagination with Library */}

      {/* <ReactPaginate
        previousLabel={"←"}
        nextLabel={"→"}
        breakLabel={"..."}
        pageCount={Math.ceil(allPage / limit)}
        onPageChange={handlePageClick}
        containerClassName="fixed bottom-0 left-0 w-full bg-white flex justify-center flex-wrap gap-2 py-3 border-t shadow-md z-50
                     sm:gap-3 md:gap-4"
        pageClassName="px-2 py-1 text-sm border rounded-md text-gray-700 hover:bg-blue-100 
                 sm:px-3 sm:py-1.5 sm:text-base md:px-4 md:py-2"
        activeClassName="bg-blue-600 text-white"
        previousClassName="px-2 py-1 text-sm border rounded-md hover:bg-blue-100 
                     sm:px-3 sm:py-1.5 sm:text-base md:px-4 md:py-2"
        nextClassName="px-2 py-1 text-sm border rounded-md hover:bg-blue-100 
                 sm:px-3 sm:py-1.5 sm:text-base md:px-4 md:py-2"
        disabledClassName="opacity-50 cursor-not-allowed"
      /> */}

      {/* Pagination with Handle */}

      <div className="flex items-center gap-10 justify-center mt-5">
        <select onChange={(evt) => setLimit(Number(evt.target.value))}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
        <button
          className={`cursor-pointer ${page === 0 ? "opacity-40" : ""} `}
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          prev
        </button>
        {page + 1}/{Math.ceil(totalPage / limit)}
        <button
          className={`cursor-pointer ${
            page + 1 === Math.ceil(totalPage / limit) ? "opacity-40" : ""
          } `}
          disabled={page + 1 === Math.ceil(totalPage / limit)}
          onClick={() => setPage(page + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
}
