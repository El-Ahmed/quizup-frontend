import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Details.css' ;

export default function Details() {
	
	const [counter, setCounter] = useState(15);

	React.useEffect(() => {
		const timer =
		counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
		return () => clearInterval(timer);
	  }, [counter]);

	
	return (
		<div className='details-app'>
					<div className='theme'>
							Movies / Chernobyl			
					</div>
					<div className='quizz-card'>
						<div className='image-container'>
							<img className='image' src="https://static.hbo.com/content/dam/hbodata/series/chernobyl/key-art/chernobyl-ka-1920.jpg" alt="paris"/>
						</div>
						<div className='quizz-informations'>
							<p className='information-1'>
								<p>Date :</p>
								<p>Time per question :</p>
								<p>Questions :</p>
								<p>Points :</p>
							</p>
							<p className='information-2'>
								<p>23 / 05 / 2022</p>
								<p>20 s</p>
								<p>14</p
								><p>200</p>
							</p>
						</div>
					</div>				
					<div className='details'>
						<p className='titre'>Details</p>
						<p> The Chernobyl disaster was a nuclear accident that occurred on 26 April 1986 at the No.
							4 reactor in the Chernobyl Nuclear Power Plant, near the city of Pripyat in the north of the Ukrainian SSR in the Soviet Union.
							It is considered the worst nuclear disaster in history both in cost and casualties
						</p>
					</div>
					<div className='bouttons'>
						<Link to='/host'>
							<button  className="host">Host</button>
						</Link>
						<Link to='/play'>
							<button  className="play">Play</button>
						</Link>
					</div>

		</div>
	);
}
