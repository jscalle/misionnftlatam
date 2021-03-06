import React from "react";
import Diagonal from './components/Utilities/Diagonal';
import CardInfo from './components/Utilities/CardInfo';
import Perfiles from './components/Utilities/Perfiles';
import env from './components/env.json'
// import DoubleContent from './components/doubleContent';
import imageBg from './assets/img/bg2.png';

import Navbar from "./components/Navbars/AuthNavbar.js";
import Footer from "./components/Footers/Footer.js";
// const logo = 'https://i.pinimg.com/originals/f4/83/4b/f4834b81fe7412c36c81bb5c87969d52.jpg';
// const logo = require('../../assets/img/pkball.png').default;
const persLeft = require('./assets/img/pesonajePrincipalLeft.png').default;
const persFront = require('./assets/img/pesonajePrincipalFront.png').default;
const persRight = require('./assets/img/pesonajePrincipalRight.png').default;
// const persGroup = require('./assets/img/pesonajePrincipalGroup.png').default;
// const persMultiGroup = require('./assets/img/pesonajePrincipalMultiGroup.png').default;

export default function Profile() {
  
  const cont1_1 = env.cont.cont1_1 // 'El objetivo inicial de todo el proyecto será mantener de manera entretenida y en constante aprendizaje a la comunidad frente a los nuevos términos o herramientas que aparezcan en el mundo de blockchain y sus derivados'
  const cont1_2 = env.cont.cont1_2 // 'esto se logrará frente a una plataforma de misiones, las cuales almacenarán en un principio en la página principal del proyecto, se realizará con herramientas como la gamificación para que sea divertido y lúdico, realidad virtual para que sea una experiencia nueva y emocionante, y claramente con la famosa web3 que claramente estaremos explicando en el proyecto'
  const cont2 = env.cont.cont2 // 'Claramente la comunidad juega un papel muy importante en todo este proyecto, serán uno de los elementos más importantes para darle visibilidad al proyecto y por ende la posibilidad de tomar el valor que contiene el proyecto, la comunidad estará repleta de personas con ansias de aprender, pero también con ansias de ayudar a que todos podamos sacar el mayor provecho a todos los beneficios que ofrece este nuevo “mundo”'
  const cont3 = env.cont.cont3 // 'Se almacenará en la red de Polygon (un protocolo de la red de Ethereum) en el marketplace de OpenSea. Esta primera parte de la colección consta de un máximo de 50 tokens completamente únicos, hechos a mano, con diferentes características, items, clases y atributos especiales basados en cada país de latinoamérica.'
  return (
    <>
      <Navbar transparent />
        <main>
          <section className="relative block h-700-px bg-gray-800">
            
            <div
              className=" bg-cover p-200 bg-gray-800"
              style={{
                // paddingLeft: 200,
                // paddingRight: 200,
                paddingTop: 250,
                paddingBottom: 250,
                backgroundImage:
                  // "url('https://i.pinimg.com/originals/af/1a/7d/af1a7dffcc95abe22dc27844169fa010.jpg')",
                  // "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                  `url(${imageBg})`
                  // "url('https://compote.slate.com/images/1ac38d53-d44b-4dd6-b776-68c9922863a8.gif?width=1200&rect=780x520&offset=0x0')",
                  // "url('https://64.media.tumblr.com/895d0262561113630297f7576ddaec65/d9349dddc86a6ee5-ed/s1280x1920/8b864be43fdbe0933e1d03c443a3cd5852a28d29.gifv')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-gradient-to-b bg-black top-0 left-0"
              >
              </span>
            </div>

          </section>
          <Diagonal color="text-gray-200" />
        </main>

        <section className="pb-20 bg-gray-200 -mt-32">
          <div className="w-full md:w-11/12 mx-auto px-1 md:px-4">

            <div className="absolute top-0 mt-20 bg-transparent flex justify-center w-10/12 left-0 md:ml-40 ml-10">
              <CardInfo imagn={persRight} bgCircule={'bg-green-300'} option={4} width={'3/12'} animation={'animate-pulse'} hide/>
              <CardInfo title='MISIÓN NFT LATAM' option={3} width={'4/12'} />
              <CardInfo imagn={persLeft} bgCircule={'bg-green-300'} option={4} width={'3/12'} animation={'animate-pulse'} hide/>
            </div>

            <div className="flex flex-wrap items-center ">
              <div className="w-full md:w-8/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-4xl mb-2 font-semibold leading-normal">
                  ¿Que es Misión NFT LatAm?
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-justify">
                  <span className="font-normal">MISIÓN NFT LATAM</span> es un proyecto de NFT educativo y de cultura para entusiastas de las nuevas tecnologías (inspirado) por y para toda la comunidad latina, parte con el objetivo de expandir el conocimiento de estas tecnologías y añadir una herramienta más a la comunidad, uno de los objetivos es ser el mejor proyecto para iniciar en este nuevo “mundo”, en este “verso” y que aumente la económico de las personas y que seamos pioneras y representantes de latinoamérica para el nuevo mundo, en esta nueva realidad.
                </p>
                {/* <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Incididunt enim minim voluptate eiusmod commodo duis enim nulla ex veniam do veniam aute tempor.
                  Reprehenderit culpa amet aliquip sit laboris consequat cillum ipsum tempor.
                  Cupidatat nisi velit ut ut et anim.
                  Sit sint consequat ipsum laboris magna laboris cupidatat quis.
                </p> */}
                {/* <Link to="/" className="font-bold text-blueGray-700 mt-8">
                  Check Notus React!
                </Link>  */}
              </div>
            </div>

            
            <div className="flex flex-wrap mt-24 w-full">
              <CardInfo title='Dinámica principal de las MISIONES' content1={cont1_1} content2={cont1_2} bgCircule={'bg-red-400'} option={2} width={'4/12'} />
              <CardInfo imagn={persFront} bgCircule={'bg-green-300'} option={4} width={'4/12'} animation={'animate-pulse'}/>
              <CardInfo title='¿Dónde entra la comunidad en este punto?' content1={cont2} bgCircule={'bg-blue-300'} option={1} width={'4/12'} />
            </div>

            <div className="flex flex-wrap mt-4 w-full">
              <CardInfo title='Detalles frente a MISIÓN NFT LATAM' content1={cont3} bgCircule={'bg-green-300'} option={1} width={'5/12'}/>
            </div>
          </div>
        </section>

        <section className="relative block bg-gradient-to-b from-gray-800 via-gray-800 to-gray-600 pb-40">
          <Diagonal color="text-gray-800" />

          <div className="px-2 md:w-1/2 mx-auto">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-bold text-white"> Road Map. </h2>
              </div>
            </div>

            <div className="flex mt-10 justify-center">
              <div className="flex flex-row-reverse w-full pl-2">
                
                <div className="text-gray-800 px-3 md:px-4 w-12 h-10 md:h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                
                <div className="border-r-2 mr-3 md:11/12">
                  <h5 className="text-xl mt-5 font-semibold text-white"> Q1 2022 </h5>

                  <div className="flex flex-row justify-end text-right">
                    <p className="flex mt-2 mb-5 text-gray-400"> {env.map.q1[0]} </p>
                    <p className="bg-gray-400 left-10 ml-4 justify-center items-center my-auto text-gray-800 px-2 rounded-l-full">&delta;</p>
                  </div>
                  <div className="flex flex-row justify-end text-right">
                    <p className="mt-2 mb-5 text-gray-400"> {env.map.q1[1]} </p>
                    <p className="bg-gray-400 left-10 ml-4 justify-center items-center my-auto text-gray-800 px-2 rounded-l-full">&alpha;</p>
                  </div>
                  <div className="flex flex-row justify-end text-right">
                    <p className="mt-2 mb-5 text-gray-400"> {env.map.q1[2]} </p>
                    <p className="bg-gray-400 left-10 ml-4 justify-center items-center my-auto text-gray-800 px-2 rounded-l-full">&nu;</p>
                  </div>
                </div>

              </div>

            </div>

            <div className="flex mt-10 justify-center">
              <div className="flex flex-row-reverse w-full pl-2">
                  
                  <div className="text-gray-800 px-3 md:px-4 w-12 h-10 md:h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-lightbulb text-xl"></i>
                  </div>
                  
                  <div className="border-r-2 mr-3 md:11/12">
                    <h5 className="text-xl mt-5 font-semibold text-white"> Q2 2022 </h5>

                    <div className="flex flex-row justify-end text-right">
                      <p className="mt-2 mb-5 text-gray-400"> {env.map.q2[0]} </p>
                      <p className="bg-gray-400 left-10 ml-4 justify-center items-center my-auto text-gray-800 px-2 rounded-l-full">&epsilon;</p>
                    </div>
                    <div className="flex flex-row justify-end text-right">
                      <p className="mt-2 mb-5 text-gray-400"> {env.map.q2[1]} </p>
                      <p className="bg-gray-400 left-10 ml-4 justify-center items-center my-auto text-gray-800 px-2 rounded-l-full">&zeta;</p>
                    </div>
                    <div className="flex flex-row justify-end text-right">
                      <p className="mt-2 mb-5 text-gray-400"> {env.map.q2[2]} </p>
                      <p className="bg-gray-400 left-10 ml-4 justify-center items-center my-auto text-gray-800 px-2 rounded-l-full">&kappa;</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="flex mt-10 justify-center">
                <div className="flex flex-row-reverse w-full pl-2">
                  
                  <div className="text-gray-800 px-3 md:px-4 w-12 h-10 md:h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-lightbulb text-xl"></i>
                  </div>
                  
                  <div className="border-r-2 mr-3 md:11/12">
                    <h5 className="text-xl mt-5 font-semibold text-white"> Q3 2022 </h5>

                    <div className="flex flex-row justify-end text-right">
                      <p className="mt-2 mb-5 text-gray-400"> {env.map.q3[0]} </p>
                      <p className="bg-gray-400 left-10 ml-4 justify-center items-center my-auto text-gray-800 px-2 rounded-l-full">&xi;</p>
                    </div>
                    <div className="flex flex-row justify-end text-right">
                      <p className="mt-2 mb-5 text-gray-400"> {env.map.q3[1]} </p>
                      <p className="bg-gray-400 left-10 ml-4 justify-center items-center my-auto text-gray-800 px-2 rounded-l-full">&sigmaf;</p>
                    </div>
                    <div className="flex flex-row justify-end text-right">
                      <p className="mt-2 mb-5 text-gray-400"> {env.map.q3[2]} </p>
                      <p className="bg-gray-400 left-10 ml-4 justify-center items-center my-auto text-gray-800 px-2 rounded-l-full">&sigma;</p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="flex mt-10 justify-center">
                <div className="flex flex-row-reverse w-full pl-2">
                  
                  <div className="text-gray-800 px-3 md:px-4 w-12 h-10 md:h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-lightbulb text-xl"></i>
                  </div>
                  
                  <div className="border-r-2 mr-3 md:11/12">
                    <h5 className="text-xl mt-5 font-semibold text-white"> Q4 2022 </h5>

                    <div className="flex flex-row justify-end text-right">
                      <p className="mt-2 mb-5 text-gray-400"> {env.map.q4[0]} </p>
                      <p className="bg-gray-400 left-10 ml-4 justify-center items-center my-auto text-gray-800 px-2 rounded-l-full">&phi;</p>
                    </div>
                    <div className="flex flex-row justify-end text-right">
                      <p className="mt-2 mb-5 text-gray-400"> {env.map.q4[1]} </p>
                      <p className="bg-gray-400 left-10 ml-4 justify-center items-center my-auto text-gray-800 px-2 rounded-l-full">&thetasym;</p>
                    </div>
                    <div className="flex flex-row justify-end text-right">
                      <p className="mt-2 mb-5 text-gray-400"> {env.map.q4[2]} </p>
                      <p className="bg-gray-400 left-10 ml-4 justify-center items-center my-auto text-gray-800 px-2 rounded-l-full">&piv;</p>
                    </div>
                  </div>

                </div>
              </div>
          </div>
        </section>

        <section className="pt-20 pb-20 text-gray-100 bg-gradient-to-t from-gray-800 via-gray-800 md:via-gray-700 to-gray-600">
          <div className="w-9/12 mx-auto px-4">
            <h2 className="flex justify-center items-center text-5xl pb-5 font-bold text-white">Equipo</h2>
            <div className="flex flex-wrap">
              <div className="w-full md:flex md:flex-row justify-between items-center mt-12 px-4">
                <Perfiles name='Sebastian Calle' desemp="El timido, fué el de la idea" persRight={persRight} twt="https://twitter.com/Jsebas_Loaiza" ig="https://instagram.com/jscalle.growth" />
                <Perfiles name='Luisa Carmona' desemp="La niña del grupo, la que le da color a esto" persRight={persFront} twt="" fb="https://www.facebook.com/luisi.carmona1" ig="https://www.instagram.com/luisi_carmona/" />
                <Perfiles name='Ernesto Ruiz' desemp="El flaco, el que te trajo hasta aquí" persRight={persLeft} twt="" fb="https://www.facebook.com/ERNESTORUIZAM" ig="https://www.instagram.com/ernestoruizam/" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 relative block h-96 mx-auto pb-12">
          <h2 className="flex justify-center items-center text-5xl pb-5 font-bold text-white">Contactanos</h2>
          <div id="wrapper" data-tf-widget="eMOJp3pq" data-tf-inline-on-mobile data-tf-medium="snippet" style={{height:'500px'}} ></div>
        </section>

        <Footer />
    </>
  );
}




// export default function Profile() {
//   return (
//     <>
//       <Navbar transparent />
//         <main className="profile-page font-mono">
//           <section className="relative block h-500-px">
//             <div
//               // className="absolute top-0 w-full h-full bg-center bg-cover p-200"
//               style={{
//                 // position: 'absolute',
//                 // top: 0,
//                 // width: 'full',
//                 // minHeight: 200,
//                 // backgroundPosition: 'center',
//                 padding: 200,
//                 backgroundImage:
//                   // "url('https://i.pinimg.com/originals/af/1a/7d/af1a7dffcc95abe22dc27844169fa010.jpg')",
//                   "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
//                   // "url('https://compote.slate.com/images/1ac38d53-d44b-4dd6-b776-68c9922863a8.gif?width=1200&rect=780x520&offset=0x0')",
//                   // "url('https://64.media.tumblr.com/895d0262561113630297f7576ddaec65/d9349dddc86a6ee5-ed/s1280x1920/8b864be43fdbe0933e1d03c443a3cd5852a28d29.gifv')",
//               }}
//             >
//               <span
//                 id="blackOverlay"
//                 className="w-full h-full absolute opacity-50 bg-black top-0 left-0"
//               >
//               </span>
//             </div>
//             <div
//               className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
//               style={{ transform: "translateZ(0)" }}
//             >
//               <svg
//                 className="absolute bottom-0 overflow-hidden"
//                 xmlns="http://www.w3.org/2000/svg"
//                 preserveAspectRatio="none"
//                 version="1.1"
//                 viewBox="0 0 2560 100"
//                 x="0"
//                 y="0"
//               >
//                 <polygon
//                   className="text-blueGray-200 fill-current"
//                   points="2560 0 2560 100 0 100"
//                 ></polygon>
//               </svg>
//             </div>
//           </section>

//           <section className="relative py-16 bg-blueGray-200">
//             <div className="container w-96 mx-auto px-4">
//               <div className="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-6 shadow-xl rounded-lg -mt-64">
//                 <div className="px-6">
//                   <div className="flex flex-wrap justify-center">
//                     <div className="w-full lg:w-6/12 px-4 flex justify-center">
//                       <div className="relative">
//                         {/* <img
//                           alt="..."
//                           src={require("assets/img/pesonajePrincipal.png").default}
//                           // className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
//                           className="h-auto align-middle border-none absolute -mt-48 ml-32 max-w-150-px"
//                         /> */}
//                         <h1 className="text-5xl sm:text- font-bold italic leading-normal text-blueGray-800 text-center">
//                           Misión NFT LATAM
//                         </h1>
//                       </div>
//                     </div>
//                   </div> 
//                   <div className="text-center">
//                   </div>
//                   <div className="mt-4 py-10 border-blueGray-200 text-left"> {/* border-t */}
//                     <div className="flex flex-wrap justify-center">
//                       <div className="w-full lg:w-11/12 sm:px-2">
//                         <DoubleContent option={1} title={env.bloque1.titulo} txt={env.bloque1.texto1} img={persLeft} reverse={true} />
//                         <DoubleContent option={2} txt={env.bloque1.texto2} img={persRight} hide={true} />
//                         <DoubleContent option={1} txt={env.bloque1.texto3} img={persLeft} />
//                         <DoubleContent option={2} title={env.bloque2.titulo} txt={env.bloque2.texto} img={persRight} />
//                         <DoubleContent option={1} title={env.bloque3.titulo} txt={env.bloque3.texto} img={persFront} />
//                         <DoubleContent option={4} img={persGroup} aux={'grupo'}/> {/* img2={logo} */}
//                         <DoubleContent option={7} title={env.bloque4.titulo} txt={env.bloque4.texto} />
//                         <DoubleContent option={8} title={env.bloque5.titulo} txt={env.bloque5.texto} />
//                         <DoubleContent option={4} img={persMultiGroup} aux={'grupo'}/> {/* img2={logo} */}
//                         <DoubleContent option={9} title={env.bloque6.titulo} txt={env.bloque6.texto} />
//                       </div>

//                       <div>
//                         <div class="container-wrapper-genially" style={{position: 'relative', minHeight: '400px', maxWidth: '100%'}}>
//                           <video class="loader-genially" autoplay="autoplay" loop="loop" playsinline="playsInline" muted="muted" style={{position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', marginBottom: '10%'}}>
//                             <source src="https://static.genial.ly/resources/panel-loader-low.mp4" type="video/mp4" />
//                             Your browser does not support the video tag.
//                           </video>
//                           <div id="61a97b1f61b8c00d8d442a43" class="genially-embed" style={{margin: '0px auto', position: 'relative', height: 'auto', width: '100%'}}> </div>
//                         </div>
//                       </div>
                      
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//         </main>
//         {/* <Footer /> */}
//     </>
//   );
// }
