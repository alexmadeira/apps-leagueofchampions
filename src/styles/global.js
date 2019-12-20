import { createGlobalStyle } from 'styled-components';
import { Colors, Breakpoints, Spaces } from '~/styles/Metrics';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration:none;
}
*:focus{
  outline:0;
}
html,
body,
#root {
  min-height: 100%;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  flex:1;
  z-index: 1;
  background:${Colors.Background};
  ${Breakpoints.md} {
    min-height: calc(${Spaces.BasePadding} * 4  + 100%);
  }
}

body, input, button{
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

}

body {
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizeLegibility !important;
  overflow-x:hidden;
  max-width:100vw;
  min-height:100%;
  ${Breakpoints.md} {
    padding-bottom: calc(${Spaces.BasePadding} * 4);
  }


  ul.Breakpoints{
    position:absolute;
    left:10px;
    top:10;
    z-index:50;
    li{
      background:#fff;
      margin:10px;
      padding:5px;
      ${Breakpoints.xl} {
        &.xl{
          background:#0001B0;
        }
      }
      ${Breakpoints.lg} {
        &.lg{
          background:#9E9FFF;
        }
      }
      ${Breakpoints.md} {
        &.md{
          background:#5556FA;
        }
      }
      ${Breakpoints.sm} {
        &.sm{
          background:#AD900E;
        }
      }
      ${Breakpoints.xs} {
        &.xs{
          background:#FADF69;
        }
      }
    }
  }
}
`;
