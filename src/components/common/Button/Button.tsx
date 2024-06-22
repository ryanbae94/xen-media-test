import { TButton } from '../../../types/Tbutton';
import styled from 'styled-components';

const Container = styled.button<TButton>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	background-color: ${(props) =>
		props.variants === 'filled' ? 'var(--color-red)' : 'var(--color-white)'};
	color: ${(props) =>
		props.variants === 'filled' ? 'var(--color-white)' : 'var(--color-red)'};
	border: 1px solid var(--color-red);
	width: 100%;
	height: 100%;
	border-radius: 24px;
	font-family: inherit;
	cursor: pointer;
`;

const Contents = styled.span`
	font-size: 13px;
	font-weight: 500;
	line-height: 16.93px;
	letter-spacing: 0.05em;
`;

const Arrow = styled.img`
	width: 10px;
	height: 10px;
`;

export default function Button({ variants, children }: TButton) {
	return (
		<Container variants={variants}>
			<Contents>{children}</Contents>
			<Arrow
				src={
					variants === 'filled'
						? './src/assets/images/arrow_white.png'
						: './src/assets/images/arrow_red.png'
				}
				alt='arrow'
			/>
		</Container>
	);
}
