import { useState } from 'react';
import styled from 'styled-components';

const List = [
	{
		id: 1,
		title: 'The new concept of Fixed structure',
		description:
			"It's completely structural, which means it's much better for assembly, flatness, and screen quality than traditional methods.",
	},
	{
		id: 2,
		title: 'Ultra-Rigid Bridged Die Casting',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nulla ducimus recusandae sint, ',
	},
	{
		id: 3,
		title: 'Cable-free hub boards',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nulla ducimus recusandae sint, ',
	},
	{
		id: 4,
		title: 'Low Power - Low Heat',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nulla ducimus recusandae sint, ',
	},
	{
		id: 5,
		title: 'EZ Mount™ Only Installation Bracket',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nulla ducimus recusandae sint, .',
	},
	{
		id: 6,
		title: 'Highly versatile',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio nulla ducimus recusandae sint,',
	},
];

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 683px;
	color: var(--color-black);
	span {
		font-weight: 500;
		font-size: 16px;
	}
	/* h2 {
		width: 100%;
		font-weight: 700;
		font-size: 24px;
	} */
`;

const Title = styled.div`
	width: 100%;
	font-weight: 700;
	font-size: 24px;
`;

const ContentsWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	gap: 10px;
	padding: 20px 0;
	cursor: pointer;
`;

const BorderLine = styled.div`
	border: 1px solid var(--color-border);
	width: 100%;
	height: 1px;
`;

const DescriptionWrapper = styled.div<{ isOpen: boolean }>`
	max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	overflow: hidden;
	transition: max-height 0.5s ease, opacity 0.5s ease;
	p {
		color: var(--color-black);
		font-size: 16px;
		padding: 20px 10px;
		line-height: 1.5;
	}
`;

const ArrowIcon = styled.div<{ isOpen: boolean }>`
	margin-right: 20px;
	width: 16px;
	height: 16px;
	position: relative;
	&::before,
	&::after {
		content: '';
		position: absolute;
	}
	&::before {
		width: 100%;
		height: 100%;
		border: 1px solid var(--color-black);
		border-right: 0;
		border-bottom: 0;
	}
	&::after {
		width: 24px;
		height: 1px;
		background-color: var(--color-black);
		transform-origin: 0 100%;
		transform: rotate(45deg);
	}
	transform: ${({ isOpen }) => (isOpen ? 'rotate(225deg)' : 'rotate(45deg)')};
	transition: transform 0.5s ease;
`;

export default function Accordion() {
	const [openId, setOpenId] = useState<number | null>(null);
	const handleToggle = (id: number) => {
		setOpenId(openId === id ? null : id);
	};
	return (
		<Wrapper>
			{List.map((item) => {
				return (
					<div key={item.id}>
						<ContentsWrapper onClick={() => handleToggle(item.id)}>
							<span>{String(item.id).padStart(2, '0')}.</span>
							<Title>{item.title}</Title>
							<ArrowIcon isOpen={openId === item.id} />
						</ContentsWrapper>
						<BorderLine />
						<DescriptionWrapper isOpen={openId === item.id}>
							<p>{item.description}</p>
							<BorderLine />
						</DescriptionWrapper>
					</div>
				);
			})}
		</Wrapper>
	);
}
