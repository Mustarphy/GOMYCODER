const ProdCard = ({img, name, price, description, size}) => {
    return(
        <div style={{
            border: '1px solid gray',
            padding: '10px',
            margin: '20px',
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>

            <img src={img} alt="" width={size} height={size}/>
            <h1>{name}</h1>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            </div>
    );
};

export default ProdCard;