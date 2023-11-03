// import React, { ReactNode } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';

// interface Props {
//     children?: ReactNode
//     color?: String;
//     background?: String;
//     data?: []
// }

// const SliderComponent = ({ children, ...props }: Props) => {
//     return (
//         <>

//             <Swiper
//                 spaceBetween={30}
//                 slidesPerView={3}
//                 navigation={true}
//                 modules={[Navigation]}
//                 onSlideChange={() => console.log('slide change')}
//                 onSwiper={(swiper) => console.log(swiper)}
//             >
//                 {props.data?.map((item, index) =>
//                     <SwiperSlide key={index}>{item}</SwiperSlide>
//                 )}



//             </Swiper>



//             <div
//                 style={{ background: `${props.background}`, color: `${props.color}` }}>{children} </div>
//         </>
//     )
// }

// export default SliderComponent
// work in progres