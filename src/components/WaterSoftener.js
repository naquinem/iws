import {useState, useEffect} from 'react';


	function WaterSoftener() {

  	const [waterSoftener, setWaterSoftener] = useState([])
  	useEffect (() => {
    		setWaterSoftener([
      		{
        			description:'FRP Tank',
        			price: '7,000',
        			quantity: '1',
      		},
     			{
        			description:'Brine Tank',
        			price: '5,000',
        			quantity: '2',
      		},
    
    		])
 	}, [])
  	return (
    		<div className="App">
      		{/* const {movies} = movies */}
      		{waterSoftener.map((water, index) => {
        			return(
          				<div className="waterSoftener">
                    <div className='wtr-dscptn'>
                      <h5>Description</h5>
                      <p>{water.description}</p>
                    </div>
                    <div className='water-prc'>
                      <h5>Price</h5>
                      <p>{water.price}</p>
                    </div>
                    <div className='water-qty'>
                      <h5>Quantity</h5>
                      <p>{water.quantity}</p>
                    </div>
          				</div>
                  
        			)
      		}
      		)}
    		</div>
  	);  
  }
	export default WaterSoftener;
