import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HostWait.css' ;

export default function Details() {
	
	const [counter, setCounter] = useState(15);

	React.useEffect(() => {
		const timer =
		counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
		return () => clearInterval(timer);
	  }, [counter]);

	
	return (
		<div className='app'>
					<div className='theme'>
							Movies / Chernobyl			
					</div>
					<div className='quizz-card'>
						<div className='image-container'>
							<img className='image' src="https://static.hbo.com/content/dam/hbodata/series/chernobyl/key-art/chernobyl-ka-1920.jpg" alt="paris"/>
						</div>
						<div className='quizz-informations'>
							<h2>Code: ABC21</h2>
						</div>
					</div>				
					<div className='details'>
						<p className='titre'>Participants:</p>
						<p>
							abcd
						</p>
					</div>
					<div className='bouttons'>
						<button  clasName="host">Cancel</button>
						<Link to='/play'>
							<button  clasName="play">Start the Quiz</button>
						</Link>
					</div>

		</div>
	);
}
