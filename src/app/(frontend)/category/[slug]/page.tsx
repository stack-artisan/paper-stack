import PostCard from "@/components/global/post-card";
import { H2 } from "@/components/ui/H2";
import { H4 } from "@/components/ui/H4";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
                            <BreadcrumbPage>Category</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="space-y-5">
                    <H2>All from category</H2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {FeaturedPosts.map((item: Post, index: number) => (
                            <PostCard key={index} postData={item} />
                        ))}
                    </div>

                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>

                </div>



            </div>
        </main>
    );
}
