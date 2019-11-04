import React, { useState, useEffect } from 'react';
import './App.css';
import cn from 'classnames';


const LIGHTS = [
	{
		color: 'red',
		time: 3000,
	},
	{
		color: 'yellow',
		time: 1000,
	},
	{
		color: 'green',
		time: 5000,
	}
]



const App = () => {
	const [reverse, SetReverse] = useState(false)
	const [activeIndex, changeActiveIndex] = useState(0)
	const activeColor = LIGHTS[activeIndex].color
	

	useEffect(() => {
		
		
		let nextColor;
		
		switch(activeColor) {
			case 'red':
				
				nextColor = activeIndex + 1;
				SetReverse(false);
				

				break;
			case 'green':
				
				nextColor = activeIndex - 1;
				SetReverse(true);
				

				break
			default: {
				
				nextColor = reverse ? activeIndex - 1 : activeIndex + 1;
			}
		}


			setTimeout(() => {
				changeActiveIndex(nextColor)

			}, LIGHTS[activeIndex].time)
		
			
			
	})



	return (
		<div>
			<div className="TrafficLight">
				{
					LIGHTS.map(({ color })   => <div className={cn('TrafficLight_item', `TrafficLight_item_${color}`, {
						TrafficLight_item_active: color === activeColor
					} 
					)}
					/>  )
				}
			</div>
		</div>
	)
}


export default App;
