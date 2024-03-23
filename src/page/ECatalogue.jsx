// import Footer from "../components/Footer";
// import Header from "../components/Header";

// export const ECatalogue = () => {
//   return (
//     <>
//       <Header />

//       <div className="bg-white">
//         {/* <div
//           className="text text-4xl bold text-center pt-20 "
//           style={{ backgroundColor: "white" }}
//         >
//           E Catalogue
//         </div> */}
//         <div className="hero min-h-screen bg-white">
//           <div className="hero-content flex-col lg:flex-row">
//             <img
//               src="https://truongthang.vn/wp-content/uploads/2023/09/1000x1000-5.jpg"
//               className="max-w-sm rounded-lg shadow-2xl"
//             />
//             <div>
//               <h1 className="text-5xl font-bold">E-Catalogue</h1>
//               <p className="py-6">
//                 Efurnitue đem đến cho bạn ECatalogue để bạn có thể tham khảo chi
//                 tiết những sản phẩm của chúng tôi.
//               </p>
//               <a href="http://localhost:8080/CATALOGUE_VMS_2018_1 (2).pdf">
//                 <button className="btn btn-primary">Xem Thêm</button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ECatalogue;

// ECatalogue.jsx

// App.js
// EpaperPage.js
// EpaperPage.js
import React, { useEffect, useRef } from "react";
import "turn.js"; // Import thư viện Turn.js

const ECatalogue = () => {
  const flipBookRef = useRef(null);

  const pages = [
    {
      image:
        "https://noithatihouse.com/wp-content/uploads/2023/05/z4205200783233_4318d9fe2988b9886455fce3aa016937.jpg",
    },
    {
      image:
        "https://noithatlacgia.vn/wp-content/uploads/2022/08/thiet-ke-noi-that-can-ho-chung-cu-vinhomes-metropolis-chi-nga-9-1024x683.jpg",
    },
    {
      image:
        "https://noithatlacgia.com/wp-content/uploads/2022/10/thiet-ke-noi-that-biet-thu-sang-trong-anh-thuan-hai-duong-7.jpg",
    },
    // Thêm các liên kết hình ảnh khác nếu cần
  ];

  useEffect(() => {
    if (flipBookRef.current) {
      flipBookRef.current.turn({
        width: 400, // Chiều rộng của sách
        height: 300, // Chiều cao của sách
        autoCenter: true, // Căn giữa tự động
        // Thêm các tùy chọn khác của Turn.js ở đây
      });
    }
  }, []);

  return (
    <div ref={flipBookRef}>
      {pages.map((page, index) => (
        <div key={index}>
          <img src={page.image} alt={`Page ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ECatalogue;
