import Head from "next/head";
import "slick-carousel/slick/slick.css";
import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Counter from "../components/Counter";
import { sanityClient, urlFor } from "../sanity"

export default function Home() {

  return (
    <div>
      <Head>
        <title>Innovation and discovery beyond our skies</title>
        <link rel="icon" href="/aea/plane3.png" />
      </Head>
      

     
      <main className="font-bodyFont">
  <Header />
 
  <Banner /> 
  <BannerBottom />
  <Counter />

 
 
          
        

       {/* <hr id="posts" className="p-10" />
        <h1 className=" text-secondaryColor font font-semibold mt-2 mb-5 text-4xl  text-center" >
          Our Blogs
        </h1>
        {/* ============ Banner-Bottom End here ======= *}

        {/* ============ Post Part Start here ========= *}

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6 px-4 textColor" >
          {
            posts.map((post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className="border-[1px] border-white border-opacity-40 h-[450px] group">
                  <div className="h-3/5 w-full overflow-hidden">
                    <Image width={380} height={350} src={urlFor(post.mainImage).url()!} alt={""} className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110" />
                  </div>
                  <div className="h-2/5 w-full flex flex-col justify-center">
                    <div className="flex justify-between items-center px-4 py-1 border-b-[1px] border-b-gray-500">
                      <p>{post.title}</p>
                      <a href={post.author.linkedin}><img className="w-12 h-12 rounded-full object-cover" src={urlFor(post.author.image).url()!} alt="authorImg" /></a>
                    </div>
                    <p className="py-2 px-4 text-base">
                      {post.description.substring(0, 60)}... by - <a href={post.author.linkedin}><span className="font-semibold text-secondaryColor" >{post.author.name}</span></a>
                    </p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
        */}
        {/* ============ Post Part End here =========== */}
        {/* ============ Footer Start here============= */}
        <Footer />
        {/* ============ Footer End here ============== */}
      </main>
    
    </div>
  );
}


export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author -> {
      name, 
      image,
      linkedin
    },
    description, 
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    }

  };
}