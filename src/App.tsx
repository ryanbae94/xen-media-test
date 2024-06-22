import styled from 'styled-components';
import './App.css';
import Header from './components/Header/Header';

const ParallaxBanner = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: calc(100vh - 104px);
	background-image: url('src/assets/main_bg.jpeg');
	background-attachment: fixed;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	margin-top: 104px;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
	}
`;

const BannerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	z-index: 10;
`;

const Badge = styled.div`
	width: 151px;
	height: 26px;
	font-size: 12px;
	font-weight: 500;
	letter-spacing: 0.1em;
	color: var(--color-white);
	border: 1px solid var(--color-white);
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Title = styled.h1`
	font-weight: 700;
	font-size: 60px;
	line-height: 65px;
	color: var(--color-white);
`;

const DescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Description = styled.p`
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: var(--color-white);
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 1728px;
	height: 4000px;
	margin: 0 auto;
`;

function App() {
	return (
		<Container>
			<Header />
			<ParallaxBanner>
				<BannerWrapper>
					<Badge>INDOOR PANEL</Badge>
					<Title>M4</Title>
					<DescriptionWrapper>
						<Description>Pixel pitch │ p0.7 p0.9 p1.2 p1.5 p1.8</Description>
						<Description>
							Application │ Commercial Space Advertising Lobby Church
						</Description>
					</DescriptionWrapper>
				</BannerWrapper>
			</ParallaxBanner>
		</Container>
	);
}

export default App;
