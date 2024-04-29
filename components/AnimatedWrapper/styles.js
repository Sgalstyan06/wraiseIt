import styled from "styled-components";

export const FadeAnimated = styled.div`
  div:first-of-type {  

    visibility: ${(props) => (props.onScreen ? "visible ease-out" : "hidden")};
    animation-name: ${(props) => (props.onScreen ? "fade-in" : "")};
    -webkit-animation-duration: 1s;
    animation-duration: 1s;   
    animation-timing-function: cubic-bezier(.01,.02,.01,1);
    
  @keyframes fade-in {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 400px, 0);
      transform: translate3d(0, 400px, 0);      
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
      }
    } 
`;
