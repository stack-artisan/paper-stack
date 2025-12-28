"use client"

import Link from "next/link"
import { Card, CardAction, CardFooter, CardHeader } from "../ui/card"
import Image from "next/image"
import { Badge } from "../ui/badge";
import { H5 } from "../ui/H5";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";


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

interface PostCardProps {
    postData: Post;
}

export default function PostCard({ postData }: PostCardProps) {
    return (

        <Link href={`/post/${postData.post_url}`}>
            <Card className="h-[300px] flex-col justify-end relative overflow-hidden group">
                <CardHeader className="z-2 absolute top-2 right-5">
                    <CardAction>
                        <Button variant="outline" className="rounded-full" size="icon">
                            <ArrowUpRight />
                        </Button>
                    </CardAction>
                </CardHeader>
                <Image
                    src={postData.post_featured_image} alt={postData.post_title}
                    width={300}
                    height={300}
                    className="absolute top-0 left-0 w-full h-full object-cover z-0 
                    transition-transform duration-500 ease-out group-hover:scale-125" />
                <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-1 group-hover:bg-black/60"></div>
                <CardFooter className="flex-col items-start gap-y-2 z-2">
                    <H5 className="text-white">
                        {postData.post_title}
                    </H5>
                    <Badge asChild variant="secondary"><span>{postData.post_category}</span></Badge>
                </CardFooter>
            </Card>
        </Link>
    )
}