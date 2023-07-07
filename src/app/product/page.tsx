'use client';
import Image from 'next/image'
import topGraphic from '../../assets/images/top-graphic.jpg';
import { useState } from 'react';
import SearchResults from '../../components/search/SearchResults';
import { Metadata } from 'next'
import './product.css';
 
export const metadata: Metadata = {
  title: 'Product Page',
  description: 'Page with product information',
}

export default function Product() {
  const [searchText, setSearchText] = useState('');

  return (
    <main className="container mx-auto">
      <div id="header-section" className="flex flex-col-reverse md:flex-row justify-start items-center mt-4 md:mt-[81px] mb-8 md:mb-[100px]">
        <div className="title-section ">
          <h1>Find the{'\n'}university that’s{'\n'}right for you.</h1>
          <p><span>Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem.</span> <span>Voluptas atque autem totam.</span></p>
        </div>
        <Image
          src={topGraphic}
          alt="Circular graphic of man staring into horizon."
          width={384}
          height={383}
          className="right-image mb-8 md:mb-0"
        />
      </div>
      <section id="search-section" className="flex">
        <form className="w-full">
          <input className="search-textbox" placeholder="Search..." type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </form>
      </section>
      <section id="results-section" className="flex">
        <SearchResults searchQuery={searchText} />
      </section>
    </main>
  )
}
