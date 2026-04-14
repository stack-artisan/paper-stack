import TOC from "@/components/post/TableOfContent";
import { H4 } from "@/components/ui/H4";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type GetPostParams = {
    slug: string;
};

const getPost = async ({ slug }: GetPostParams) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?post_url=${slug}`);
        const featuredPosts = await res.json();
        return featuredPosts.data;
    } catch (error) {
        console.error(error);
    }
};

interface Post {
    post_title: string;
    post_category: string;
    post_category_url: string,
    post_url: string,
    post_date: string;
    post_read_time: string;
    post_featured_image: string;
    post_author_name: string;
    post_author_experties: string;
}

const getPosts = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
        const featuredPosts = await res.json();
        return featuredPosts.data;
    } catch (error) {
        console.error(error);
    }
};


export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const PostData = await getPost({ slug });

    if (!PostData) return null;

    const FeaturedPosts: Post[] = await getPosts();

    return (
        <main className="overflow-visible flex min-h-screen w-full flex-col items-center px-4 lg:px-6 bg-white dark:bg-black sm:items-start">
            <div className="w-full">
                <Breadcrumb className="py-5">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href={`/category/${PostData.post_category_url}`}>{PostData.post_category}</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{PostData.post_title}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <header className="relative p-10 flex gap-5 justify-center items-center h-[300px] w-full bg-linear-to-r from-black to-black rounded-xl shadow overflow-hidden">
                    <Image
                        src={PostData.post_featured_image}
                        alt={PostData.post_title}
                        fill
                        className="object-cover rounded-xl opacity-40"
                        priority
                    />
                    <h1 className="text-center text-white scroll-m-20 text-4xl font-extrabold tracking-tight text-balance z-2">
                        {PostData.post_title}
                    </h1>
                    <Item size={'sm'} className="gap-2 z-2 absolute bottom-0 left-0">
                        <ItemMedia>
                            <Avatar>
                                <AvatarImage className="grayscale" src="https://github.com/maxleiter.png" />
                                <AvatarFallback>ER</AvatarFallback>
                            </Avatar>
                        </ItemMedia>
                        <ItemContent className="gap-0">
                            <ItemTitle className="text-white">{PostData.post_author_name}</ItemTitle>
                            <ItemDescription className="text-white text-xs">{PostData.post_author_experties}</ItemDescription>
                        </ItemContent>
                    </Item>
                </header>
                <div className="w-full grid lg:grid-cols-4 gap-4 py-5">
                    {/* Table of Content */}
                    <TOC />
                    {/* Table of Content */}
                    <div className="col-span-4 lg:col-span-2">
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            <span className="text-3xl font-semibold">D</span>ummy Post Description
                            <br />
                            Building modern applications today requires more than just writing code — it’s about choosing the right architecture, tools, and best practices to ensure scalability, performance, and long-term maintainability.
                            <br />
                            As technologies evolve rapidly, developers must stay ahead by understanding not only how things work, but why certain approaches are preferred.
                            <br />
                            In this article, we explore the core concepts behind modern application development, breaking down complex ideas into practical examples you can apply immediately.
                            <br />
                            From optimizing workflows and improving performance to writing clean, maintainable code, this guide focuses on real-world solutions rather than theory alone.
                            <br />
                            You’ll also learn common pitfalls developers face when building production-ready applications and how to avoid them. Whether you’re working on frontend interfaces, backend APIs, or full-stack systems, the principles discussed here will help you build faster, smarter, and more secure applications.
                            <br />
                            <br />
                            As technologies evolve rapidly, developers must stay ahead by understanding not only how things work, but why certain approaches are preferred.
                            <br />
                            In this article, we explore the core concepts behind modern application development, breaking down complex ideas into practical examples you can apply immediately.
                            <br />
                            From optimizing workflows and improving performance to writing clean, maintainable code, this guide focuses on real-world solutions rather than theory alone.
                            <br />
                            You’ll also learn common pitfalls developers face when building production-ready applications and how to avoid them. Whether you’re working on frontend interfaces, backend APIs, or full-stack systems, the principles discussed here will help you build faster, smarter, and more secure applications.
                            <br />
                            <br />
                            As technologies evolve rapidly, developers must stay ahead by understanding not only how things work, but why certain approaches are preferred.
                            <br />
                            In this article, we explore the core concepts behind modern application development, breaking down complex ideas into practical examples you can apply immediately.
                            <br />
                            From optimizing workflows and improving performance to writing clean, maintainable code, this guide focuses on real-world solutions rather than theory alone.
                            <br />
                            You’ll also learn common pitfalls developers face when building production-ready applications and how to avoid them. Whether you’re working on frontend interfaces, backend APIs, or full-stack systems, the principles discussed here will help you build faster, smarter, and more secure applications.
                            <br />
                            <br />
                            As technologies evolve rapidly, developers must stay ahead by understanding not only how things work, but why certain approaches are preferred.
                            <br />
                            In this article, we explore the core concepts behind modern application development, breaking down complex ideas into practical examples you can apply immediately.
                            <br />
                            From optimizing workflows and improving performance to writing clean, maintainable code, this guide focuses on real-world solutions rather than theory alone.
                            <br />
                            You’ll also learn common pitfalls developers face when building production-ready applications and how to avoid them. Whether you’re working on frontend interfaces, backend APIs, or full-stack systems, the principles discussed here will help you build faster, smarter, and more secure applications.
                            <br />
                            By the end of this post, you’ll have a clearer understanding of how to approach modern development challenges with confidence — and how to level up your skills using proven strategies used by experienced engineers.
                        </p>
                    </div>
                    <div className="col-span-4 lg:col-span-1">
                        <H4>Related Posts</H4>
                        <div className="flex w-full lg:max-w-md flex-col gap-6">
                            <ItemGroup className="gap-4">
                                {FeaturedPosts.map((item: Post, index: number) => (
                                    <Item key={index} variant="outline" asChild role="listitem">
                                        <Link href={`/post/${item.post_url}`}>
                                            <ItemMedia variant="image">
                                                <Image
                                                    src={item.post_featured_image}
                                                    alt={item.post_title}
                                                    width={32}
                                                    height={32}
                                                    className="object-cover"
                                                />
                                            </ItemMedia>
                                            <ItemContent>
                                                <ItemTitle className="line-clamp-1">
                                                    {item.post_title}
                                                </ItemTitle>
                                                <ItemDescription>{item.post_category}</ItemDescription>
                                            </ItemContent>
                                            <ItemActions>
                                                <ArrowUpRight className="size-4" />
                                            </ItemActions>
                                        </Link>
                                    </Item>
                                ))}
                            </ItemGroup>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}
