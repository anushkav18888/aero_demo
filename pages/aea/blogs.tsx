import React from 'react';
import Head from "next/head";
import "slick-carousel/slick/slick.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { sanityClient, urlFor } from "../../sanity"
import { Post as PostType } from "../../typings";
import Link from 'next/link';
import Image from 'next/image';

interface Props {
    posts: [PostType]
  }
  
  export default function Blogs({ posts }: Props) {
return (
    <>
    <Header/>
 <hr id="posts" className="p-10" />
        <h1 className=" text-secondaryColor font font-semibold mt-2 mb-5 text-4xl  text-center" >
          Our Blogs
        </h1>
        

        {/* ============ Post Part Start here ========= */}

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 py-6 px-4 textColor" >
        <Head>
        
        <link rel="icon" href="/aea/plane3.png" />
      </Head>
          {
            posts.map((post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className="border-[1px] border-white border-opacity-40 h-[450px] group">
                  <div className="h-2/3 w-full overflow-hidden">
                    <Image width={380} height={380} src={urlFor(post.mainImage).url()!} alt={""} className="w-full h-full object-cover brightness-75 group-hover:brightness-100 duration-300 group-hover:scale-110" />
                  </div>
                  <div className="h-2/5 w-full flex flex-col justify-center">
                    <div className="flex justify-between items-center px-4 py-1 border-b-[1px] border-b-gray-500">
                    <span className="font-semibold text-secondaryColor" style={{ fontSize: '25px' }}>
                  <p>{post.title}</p>
                  </span>

                    </div>
                    <p className="py-2 px-4 text-base">
  {post.description.substring(0, 60)}... <span className="font-semibold text-secondaryColor"></span>
</p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
        <Footer/>
        </>
)
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

  