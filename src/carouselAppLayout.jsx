// import React, {useState} from "https://esm.sh/react@18";
// import ReactDOM from "https://esm.sh/react-dom@18";

// import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons/ti';

// const CARDS = 10;
// const MAX_VISIBILITY = 3;

// const Card = ({title, content}) => (
//   <div className='card'>
//     <h2>{title}</h2>
//     <p>{content}</p>
//   </div>
// );

// const Carousel = ({children}) => {
//   const [active, setActive] = useState(2);
//   const count = React.Children.count(children);

//   return (
//     <div className='carousel'>
//       {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
//       {React.Children.map(children, (child, i) => (
//         <div className='card-container' style={{
//             '--active': i === active ? 1 : 0,
//             '--offset': (active - i) / 3,
//             '--direction': Math.sign(active - i),
//             '--abs-offset': Math.abs(active - i) / 3,
//             'pointer-events': active === i ? 'auto' : 'none',
//             'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
//             'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
//           }}>
//           {child}
//         </div>
//       ))}
//       {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
//     </div>
//   );
// };

// const App = () => (
//   <div className='app'>
//     <Carousel>
//       {[...new Array(CARDS)].map((_, i) => (
//         <Card title={'Card ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
//       ))}
//     </Carousel>
//   </div>
// );

// ReactDOM.render(
//   <App/>,
//   document.body
// );

// <img src={page.thumbnail} alt={page.title} className="w-40 h-40 object-cover rounded-md mt-2" />

// <div className="fixed inset-0 bg-opacity-60 flex items-center justify-center z-50 w-[50%] mx-auto">

//CSS FILES

/* $color-purple: #8B5CF6;
$color-pink: #EC4899;
$color-gray: #9CA3AF;
$color-black: #1F2937;
$card-size: 23rem;

body {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

.carousel {
  position: relative;
  width: $card-size;
  height: $card-size;
  perspective: 500px;
  transform-style: preserve-3d;
}

.card-container {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: 
    rotateY(calc(var(--offset) * 50deg)) 
    scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem))
    translateX(calc(var(--direction) * -5rem));
  filter: blur(calc(var(--abs-offset) * 1rem));
  transition: all 0.3s ease-out;
}

.card {
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-color: hsl(280deg, 40%, calc(100% - var(--abs-offset) * 50%));
  border-radius: 1rem;
  color: $color-gray;
  text-align: justify;
  transition: all 0.3s ease-out;
  
  h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 0 0 0.7em;
    color: $color-black;
  }
  
  p, h2 {
    transition: all 0.3s ease-out;
    opacity: var(--active);
  }
}

.nav {
  color: white;
  font-size: 5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;
  
  &.left {
    transform: translateX(-100%) translatey(-50%);
  }
  
  &.right {
    right: 0;
    transform: translateX(100%) translatey(-50%);
  }
} */
