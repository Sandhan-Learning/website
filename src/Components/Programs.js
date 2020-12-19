import React from 'react'
import "./styles/Programs.css"
import Techcircle from "../images/Techcircle.jpg"
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import "./styles/StudentPrePlacement.css"
import Footer from './Footer'
import Automobile from "../images/Programs/Automobile.png"
import Walkin from "../images/Programs/walk in.png"
import Preplacement from "../images/Programs/pre placement.png"
import Enter from "../images/Programs/eship.png"
import Chan from "../images/Programs/chanak.png"

function Programs() {
    return (
        <div>
			    <div className="preplacement_header">
                <Navbar/>
            </div>
            <main class="programscontainer">
	<h1>STUDENT COURSES</h1>

	<article class="postcard blue">
		<a class="postcard__img_link" href="#">
			<img class="postcard__img" src={Preplacement} alt="Image Title" />
		</a>
		<div class="postcard__text">
			<h1 class="postcard__title blue"><a href="#">Pre-Placement Training </a></h1>
			<div class="postcard__subtitle small">
				{/*<time datetime="2020-05-25 12:00:00">
					<i class="fas fa-calendar-alt mr-2"></i>Sun, Dec 6th 2020
    </time>*/}
			</div>
			<div class="postcard__bar"></div>
			<div class="postcard__preview-txt">Pre-Placement Training program is designed to help students who are seeking placements provided by
their institute. At Sandhan Pre-Placement training is provided by Industry experts and hence deliver
better results and higher packages.</div>
			<ul class="postcard__tagbox">
				{/*<li class="tag__item"><i class="fas fa-tag mr-2"></i>₹5000</li>*/}
				{/*<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>*/}
				<li class="tag__item play blue">
					<Link to="/student-preplacement"><a href="#"><i class="fas fa-play mr-2"></i>Read More</a></Link>
                
				</li>
			</ul>
		</div>
	</article>
	<article class="postcard red">
		<a class="postcard__img_link" href="#">
			<img class="postcard__img" src={Chan} alt="Image Title" />	
		</a>
		<div class="postcard__text">
			<h1 class="postcard__title red"><a href="#">Chanakya</a></h1>
			<div class="postcard__subtitle small">
				{/*<time datetime="2020-05-25 12:00:00">
					<i class="fas fa-calendar-alt mr-2"></i>Sun, Dec 6th 2020
</time>*/}
			</div>
			<div class="postcard__bar"></div>
			<div class="postcard__preview-txt">A student spends more than 16 years of his life in academics so that he/she could get a better career,
during the same time Indian parents spends almost 70% of their life time earnings towards education of
their children.</div>
			<ul class="postcard__tagbox">
				{/*<li class="tag__item"><i class="fas fa-tag mr-2"></i>₹5000</li>*/}
				{/*<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>*/}
				<li class="tag__item play red">
					<Link to="/student-chanakya"><a href="#"><i class="fas fa-play mr-2"></i>Read More</a></Link>
				</li>
			</ul>
		</div>
	</article>
	<article class="postcard green">
		<a class="postcard__img_link" href="#">
			<img class="postcard__img"src={Enter} alt="Image Title" />
		</a>
		<div class="postcard__text">
			<h1 class="postcard__title green"><a href="#">Entrepreneurship</a></h1>
			<div class="postcard__subtitle small">
				{/*<time datetime="2020-05-25 12:00:00">
					<i class="fas fa-calendar-alt mr-2"></i>Sun, Dec 6th 2020
</time>*/}
			</div>
			<div class="postcard__bar"></div>
			<div class="postcard__preview-txt">Entrepreneurship is not only dreams of many students however it also plays a vital role in countries
development. Entrepreneurs believes in creating wealth, jobs and opportunities.</div>
			<ul class="postcard__tagbox">
				{/*<li class="tag__item"><i class="fas fa-tag mr-2"></i>₹5000</li>*/}
				{/*<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>*/}
				<li class="tag__item play green">
				<Link to="/student-entrepreneurship">	<a href="#"><i class="fas fa-play mr-2"></i>Read More</a></Link>
				</li>
			</ul>
		</div>
	</article>
	<article class="postcard yellow">
		<a class="postcard__img_link" href="#">
			<img class="postcard__img" src={Automobile} alt="Image Title" />
		</a>
		<div class="postcard__text">
			<h1 class="postcard__title yellow"><a href="#">Automobile Technology</a></h1>
			<div class="postcard__subtitle small">
				{/*<time datetime="2020-05-25 12:00:00">
					<i class="fas fa-calendar-alt mr-2"></i>Sun, Dec 6th 2020
</time>*/}
			</div>
			<div class="postcard__bar"></div>
			<div class="postcard__preview-txt">Automobile and mechanical Industry is the biggest employment provider across the globe. The Industry is known as the blood line of economy of any country. </div>
			<ul class="postcard__tagbox">
				{/*<li class="tag__item"><i class="fas fa-tag mr-2"></i>₹5000</li>*/}
				{/*<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>*/}
				<li class="tag__item play yellow">
					<Link to="/student-automobile"><a href="#"><i class="fas fa-play mr-2"></i>Read More</a></Link>
				</li>
			</ul>
		</div>
	</article>
		<article class="postcard yellow">
		<a class="postcard__img_link" href="#">
			<img class="postcard__img" src={Walkin} alt="Image Title" />
		</a>
		<div class="postcard__text">
			<h1 class="postcard__title yellow"><a href="#">Walk-In Training program </a></h1>
			<div class="postcard__subtitle small">
				{/*<time datetime="2020-05-25 12:00:00">
					<i class="fas fa-calendar-alt mr-2"></i>Sun, Dec 6th 2020
</time>*/}
			</div>
			<div class="postcard__bar"></div>
			<div class="postcard__preview-txt">Pre-Placement Training program is designed to help students who are seeking jobs post their graduation. </div>
			<ul class="postcard__tagbox">
				{/*<li class="tag__item"><i class="fas fa-tag mr-2"></i>₹5000</li>*/}
				{/*<li class="tag__item"><i class="fas fa-clock mr-2"></i>55 mins.</li>*/}
				<li class="tag__item play yellow">
					<Link to="/student-walkin"><a href="#"><i class="fas fa-play mr-2"></i>Read More</a></Link>
				</li>
			</ul>
		</div>
	</article>
</main>
<Footer/>
        </div>
    )
}

export default Programs
