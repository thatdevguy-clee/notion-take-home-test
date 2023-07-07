'use client';
import Image from 'next/image'
import topGraphic from '../../assets/images/top-graphic.jpg';
import './product.css';
import { useState } from 'react';
import SearchResults from '../../components/search/SearchResults';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Product Page',
  description: 'Page with product information',
}

export default function Product() {
  const [searchText, setSearchText] = useState('');

  return (
    <main className="container">
      <div id="header-section" className="flex flex-col-reverse md:flex-row justify-start items-center mt-4 md:mt-[81px] mb-8 md:mb-[100px]">
        <div className="title-section mr-0 md:mr-[63px] xl:mr-[126px]">
          <h1 className="text-[28px] sm:text-[48] md:text-[56px] xl:text-[69px]">Find the university that’s right for you.</h1>
          <p className="text-[16px] md:text-[18px] xl:text-[20px]">Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem. Voluptas atque autem totam.</p>
        </div>
        <Image
          src={topGraphic}
          alt="Circular graphic of man staring into horizon."
          width={384}
          height={383}
          className="mb-8 md:mb-0"
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
