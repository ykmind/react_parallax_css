/**
 * @description: 滚动视差 - 较慢速度的DOM
 * @date   2020-10-14 16:26:58
 * @author yk
 */
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

export type SlowProps = {
	scale?: number;
	bgurl?: string;
};

const Slow: React.FC<SlowProps & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
	scale = 2,
	bgurl,
	children,
	...props
}) => {
	return (
		<SlowBox scale={scale} {...props}>
			{children}
		</SlowBox>
	);
};

const SlowBox = styled.div<SlowProps>`
	position: absolute;
	left: 70%;
	top: 50%;
	transform: ${(props) => {
		return `translate3D(0%, 0%, ${1 - (props as any).scale}px) scale(${props.scale});`;
		// return `translateZ(${1 - (props as any).scale}px) scale(${props.scale});`;
	}};
`;

export default Slow;
