import React from "react";
import Products from "../components/Products";
import { useProductByCategory, useProducts } from "../hooks/useProducts";
import ProductFilter from "../components/ProductFilter";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import Pagination from "../components/Pagination";
import LoadMoreButton from "../components/LoadMoreButton";

const ShopPage = () => {
    const { data: products, isLoading: productsLoading, search, setSearch,hasNextPage,isFetchingNextPage,fetchNextPage} = useProducts();

    const {
        category,
        setCatergory,
        data: categoriesData,
        isLoading: categoriesProductsLoading,
    } = useProductByCategory();

    const finalProducts = category.trim() ? categoriesData?.filter((product) => product.title.toLowerCase().includes(search.toLowerCase())) : products;



    return (
        <>
          <ProductFilter
                search={search}
                setSearch={setSearch}
                category={category}
                setCategory={setCatergory}
            />


            {(productsLoading || categoriesProductsLoading) ? (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                </div>
            ) : (
                <Products products={finalProducts} />
            )}

            {/* {finalProducts?.length > 0 &&  <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPrevious={() => setPage((prev) => prev - 1)}
                onNext={() => setPage((prev) => prev + 1)}
            />} */}

            {
             hasNextPage && 
             <LoadMoreButton
             onClick={()=>fetchNextPage()}
             isLoading={isFetchingNextPage}
             />
            }
        </>
    );
};

export default ShopPage;
