import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });
import './result-item.css';

type ResultItemProps = {
  unitid: number,
  instnm: string,
  city: string,
  stabbr: string
  insturl: string
}

const ResultItem = ({ unitid,
  instnm,
  city,
  stabbr,
  insturl }: ResultItemProps) => {
  return (
    <div>
    <div className="result-item overflow-hidden" data-unitid={unitid}>
      <div className="city-state"><span className="city">{city}</span> <span className={`${inter.className} bullet`}>·</span> <span className="stabbr">{stabbr}</span></div>
      <h3 className="instnm">{instnm}</h3>
      <a className="insturl" href={`https://${insturl}`} target="_blank" title={insturl}>{insturl}</a>
    </div>
    </div>
  )
}

export default ResultItem;