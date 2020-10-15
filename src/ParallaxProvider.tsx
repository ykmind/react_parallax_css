/**
 * @description: 滚动视差容器
 * @date   2020-10-14 15:43:08
 * @author yk
 */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

/**
 * @description: provide提供长,宽来限制滚动的区域,默认为视口长宽100vw,100vh
 */
export type ProviderProps = {
	width?: string | number;
	height?: string | number;
};
const ParallaxProvider: React.FC<ProviderProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
	width = 100,
	height = 100,
	children,
	...props
}) => {
	return (
		<Provider width={width} height={height} {...props}>
			{children}
		</Provider>
	);
};

const Provider = styled.div<ProviderProps>`
	width: ${(props) => (typeof props.width === 'number' ? `${props.width}vw` : props.width)};
	height: ${(props) => (typeof props.height === 'number' ? `${props.height}vh` : props.height)};
	perspective: 1px;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
`;

export default ParallaxProvider;
