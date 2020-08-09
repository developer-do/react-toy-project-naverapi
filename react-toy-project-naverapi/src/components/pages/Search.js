import React from "react";
import styled from "styled-components";
import SearchButton from "@material-ui/core/Button";
import { useImmer } from "use-immer";
import { ListItem } from "../listing";
import { Input } from "../common";
import axios from "axios";

// styled start
const WrapperDiv = styled.div`
  padding-left: 160px;
  padding-top: 100px;
`;

const FixSearchWrap = styled.div`
  position: fixed;
  top: 0;
  left: 160px;
  width: 100%;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
  > * {
    float: left;
  }

  label {
    width: 40%;
    display: block;
  }
`;

// styled end

const Wrapper = () => {
  const [input, updateInput] = useImmer({
    keyword: "",
    brand: "",
  });

  const UpdateKeyword = (keyword) => {
    updateInput((draft) => {
      draft.keyword = keyword;
    });
  };

  const UpdateBrand = (brand) => {
    updateInput((draft) => {
      draft.brand = brand;
    });
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {};

  return (
    <WrapperDiv>
      <FixSearchWrap>
        <Input
          label="키워드"
          cls="keyword"
          onChange={(e) => {
            UpdateKeyword(e.target.value);
          }}
          onKeyPress={(e) => {
            handleKeyPress(e);
          }}
          value={input.keyword}
        />
        <Input
          label="상호명"
          cls="brand"
          onChange={(e) => {
            UpdateBrand(e.target.value);
          }}
          onKeyPress={(e) => {
            handleKeyPress(e);
          }}
          value={input.brand}
        />
        <SearchButton
          variant="contained"
          color="primary"
          onClick={handleSearchClick}
        >
          검색
        </SearchButton>
      </FixSearchWrap>
      <ListItem />
    </WrapperDiv>
  );
};

export default Wrapper;
