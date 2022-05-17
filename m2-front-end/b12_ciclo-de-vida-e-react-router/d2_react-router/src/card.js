import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({
  pokemon: {
    name,
    type,
    averageWeight: { value, measurementUnit },
    image,
    id,
  },
}) => (
  <Link
    className="card flex align-middle border-2 rounded-lg justify-center
  bg-white m-3 py-4 content-around min-w-fit flex-grow basis-1"
    to={`/pokemons/${id}`}
  >
    <div className="text-center flex flex-col justify-center">
      <p>{name}</p>
      <p>{type}</p>
      <p>{`Average weight: ${value} ${measurementUnit}`}</p>
    </div>
    <img src={image} alt={name} className="bg-cyan-700 rounded-full" />
  </Link>
);

Card.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.exact({
      value: PropTypes.string.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }),
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
  }),
};

export default Card;
