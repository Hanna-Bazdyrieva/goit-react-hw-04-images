import { Button } from './LoadMoreButton.styled';
import PropTypes from 'prop-types';
import {TfiMore} from 'react-icons/tfi'
import { IconContext } from "react-icons";


// import { StyledBar } from './Searchbar.styled';

const LoadMoreButton = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <IconContext.Provider value={{color: '#ebd996', size: "50px", style: { verticalAlign: 'middle', padding:'2px 5px' } }}>
        <TfiMore/> Load More  <TfiMore/>
      </IconContext.Provider>
    </Button>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
