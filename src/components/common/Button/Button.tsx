import { TButton } from '../../../types/Tbutton';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.button<TButton>`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	background-color: var(--color-red);
	color: var(--color-white);
	border: 1px solid var(--color-red);
	width: 100%;
	height: 100%;
	border-radius: 24px;
	font-family: inherit;
	cursor: pointer;
	transition: all 0.3s ease;
	&:hover {
		background-color: var(--color-white);
		color: var(--color-red);
	}
`;

const Contents = styled.span`
	font-size: 13px;
	font-weight: 500;
	line-height: 16.93px;
	letter-spacing: 0.05em;
`;

const Arrow = styled.img<{ isHovered: boolean }>`
	width: 10px;
	height: 10px;
	${({ isHovered }) =>
		isHovered
			? 'content: url(./images/arrow_red.png)'
			: 'content: url(./images/arrow_white.png)'}
`;

export default function Button({ children }: TButton) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Container
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Contents>{children}</Contents>
			<Arrow src='./images/arrow_white.png' alt='arrow' isHovered={isHovered} />
		</Container>
	);
}
