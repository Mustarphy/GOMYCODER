import exp from 'constants';
import ProdCard from './prodCard'

const MyCard = ({img, name, price, description, size}) => {
    return (
        <ProdCard
        img={img}
        name={name}
        price={price}
        description={description}
        size={size}
        />
    );
};

export default MyCard