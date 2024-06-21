import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1728px;
	height: 104px;
	padding: 0 164px;
	margin: 0 auto;
	z-index: 100;
`;

const Logo = styled.img`
	width: 75px;
	height: 44px;
`;

const Contents = styled.div`
	display: flex;
	gap: 70px;
	span {
		font-size: 13px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: var(--color-black);
	}
`;

const ArrowContentsBox = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
`;

const ArrowIcon = styled.img`
	width: 11px;
	height: 7px;
`;

const SearchWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 34px;
`;

const SearchIcon = styled.img`
	width: 21px;
	height: 19px;
`;

export default function Header() {
	return (
		<Container>
			<Logo src='src/assets/logo.png' alt='logo' />
			<Contents>
				<span>HOME</span>
				<span>PRODUCTS</span>
				<ArrowContentsBox>
					<span>CAPABILITIES</span>
					<ArrowIcon src='src/assets/arrow_down.png' alt='arrow' />
				</ArrowContentsBox>
				<ArrowContentsBox>
					<span>INDUSTRIES</span>
					<ArrowIcon src='src/assets/arrow_down.png' alt='arrow' />
				</ArrowContentsBox>
				<span>COMPANY</span>
			</Contents>
			<SearchWrapper>
				<SearchIcon src='src/assets/search.png' alt='search' />
				<div style={{ width: '169px', height: '46px' }}>
					<Button variants='filled'>CONTACT US</Button>
				</div>
			</SearchWrapper>
		</Container>
	);
}
