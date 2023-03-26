import React, { useState, useEffect } from "react";
import * as S from "./indexStyle";
import { useCart } from "../../hook/useCart";

const SearchBar = () => {
  const { products } = useCart();
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [query, products]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <S.SearchBarContainer>
        <S.SearchIcon />
        <S.SearchInput
          type="text"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        />
      </S.SearchBarContainer>
      {query.length > 0 ? (
        <S.SearchResultContainer>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((result) => (
              <S.LinkStyle to={`../../ProductDetail/${result.id}`}>
                <S.SearchDivWrap key={result.id}>
                  <S.SearchImg src={result.imageUrl} alt={result.title} />
                  <div>{result.title}</div>
                </S.SearchDivWrap>{" "}
              </S.LinkStyle>
            ))
          ) : (
            <S.NoSearchResult>No results found for "{query}"</S.NoSearchResult>
          )}
        </S.SearchResultContainer>
      ) : null}
    </form>
  );
};

export default SearchBar;
