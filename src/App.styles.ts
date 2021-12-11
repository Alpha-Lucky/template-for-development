import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';

export const Wrapper = styled.div`
  margin: 40px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
  background-color: #bbbbbb;
`;

export const DrawerC = styled(Drawer)`

`
export const WrapperDrawer = styled.div`
max-width: 70vw;
min-height: 150%;
background-color: #fff;
`
