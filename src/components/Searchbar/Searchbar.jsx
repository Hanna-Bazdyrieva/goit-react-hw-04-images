// import Box from 'components/Box';
import { useState } from 'react';
import {
  StyledBar,
  SearchForm,
  ButtonSearch,
  SearchInput,
} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
// import { GoSearch } from 'react-icons/go';

const Searchbar = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <StyledBar>
      <SearchForm onSubmit={handleSubmit}>
        <ButtonSearch type="submit">
          {/* <ButtonLabel class="button-label"> */}
          <FcSearch />
          {/* <GoSearch /> */}
          {/* </ButtonLabel> */}
        </ButtonSearch>
        <SearchInput
          type="text"
          autocomplete="off"
          value={input}
          autoFocus
          placeholder="Search images"
          onChange={handleInput}
        />
      </SearchForm>
    </StyledBar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
