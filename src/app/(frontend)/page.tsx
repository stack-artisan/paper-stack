import PostCard from "@/components/global/PostCard";
import { H2 } from "@/components/ui/H2";
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item";
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

export default async function Home() {

  const FeaturedPosts: Post[] = await getPosts();

  return (
    <main className="overflow-visible flex min-h-screen w-full flex-col items-center px-4 lg:px-6 bg-white dark:bg-black sm:items-start">
      <div className="w-full py-20">
        <h1 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
          The Future of Publishing
        </h1>
        <p className="text-center text-muted-foreground text-lg">
          Discover stories, thinking, and expertise from writers on any topic.
        </p>
      </div>
      <div className="w-full grid lg:grid-cols-3 gap-4 pb-10">
        <div className="order-last lg:order-first col-span-3 lg:col-span-2">
          <H2 className="lg:hidden">Most recent</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FeaturedPosts.map((item: Post, index: number) => (
              <PostCard key={index} postData={item} />
            ))}
          </div>
        </div>
        <div className="order-first lg:order-last col-span-3 lg:col-span-1">
          <H2>Most popular</H2>
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
    </main>
  );
}
