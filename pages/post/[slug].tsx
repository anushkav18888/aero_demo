import { GetStaticProps } from 'next'
import React, { useState } from 'react'
import PortableText from 'react-portable-text'
import post from '../../aeablog/schemas/post'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'
import { Post as PostType } from '../../typings'
import { useForm, SubmitHandler } from "react-hook-form"
import { useSession } from 'next-auth/react'
import { format } from 'date-fns';


interface Props {
    post: PostType;
}

type Inputs = {
    _id: string;
    name: string;
    email: string;
    comment: string;
}

const Post = ({ post }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [submitted, setSubmitted] = useState(false)
    const [userErr, setUserErr] = useState("");
    const { data: session } = useSession()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        fetch("/api/createComment", {
            method: "POST",
            body: JSON.stringify(data),
        }).then(() => {
            setSubmitted(true)
        }).catch((err) => {
            setSubmitted(false)
        })
    }

    const handleUserErr = () => {
        if (!session) {
            setUserErr("Please sign in to comment!")
        } else {
            setUserErr("")
        }
    }
    return (
        <>
            <Header />
            {/* main Image */}
            <img
  src={urlFor(post.mainImage).url()!}
  alt="coverImage"
  style={{
    width: '100%',      // 3/4th width
    maxHeight: '77vh', // Cover the height of the screen or less
    objectFit: 'contain' // Maintain aspect ratio and fit within the container
  }}
/>

            {/* Article */}
            <div className=' max-w-3xl mx-auto mb-10 p-5 textColor ' style={{ backgroundColor: "#18181B" }}>    {/*max-w-3xl if I want to take the thing to middle*/}
                <article className='w-full mx-auto p-5 '>
                <h1 className='font-titleFont font-medium text-[32px] text-primary text-secondaryColor border-b-[1px] border-b-cyan-800 mt-10 mb-3'>
  {post.title}
</h1>

                    <h2 className='font-bodyFont text-[18px] text-gray-500 mb-2'>
                        {post.description}
                    </h2>
                    <div className="flex items-center gap-2">
                    
                        <p className="font-bodyFont text-base ">
                           
                            {post.category} - published on{' '}
                            {format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
                        </p>
                    </div>
                    <div className='mt-10 '>
                        <PortableText dataset={process.env.NEXT_PUBLIC_SANITY_DATASET || "production"} projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'btsik4cn'} content={post.body} serializers={{
                            h1: (props: any) => (
                                <h1 className='text-3xl font-bold my-5 font-titleFont ' {...props} />
                            ),
                            h2: (props: any) => (
                                <h2 className='text-2xl font-bold my-5 font-titleFont ' {...props} />
                            ),
                            h3: (props: any) => (
                                <h3 className='text-3xl font-bold my-5 font-titleFont ' {...props} />
                            ),
                            li: ({ children }: any) => (
                                <li className='ml-4 list-disc ='>{children}</li>
                            ),
                            link: ({ href, children }: any) => (
                                <a href={href} className='text-cyan-500 hover-underline'>{children}</a>
                            ),
                            strong: ({ href, children }: any) => (
                                <strong className='text-secondaryColor'>{children}</strong>
                            )
                        }} />
                    </div>

                </article>
     {/*           
                <hr className='max-w-lg my-5 mx-auto border-1px border-secondaryColor' />
                {
                    submitted ? <div className='flex flex-col items-center gap-2 p-10 my-10 bg-bgColor text-white mx-auto'>
                        <h1 className='font-titleFont text-3xl font-bold items-center justify-center'>Thank you for submitting your comment</h1>
                        <p>Once it has been approved, it will appear below!</p>
                    </div> : <div>
                        <p className='text-xs text-secondaryColor uppercase font-titleFont font-bold'>Enjoyed this article?</p>
                        <h3 className='font-titlefont text-3xl font-bold'>Leave a comment below!</h3>
                        <hr className='py-3 mt-2' />
*/}
                        {/* Form will start here */}
                        {/* Generate Id for hook forms  */}
                        {/*
                        <input {...register("_id")} type="hidden" name='_id' value={post._id} />
                        <form onSubmit={handleSubmit(onSubmit)} className='mt-7 flex flex-col gap-6'>
                            <label className='flex flex-col' >
                                <span className='font-titleFont font-semibold text-base'>
                                    Name
                                </span>
                                <input {...register("name", { required: true })} className='text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-lg shadow-secondaryColor' name='name' type="text" style={{ color: "black", fontFamily: "cursive" }} placeholder='Enter your name' />
                                {
                                    errors.name && (
                                        <p className='text-sm font-titleFont font-semibold text-red-500 underline-offset-2 my-1 px-4 animate-bounce'><span className='text-base font-bold italic mr-2'>!</span>Name is required</p>
                                    )
                                }
                            </label>
                            <label className='flex flex-col' >
                                <span className='font-titleFont font-semibold text-base'>
                                    Email
                                </span>
                                <input {...register("email", { required: true })} className='text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor' name='email' type="email" style={{ color: "black", fontFamily: "cursive" }} placeholder='Enter your email' />
                                {
                                    errors.email && (
                                        <p className='text-sm font-titleFont font-semibold text-red-500  underline-offset-2 my-1 px-4 animate-bounce'><span className='text-base font-bold italic mr-2'>!</span>Emial is required</p>
                                    )
                                }
                            </label>
                            <label className='flex flex-col' >
                                <span className='font-titleFont font-semibold text-base'>
                                    Comment
                                </span>
                                <textarea {...register("comment", { required: true })} className='text-base placeholder:text-sm border-b-[1px] border-secondaryColor py-1 px-4 outline-none focus-within:shadow-xl shadow-secondaryColor' name='comment' style={{ color: "black", fontFamily: "cursive" }} placeholder='Enter your comment' rows={6} />
                                {
                                    errors.comment && (
                                        <p className='text-sm font-titleFont font-semibold text-red-500  underline-offset-2 my-1 px-4 animate-bounce'><span className='text-base font-bold italic mr-2'>!</span>Please Comment,it's required</p>
                                    )
                                }
                            </label>
                            {session && (<button type='submit' className='w-full bg-bgColor text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-secondaryColor duration-300'>
                                Submit
                            </button>)}
                        </form>

                        {!session && (<button onClick={handleUserErr} className='w-full bg-bgColor text-white text-base font-titleFont font-semibold tracking-wider uppercase py-2 rounded-sm hover:bg-secondaryColor duration-300'>
                            Submit
                        </button>)}
                        {
                            userErr && (
                                <p className='text-sm font-titleFont text-center font-semibold text-red-500 underline underline-offset-2 my-1 px-4 animate-bounce'><span className='text-base font-bold italic mr-2'>!</span>{userErr}</p>
                            )
                        }
                        {/* Comments  */}
{/*
                        <div className='w-full flex flex-col p-10 my-10 mx-auto shadow-bgColor shadow-lg space-y-2'>
                            <h3 className='text-3xl font-titleFont font-semibold'>Comments</h3>
                            <hr />
                            {
                                post.comments.map((comment) => (
                                    <div key={comment._id}>
                                        <p style={{ fontFamily: "cursive" }}><span className='text-secondaryColor' style={{ fontFamily: "cursive" }}>{comment.name} - </span>{comment.comment}</p>
                                    </div>
                                ))
                            }
                            
                        </div>
                        */}
                    </div>
               {/*} }
            </div>
            */}
            <Footer />
        </>
    )
}

export default Post;


export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
        _id,
        slug{
            current
        }
    }`;
    const posts = await sanityClient.fetch(query)
    const paths = posts.map((post: PostType) => ({
        params: {
            slug: post.slug.current,

        }
    }));
    return {
        paths,
        fallback: "blocking",
    };
};


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        publishedAt,
        title,
        author->{
            name,
            image,
            linkedin
        },
        "comments":*[_type=="comment" && post._ref == ^._id && approved == true],
        description,
        mainImage,
        slug,
        body
    }`

    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    })

    if (!post) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            post
        },
        revalidate: 60,

    }
}


