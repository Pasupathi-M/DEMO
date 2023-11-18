/**
 * eslint-disable react-hooks/rules-of-hooks
 *
 * @format
 */

/* eslint-disable @typescript-eslint/no-unused-vars */

// **************** MUI
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import React, { ReactNode, CSSProperties, ElementType } from 'react';

// const [sizeAndWidth, setSizeAndWidth] = useState({
//     height: `${window.innerHeight}px`,
//     width: `${window.innerWidth}px`
// })

// useEffect(() => {
//     setSizeAndWidth({
//         height: `${window.innerHeight}px`,
//         width: `${window.innerWidth}px`
//     })
// }, [window.innerHeight, window.innerWidth])

interface ContainerBoxV2Props {
  boxType?: ElementType;
  styles?: CSSProperties;
  children: ReactNode;
}

export const ContainerBox = styled(Box)(({ theme }) => ({
  border: 'none',
  width: '100vw',
  height: '100vh',
  backgroundImage: `linear-gradient(to top right, ${theme.palette.primary.dark}, ${theme.palette.secondary.light})`,
  padding: '15px',
}));

export const TopBarBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderStyle: 'dashed',
  width: 'inherit',
  height: 'auto',
  padding: 5,
  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.secondary.light})`,
  borderRadius: 15,
}));

export const SideBarBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderStyle: 'dashed',
  padding: 5,
  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.secondary.light})`,
  borderRadius: 15,
  height: '92%',
  overflow: 'scroll',
  overflowX: 'hidden',
  flexShrink: 1,
}));

export const AppContentBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderStyle: 'dashed',
  padding: 5,
  backgroundImage: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.secondary.light})`,
  borderRadius: 15,
  height: '92%',
  width: '100%',
  overflow: 'scroll',
  // overflowX:'hidden',
  flexShrink: 1,
}));

export const ContainerBoxV2: React.FC<ContainerBoxV2Props> = ({
  boxType,
  styles,
  children,
}) => (
  <Box component={boxType ? boxType : 'div'} sx={{ ...styles }}>
    {children}
  </Box>
);
