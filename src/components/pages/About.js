import React, { useState } from 'react';
import './About.css';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

function About() {

	const offset = -window.screen.width * 0.9 / 4; 

	const [bannerStyle, setBannerStyle] = useState({
		backgroundPosition: `center ${offset}px`,
		'--scroll-height': '0px'
	});

	useScrollPosition(({ prevPos, currPos }) => {
		var wScroll = -currPos.y;

		setBannerStyle({
			backgroundPosition: `center ${wScroll*0.5 + offset}px`,
			'--scroll-height': `${wScroll}px`
		});
	});

	return (
		<>
			<div className="banner" style={bannerStyle}></div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur quasi quaerat quos minus illo quod esse debitis repudiandae nam itaque commodi hic unde, cupiditate ducimus, aspernatur obcaecati rem ullam earum enim aut numquam, facere laboriosam iste. Similique molestias, quidem rem numquam eius tempore nam nobis repudiandae officiis nisi nulla dolor? Doloribus unde in sapiente temporibus, fuga quaerat dignissimos quis minima dicta eveniet rerum, perferendis aspernatur laboriosam. Necessitatibus, sint! Saepe dolorem laudantium quos impedit deleniti veritatis recusandae dolor culpa maxime. Temporibus, blanditiis ipsa! Pariatur porro, voluptatibus assumenda numquam nostrum repudiandae veritatis perspiciatis in debitis quod mollitia ab cupiditate voluptate quam, quis tempore dolor a iste deleniti facilis ipsum? Eligendi nobis expedita quo aspernatur enim voluptates similique quod amet alias nesciunt velit, soluta molestiae fugiat a perspiciatis, hic eaque ducimus non labore doloremque ullam odit. Voluptatibus, eius earum est suscipit omnis provident vitae nam doloribus? Ullam excepturi enim rem laudantium repellat id ab delectus expedita, voluptas ea inventore in. Temporibus laborum nobis reprehenderit cumque ratione tenetur nemo maiores, fuga dolore amet assumenda iure doloremque neque officiis harum perspiciatis in quaerat debitis atque ullam accusantium labore ex facere? In, magnam deserunt consectetur provident praesentium quam. Cupiditate tenetur hic ducimus molestias aspernatur distinctio exercitationem. Voluptas quod placeat, excepturi distinctio accusamus facilis optio quas illum, provident inventore deserunt laboriosam! Nam excepturi ipsam unde, a vel eius architecto voluptate iure deleniti in. Rerum commodi minima, veritatis doloremque veniam quibusdam numquam et quo nobis maiores iste doloribus quis facere voluptas eius aliquid dolorum adipisci labore neque dolores ipsum culpa sapiente error consectetur. Debitis nulla quia aut asperiores natus nisi accusantium exercitationem molestiae provident a quos et facere, accusamus possimus! Labore consequuntur a, officiis hic dolorum, voluptas aut nulla, enim officia veritatis molestiae fugit expedita? Inventore consequatur harum ex deserunt error, alias est exercitationem nihil sit possimus nobis?
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita quaerat itaque eum. Odit, sapiente! Veritatis, est maiores. Sapiente consequuntur excepturi rerum repellendus, dignissimos autem blanditiis omnis laborum dolore. Consectetur minus repudiandae perspiciatis ipsam necessitatibus, praesentium officiis labore cupiditate, architecto incidunt dolor assumenda. Omnis veritatis impedit quasi quas debitis blanditiis recusandae vel, iusto dolorum ad eum voluptates! Enim, consequatur labore! Ipsa, eligendi fugiat minima nobis et magnam ea illo facilis id, culpa harum? Ullam maxime, quaerat animi odio commodi minima, temporibus delectus, cupiditate reprehenderit sunt nulla aut omnis voluptates sequi! Consequuntur, alias? A consequuntur quos ipsam dolore. Enim numquam maxime amet, voluptatem magni porro nesciunt ex ipsam molestiae doloribus repellendus temporibus ut eveniet aliquam excepturi assumenda rem! Modi reiciendis eligendi incidunt blanditiis eum quas, perspiciatis in molestias quae excepturi et animi nam corrupti porro quisquam minus, quia unde explicabo sint. Totam praesentium illo aperiam vel incidunt blanditiis dolores iste error laboriosam eaque, assumenda fugit, alias dolorem ducimus esse suscipit impedit deleniti hic qui possimus pariatur, magni dicta recusandae. Sequi voluptatum deserunt quia doloribus in, provident exercitationem perferendis amet hic consequuntur similique quis dolor sint maxime aliquid. Nihil omnis dignissimos, obcaecati optio tenetur iusto, commodi ex aut porro neque perspiciatis error ipsa mollitia labore, explicabo aperiam cumque voluptate vel hic. Dolore sint ex reiciendis, facere exercitationem maiores. Saepe eos nemo nobis. Sequi ducimus totam praesentium in quibusdam facere officiis consequatur illum, optio magni saepe inventore repellendus ratione mollitia dolores perferendis dolorem hic ab illo quas, sunt voluptas, sed veniam ad. Vero iure perferendis temporibus quia soluta maxime exercitationem ut eum, labore itaque perspiciatis aspernatur expedita sunt eligendi quaerat nesciunt architecto voluptatum sapiente modi laudantium officia nam nihil repudiandae sint? Quae dolore itaque amet! Fugiat cum debitis esse, deserunt neque nemo ut, beatae voluptatibus iste eveniet necessitatibus rerum doloribus illo aspernatur laborum autem eum, inventore perferendis maxime vitae sapiente voluptas accusamus reprehenderit? Enim magnam distinctio vero a ducimus non deserunt consequatur, velit voluptatibus excepturi natus debitis optio, voluptas ullam, harum voluptates expedita veniam architecto nostrum eum modi quisquam sed dolorum labore? Animi non deleniti nihil enim qui at ad et nemo, voluptatum labore inventore aliquam vitae nostrum dolorum hic ipsa nam nulla. Vitae, commodi consectetur? Id cupiditate magnam, blanditiis aliquid in amet ea a officia laboriosam. Omnis perspiciatis eum corporis. Facere reiciendis asperiores, ratione illo quae adipisci neque quam laudantium sequi in. Reprehenderit reiciendis quibusdam blanditiis ratione, ducimus sint fugiat soluta esse rem adipisci et, officia ipsa quis quae quaerat dolor? Facere aliquam ad nam praesentium vitae ex iure voluptates tempora in debitis nisi veniam, ipsum id quibusdam itaque esse quam consectetur magni distinctio alias placeat! Veniam minima ratione nam recusandae ad temporibus aspernatur sunt nobis, voluptatum officia accusamus ullam omnis iure eligendi commodi illo nulla corrupti veritatis ut alias! Fugit delectus magnam, totam ut obcaecati veritatis dignissimos eaque debitis quos nostrum perspiciatis iure sequi quasi eveniet inventore harum doloremque, perferendis nam amet quas. Natus hic ab nam dolores laboriosam accusamus voluptate ea odio nobis obcaecati quam vitae harum, nihil animi maxime?
			</p>
		</>
	)
}

export default About
