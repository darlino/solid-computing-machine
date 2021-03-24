import React from 'react'


// export const VideoPlayerMain = (props) => {
//     return (
//         <>
//         <div className="container">
//             <div className="video-container" id="video-container">
//                 <div className="playback-animation" id="playback-animation">
//                     <svg className="playback-icons">
//                     <use className="hidden" href="#play-icon"></use>
//                     <use href="#pause"></use>
//                     </svg>
//                 </div>

//                 <video id="video"  poster={props.poster} width="100%" autoPlay>
//                     <source src={props.src} type="video/mp4"></source>
//                 </video>

//             <div className="video-controls hidden" id="video-controls">
//                 <div className="video-progress">
//                 <progress id="progress-bar" value="0" min="0"></progress>
//                 <input className="seek" id="seek" value="0" min="0" type="range" step="1"/>
//                 <div className="seek-tooltip" id="seek-tooltip">00:00</div>
//             </div>

//         <div className="bottom-controls">
//           <div className="left-controls">
//             <button data-title="Play (k)" id="play">
//               <svg className="playback-icons">
//                 <use href="#play-icon"></use>
//                 <use className="hidden" href="#pause"></use>
//               </svg>
//             </button>

//             <div className="volume-controls">
//               <button data-title="Mute (m)" className="volume-button" id="volume-button">
//                 <svg>
//                   <use className="hidden" href="#volume-mute"></use>
//                   <use className="hidden" href="#volume-low"></use>
//                   <use href="#volume-high"></use>
//                 </svg>
//               </button>
//               <input className="volume" id="volume" value="1"
//                 data-mute="0.5" type="range" max="1" min="0" step="0.01"/>
//             </div>

//             <div className="time">
//               <time id="time-elapsed">00:00</time>
//               <span> / </span>
//               <time id="duration">00:00</time>
//             </div>
//           </div>

//           <div className="right-controls">
//             <button data-title="PIP (p)" className="pip-button" id="pip-button">
//               <svg>
//                 <use href="#pip"></use>
//               </svg>
//             </button>
//             <button data-title="Full screen (f)" className="fullscreen-button" id="fullscreen-button">
//               <svg>
//                 <use href="#fullscreen"></use>
//                 <use href="#fullscreen-exit" className="hidden"></use>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </>
//     )

    
// }



export const VideoPlayer = (props) => {
    return (
        <>
        <div className="container">
            

                <video controls className="video" id="video" preload="metadata" poster={props.poster} width="100%">
                    <source src="http://164.90.141.179:8080/hls/test.m3u8" type="video/mp4"></source>
                </video>

            
  </div>


  </>
    )

    
}