/**
 * @description: 设定滚动区域
 * @date   2020-10-15 14:59:15
 * @author yk
 */
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

export type ContainerProps = {
	width?: number | string;
	height?: number | string;
	bgurl?: string;
};

const Container: React.FC<ContainerProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
	width = 100,
	height = 100,
	bgurl,
	children,
	...props
}) => {
	return (
		<ContainerBox width={width} height={height} bgurl={bgurl} {...props}>
			{children}
		</ContainerBox>
	);
};

const ContainerBox = styled.div<ContainerProps>`
	position: relative;
	width: ${(props) => (typeof props.width === 'number' ? `${props.width}vw` : props.width)};
	height: ${(props) => (typeof props.height === 'number' ? `${props.height}vh` : props.height)};
	background: url(${(props) => props.bgurl});
	/* overflow: hidden; */
`;

export default Container;
