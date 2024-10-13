import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import labIcon from './lab.svg';
import mapIcon from './map.svg';
import imagesIcon from './images.svg';

const Detail = () => {
  const { id } = useParams();
  const [medicament, setMedicament] = useState("Aymen");
  const [images, setImages] = useState(
    ["https://www.pharma-gdd.com/cache/product_show/333430303933353935353833382d646f6c697072616e652d313030306d672d382d636f6d7072696d657313e8670f.jpg.webp",
      "https://www.pharma-gdd.com/cache/product_show/73616e6f66692d646f6c697072616e652d313030306d672d382d636f6d6f7072696d65732d646f7354c5da4e.jpg.webp",
      "https://www.pharma-gdd.com/media/cache/resolve/product_show/73616e6f66692d646f6c697072616e652d313030306d672d382d636f6d6f7072696d65732d636f7465768077f6.jpg"
    ]
  );
  const [image, setImage] = useState(images[0]);
  const [contShow, setContShow] = useState(0);

  useEffect(() => {
    const fetchMedicament = async () => {
      try {
        const response = await axios.get(`https://localhost:9200/medicine-index-w-autocomplete/_doc/${id}`, {
          headers: {
            'Authorization': 'Basic ZWxhc3RpYzpuX1d5Z3JXVnVqUU1pZTY1emdIdw==',
            'Content-Type': 'application/json'
          }
        });
        setMedicament(response.data._source);
      } catch (error) {
        console.error('Error fetching medicament details:', error);
      }
    };

    fetchMedicament();
  }, [id]);

  if (!medicament) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <div className="break h-16"></div>
      <div className="hero bg-[#edf0ff]">
        <div className="container mx-auto">
          <div className="cont1 text-center w-4/5 mx-auto pt-5 pb-14">
            <h2 className="text-4xl font-bold w-full text-[#00157c] pb-4 pt-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {medicament['Nom Commercial']}
            </h2>
            <p className="text-lg font-thin text-[#000625] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              COMMERCIALISÉ
            </p>
          </div>


        </div>
      </div>
      <div className="herotwo bg-transparent relative">
        <div className="container mx-auto text-center mt-3">
          <ul className="flex justify-center gap-2 cont2 text-center w-3/5 mx-auto text-white bg-transparent -mt-9 font-poppins  text-sm">
            <li onClick={() => setContShow(0)} className="cursor-pointer bg-[#d2d9ff] py-3 px-4 flex items-center rounded-md shadow">
              <img src={labIcon} alt="Laboratory" className="w-5 h-5" />
              {medicament['labo']}
            </li>
            <li onClick={() => setContShow(1)} className="cursor-pointer bg-[#d2d9ff] py-3 px-4 flex items-center rounded-md shadow ">
              <img src={imagesIcon} alt="Country" className="w-5 h-5" />
              {medicament['Pays']}
            </li>
            <li className="cursor-pointer bg-[#d2d9ff] py-3 px-4 flex items-center rounded-md shadow ">
              <img src={mapIcon} alt="Country" className="w-5 h-5" />
              {medicament['Pays']}
            </li>

          </ul>

          {/* Container Images */}
          <div className={`cont3 moredetails text-left w-3/5 mx-auto pt-5 pb-8 ${contShow == 1 ? "" : "hidden"}`}>
            <div className="box my-10">
              <h3 className="relative text-3xl font-bold text-[#4a4a4a] inline-block mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>

                <span className="bg-gradient-to-r from-[#D1D7FF] to-[#D1D7FF] bg-no-repeat bg-[length:100%_40%] bg-bottom mb-2 ">
                  Images
                </span>
              </h3>
              <div className="font-normal text-[#171A1F] overflow-x-auto">
                <img src={image} alt="Country" className="w-96 h-96 mx-auto" />

                <div className="grid grid-cols-1 md:grid-cols-3">
                {images.map((item, key) =>
                  <div key={key} className="mb-4 md:mb-0 cursor-pointer">
                    <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                      <img
                        key={key} src={item}
                        className="max-w-xs mx-auto h-44"
                        alt="image" />
                      <div
                      onClick={() => setImage(images[key])}
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-blue-200 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-60"></div>
                    </div>
                  </div>
                
                  )}
                </div>
              </div>
            </div>
          </div>



          <div className={`cont3 moredetails text-left w-3/5 mx-auto pt-5 pb-8 ${contShow == 0 ? "" : "hidden"}`}>
            <div className="box my-10">
              <h3 className="relative text-3xl font-bold text-[#4a4a4a] inline-block mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>

                <span className="bg-gradient-to-r from-[#D1D7FF] to-[#D1D7FF] bg-no-repeat bg-[length:100%_40%] bg-bottom mb-2 ">
                  Fiche médicament
                </span>
              </h3>
              <div className="font-normal text-[#171A1F] overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                  <tbody>
                    {[
                      { label: 'Classe pharmaceutique', value: medicament['cpharmaco'] },
                      { label: 'Classe thérapeutique', value: medicament['ctherapeutique'] },
                      { label: 'DCI', value: medicament['dci'] },
                      { label: 'Code DCI', value: medicament['Code DCI'] },
                      { label: 'Forme', value: medicament['Forme'] },
                      { label: 'Dosage', value: medicament['Dosage'] },
                      { label: 'Packaging', value: medicament['Conditionnement'] },
                      { label: 'Type', value: medicament['Type'] },
                      { label: 'Tarif de référence', value: medicament['Tarif de référence'] },
                    ].map((item) => (
                      <tr key={item.label} className="border-b border-gray-200">
                        <td className="px-4 py-2 font-bold text-gray-700">{item.label}</td>
                        <td className="px-4 py-2">{item.value || 'N/A'}</td>
                      </tr>
                    ))}
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-2 font-bold text-gray-700 text-center">
                        <Link to="#" onClick={() => window.open('/', '_blank')}>
                          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Télécharger la notice
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>









            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
