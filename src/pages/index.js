import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import './index.css';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div class="frontPage">
			<section id="leftSection">
				<div id="logoHolder">
					<Image />
				</div>
			</section>
			<section id="rightSection">
				<div id="connect">
					<a href='www.google.com'>connect with us!</a>
				</div>
				<div id="textHolder">
					<h1>Coming Soon!</h1>
					Introducing a new app that helps connect non-profits with us.
				</div>
			</section>
		</div>
	</Layout>
);

export default IndexPage;
