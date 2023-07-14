
import ResultItem from './ResultItem';
import { useEffect, useState } from 'react';
import { parse, ParseResult } from "papaparse";

type SearchDataProps = {
  UNITID: number,
  INSTNM: string,
  CITY: string,
  STABBR: string,
  INSTURL: string
}

type SearchResultsProps = {
  searchQuery: string
}

const csvUrl = 'https://gist.githubusercontent.com/simonlast/d5a86ba0c82e1b0d9f6e3d2581b95755/raw/f608b9b896dd3339df13dae317998d5f24c00a50/edu-scorecard.csv';

const SearchResults = ({ searchQuery }: SearchResultsProps) => {
  const [searchData, setSearchData] = useState<SearchDataProps[]>();

  useEffect(() => {
    parse(csvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results: ParseResult<SearchDataProps>) => {
        setSearchData(results.data);
      }
    });
  }, []);

  return (
    <section className="results grid gap-x-6 gap-y-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {searchData?.filter(
        (searchDataItem: SearchDataProps) => {
          const { INSTNM, CITY, STABBR, INSTURL } = searchDataItem;
          const queryRegex = new RegExp(searchQuery, 'i');
          if (
            INSTNM.match(queryRegex) ||
            CITY.match(queryRegex) ||
            STABBR.match(queryRegex) ||
            INSTURL.match(queryRegex)
          ) {
            return true;
          }
        }
      )
        .map((filteredSearchDataItem: SearchDataProps) => {
          const { UNITID, INSTNM, CITY, STABBR, INSTURL } = filteredSearchDataItem;
          return <ResultItem key={UNITID}
            unitid={UNITID}
            instnm={INSTNM}
            city={CITY}
            stabbr={STABBR}
            insturl={INSTURL} />
        })
      }
    </section>
  );
}

export default SearchResults;