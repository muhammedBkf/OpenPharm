import React from "react";
import ElasticsearchAPIConnector from '@elastic/search-ui-elasticsearch-connector';
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import { ErrorBoundary, SearchProvider, SearchBox, Results, Paging, ResultsPerPage, PagingInfo } from "@elastic/react-search-ui";
import { Facet } from "@elastic/react-search-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import CustomResult from './CustomResultsView';
import './styles.css';



const connector = new ElasticsearchAPIConnector({
  // index: "medicine-index-w-autoco mplete",
  // host: "/pharma/_search",
  host: "https://api.medicaments-dz.com",
  index: "pharma",
  connectionOptions: {
    headers: {
      Authorization: 'Basic ZWxhc3RpYzpuX1d5Z3JXVnVqUU1pZTY1emdIdw==',
    },
  }
});





const config = {
  searchQuery: {
    search_fields: {
      "Nom Commercial": { weight: 1 },
      "dci": { weight: 1 }
    },
    result_fields: {
      "Nom Commercial": { snippet: { size: 100, fallback: true } },
      "Dosage": { snippet: { size: 100, fallback: true } },
      "Forme": { snippet: { size: 100, fallback: true } }
    },
    disjunctiveFacets: [
      "labo.keyword",
      "Type.keyword",
      "Pays.keyword",
      "cpharmaco.keyword",
      "ctherapeutique.keyword"
    ],
    facets: {
      "Pays": { type: "value", size: 100 },
      "labo.keyword": { type: "value", size: 100 },
      "cpharmaco": { type: "value", size: 100 },
      "ctherapeutique": { type: "value", size: 100 },
      "Type": { type: "value", size: 100 }
    }
  },
  autocompleteQuery: {
    results: {
      resultsPerPage: 5,
      search_fields: {
        "Nom Commercial.autocomplete": { weight: 1 }
      },
      result_fields: {
        "Nom Commercial": { snippet: { size: 100, fallback: true } }
      }
    },
    suggestions: {
      types: {
        results: { fields: ["Nom Commercial.autocomplete"] }
      },
      size: 4
    }
  },
  apiConnector: connector,
  alwaysSearchOnInitialLoad: true
};

const Home = () => (
<>
  <SearchProvider config={config}>
    <ErrorBoundary>
      <Header />
      <div className="break h-36"></div>
      <div className="hero bg-[#edf0ff]">
        <div className="container mx-auto">
          <div className="cont1 text-center w-4/5 mx-auto pt-5 pb-16">
            <h2 className="text-5xl font-bold w-full text-[#00157c] pb-4 pt-2 " style={{ fontFamily: 'Poppins, sans-serif' }}>Recherchez votre medicament</h2>
            <p className="text-lg font-thin text-[#000625] leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>Votre source d'information de confiance</p>
          </div>
        </div>
      </div>
      <div className="herotwo bg-[#F8F9FA] ">
        <div className="container mx-auto">
          <div className="cont2 relative bottom-12 text-center w-3/5 mx-auto pt-7 pb-9 px-10 bg-[#d2d9ff] shadow-md  rounded-lg">
            <SearchBox
              autocompleteMinimumCharacters={3}
              autocompleteResults={{
                linkTarget: "_blank",
                sectionTitle: "Results",
                titleField: "Nom Commercial",
                urlField: "url",
                shouldTrackClickThrough: true,
              }}
              autocompleteSuggestions={true}

              debounceLength={300}
              searchAsYouType={true}

              inputView={({ getInputProps, getButtonProps }) => (
                <div className="relative w-full max-w-xxl text-left">
                  <input
                    {...getInputProps({
                      placeholder: "Entrez le nom du médicament à rechercher",
                    })}
                    className="py-4 px-7 w-full bg-white border border-[#d2d9ff] rounded-md placeholder-gray-500 text-sm focus:outline-none focus:border-[#898989]"
                  />
                  <button
                    {...getButtonProps()}
                    className="absolute right-0 top-0 bottom-0 flex items-center justify-center px-4 text-gray-500"
                    aria-label="Search"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              )
              }


            />

          </div>



          <div className="w-full grid grid-auto-columns grid-cols-12  mt-5.5 pl-10">
            <div className=" col-span-2  mr-10">

              <Facet key={"2"} field={"Pays"} showSearch={true} searchPlaceholder="rechercher pays..." label={<span style={{ color: '#00A896', fontFamily: 'Poppins, sans-serif', fontSize: '12px' }} >Pays</span>} />
              <Facet key={"3"} field={"labo.keyword"} searchPlaceholder="rechercher labo ..." isFilterable={true} label={<span style={{ color: '#00A896', fontFamily: 'Poppins, sans-serif', fontSize: '12px' }} >Laboratoire</span>} />
              <Facet key={"4"} field={"cpharmaco"} searchPlaceholder="rechercher c.pharmaco..." isFilterable={true} label={<span style={{ color: '#00A896', fontFamily: 'Poppins, sans-serif', fontSize: '12px' }} >C.pharmaceutique</span>} />
              <Facet key={"5"} field={"ctherapeutique"} searchPlaceholder="rechercher c.therapo..." isFilterable={true} label={<span style={{ color: '#00A896', fontFamily: 'Poppins, sans-serif', fontSize: '12px' }} >C.therapeutique</span>} />
              <Facet key={"1"} field={"Type"} searchPlaceholder="rechercher type..." label={<span style={{ color: '#00A896', fontFamily: 'Poppins, sans-serif', fontSize: '12px' }} >Type</span>} isFilterable={true} />

            </div>


            <div className="col-span-8">

              <h3 className="relative text-3xl font-bold text-[#4a4a4a] inline-block mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>

                <span className="bg-gradient-to-r from-[#D1D7FF] to-[#D1D7FF] bg-no-repeat bg-[length:100%_40%] bg-bottom ">
                  Résultats
                </span>
              </h3>
              <div className="flex inline-block">
                <PagingInfo />

              </div>



              <Results
                resultView={CustomResult}
                shouldTrackClickThrough={true}
                titleField="Nom Commercial"
                className="font-normal text-[#8D8F91] bg-transparent border-transparent border w-full px-3 py-1"


              />


              <Paging className="custom-paging" />

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </ErrorBoundary>
  </SearchProvider>
  </>

);

export default Home;
