import Image from 'next/image'
import Other from "../public/other.json";

export default function Home() {
  return (
    <main>
      <div className='text-4xl'>People:</div>
      <div className='flex-wrap justify-start px-20 py-5 h-full md:flex' >
          {Other.map((card) => {
            return (
              <div key={card.index} className='grid-cols-1  border-2 border-emerald-950 py-3 px-6 rounded-2xl my-5 mx-auto md:w-[280px] md:h-[420px]'> 
                <a
                  href={card.link}
                  target="_blank"
                  rel="noreferrer"
                  alt={card.title}
                  title={card.title}
                  className='relative max-w-full and h-auto my-0 mx-auto border-1'
                >
                  <Image src={card.source} alt={card.title} className='rounded-2xl md:height=440 md:width=240' height="440" width="240" />
                </a>

                <p>{card.title}</p> //other card title

                <p>
                  {card.description} //other card description
                </p>

                <div>  //other tags wrap
                  {card.tags.map((tag) => {
                    return (
                      <p key={tag.index}>  //other skill tag
                        {tag}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
    </main>
  )
}
