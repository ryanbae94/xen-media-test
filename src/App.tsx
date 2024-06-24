import styled from 'styled-components';
import Header from './components/Header/Header';
import Accordion from './components/Accordion/Accordion';
import { useRef, useState } from 'react';

const ParallaxBanner = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: calc(100vh - 104px);
	background-image: url('./images/main_bg.jpeg');
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
	margin: 0 auto;
`;

const SecondSection = styled.section`
	width: 100%;
	display: flex;
	gap: 20px;
	flex-direction: column;
	align-items: center;
	padding-top: 85px;
	padding-bottom: 40px;
	background-color: var(--color-white);
	h1 {
		font-weight: 700;
		font-size: 14px;
		letter-spacing: 0.1em;
		color: var(--color-gray);
	}
	h2 {
		font-weight: 700;
		font-size: 46px;
		line-height: 65px;
		color: var(--color-black);
	}
`;

const AccordionWrapper = styled.div`
	display: flex;
	margin-top: 20px;
	height: 600px;
	gap: 40px;
`;

const StructureImage = styled.img`
	width: 685px;
	height: 509px;
`;

const VideoSection = styled.section`
	width: 100%;
	height: 679px;
	background-color: var(--color-black);
`;

const VideoContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 40px;
	margin-top: 100px;
`;

const VideonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 853px;
	height: 479px;
	position: relative;
`;

const Video = styled.video`
	width: 100%;
	height: 100%;
`;

const PlayButton = styled.button`
	position: absolute;
	background: none;
	border: none;
	cursor: pointer;
	img {
		width: 112px;
		height: 112px;
	}
`;

const VideoDescription = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	h1 {
		font-weight: 700;
		font-size: 14px;
		letter-spacing: 0.1em;
		color: var(--color-gray);
	}
	h2 {
		font-weight: 700;
		font-size: 46px;
		line-height: 65px;
		color: var(--color-white);
	}
	ul {
		line-height: 24px;
		color: var(--color-white);
		list-style: inside;
	}
`;

function App() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlay = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const handleVideoPlay = () => {
		setIsPlaying(true);
	};

	const handleVideoPause = () => {
		setIsPlaying(false);
	};

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
			<SecondSection>
				<h1>FEATURES</h1>
				<h2>Lower price, higher performance</h2>
				<AccordionWrapper>
					<StructureImage src='./images/structure.jpeg' alt='structure' />
					<Accordion />
				</AccordionWrapper>
			</SecondSection>
			<VideoSection>
				<VideoContainer>
					<VideoDescription>
						<h1>INSTALLATION EXAMPLES</h1>
						<h2>
							Pororo Theme Park
							<br />
							40-meter ultra-large
							<br />
							screen
						</h2>
						<ul>
							<li>Product: M4</li>
							<li>Pixel Pitch: 2.5mm 3.0mm</li>
							<li>Screen size: 41 x 3 m</li>
						</ul>
					</VideoDescription>
					<VideonWrapper>
						<Video
							ref={videoRef}
							src='./videos/Pororo-Kids-Park.mp4'
							controls
							preload='metadata'
							onPlay={handleVideoPlay}
							onPause={handleVideoPause}
						/>
						{!isPlaying && (
							<PlayButton onClick={handlePlay}>
								<img src='./images/start.png' alt='play' />
							</PlayButton>
						)}
					</VideonWrapper>
				</VideoContainer>
			</VideoSection>
		</Container>
	);
}

export default App;
