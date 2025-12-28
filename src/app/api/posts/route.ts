import { NextResponse } from 'next/server';

type Post = {
    post_title: string;
    post_category: string;
    post_category_url: string;
    post_url: string;
    post_date: string;
    post_read_time: string;
    post_featured_image: string;
    post_author_name: string;
    post_author_experties: string;
};

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const postUrl = searchParams.get('post_url');

    const FeaturedPosts: Post[] = [
        {
            "post_title": "Scaling Microservices with Docker and Kubernetes",
            "post_category": "DevOps",
            "post_category_url": "devops",
            "post_url": "scaling-microservices-docker-kubernetes",
            "post_date": "2025-09-05",
            "post_read_time": "11 min",
            "post_featured_image": "https://images.unsplash.com/photo-1667372459534-848ec00d4da7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "post_author_name": "Robert Miller",
            "post_author_experties": "DevOps Engineer specializing in Docker, Kubernetes, and cloud infrastructure"
        },
        {
            "post_title": "Mastering React State Management in 2025",
            "post_category": "Web Development",
            "post_category_url": "web-development",
            "post_url": "mastering-react-state-management-2025",
            "post_date": "2025-01-12",
            "post_read_time": "7 min",
            "post_featured_image": "https://images.unsplash.com/photo-1687603917313-ccae1a289a9d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "post_author_name": "Alex Johnson",
            "post_author_experties": "Senior Frontend Engineer specializing in React & Next.js"
        },
        {
            "post_title": "Why Laravel 11 Is a Game Changer",
            "post_category": "Backend Development",
            "post_category_url": "backend-development",
            "post_url": "why-laravel-11-is-a-game-changer",
            "post_date": "2025-02-03",
            "post_read_time": "6 min",
            "post_featured_image": "https://images.unsplash.com/photo-1517852058149-07c7a2e65cc6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "post_author_name": "Maria Patel",
            "post_author_experties": "PHP Laravel Expert & API Architect"
        },
        {
            "post_title": "Creating Secure 2FA Systems for Modern Apps",
            "post_category": "Cybersecurity",
            "post_category_url": "cybersecurity",
            "post_url": "creating-secure-2fa-systems",
            "post_date": "2025-03-10",
            "post_read_time": "8 min",
            "post_featured_image": "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "post_author_name": "John Carter",
            "post_author_experties": "Security Consultant & Authentication Specialist"
        },
        {
            "post_title": "Web3.0 Development: A Complete Beginner’s Guide",
            "post_category": "Blockchain",
            "post_category_url": "blockchain",
            "post_url": "web3-development-beginners-guide",
            "post_date": "2025-04-21",
            "post_read_time": "10 min",
            "post_featured_image": "https://images.unsplash.com/photo-1667422380246-3bed910ffae1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "post_author_name": "Sophia Lee",
            "post_author_experties": "Blockchain Developer & Smart Contract Engineer"
        },
        {
            "post_title": "Building High-Performance REST APIs with Node.js",
            "post_category": "API Development",
            "post_category_url": "api-development",
            "post_url": "high-performance-rest-apis-nodejs",
            "post_date": "2025-05-18",
            "post_read_time": "9 min",
            "post_featured_image": "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "post_author_name": "Michael Roberts",
            "post_author_experties": "Full-Stack Developer & API Specialist"
        },
        {
            "post_title": "A Complete Guide to React Native Skia for Animations",
            "post_category": "Mobile Development",
            "post_category_url": "mobile-development",
            "post_url": "react-native-skia-animations-guide",
            "post_date": "2025-06-11",
            "post_read_time": "12 min",
            "post_featured_image": "https://images.unsplash.com/photo-1670057037226-b3d65909424f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "post_author_name": "Emily Watson",
            "post_author_experties": "React Native Developer with expertise in UI/UX animation"
        },
        {
            "post_title": "Top UI/UX Trends That Will Dominate 2025",
            "post_category": "Design",
            "post_category_url": "design",
            "post_url": "ui-ux-trends-2025",
            "post_date": "2025-07-01",
            "post_read_time": "5 min",
            "post_featured_image": "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "post_author_name": "Daniel Kim",
            "post_author_experties": "Product Designer & UI/UX Strategist"
        },
        {
            "post_title": "Optimizing Next.js Apps for Lightning Fast Performance",
            "post_category": "Web Performance",
            "post_category_url": "web-performance",
            "post_url": "optimizing-nextjs-performance",
            "post_date": "2025-08-14",
            "post_read_time": "7 min",
            "post_featured_image": "https://plus.unsplash.com/premium_photo-1669530958591-15cbad83785b?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "post_author_name": "Hannah Brooks",
            "post_author_experties": "Senior Next.js Developer & Performance Engineer"
        }
    ];

    // ✅ If post_url is provided → return single post
    if (postUrl) {
        const post = FeaturedPosts.find(
            (item) => item.post_url === postUrl
        );

        if (!post) {
            return NextResponse.json(
                { message: 'Post not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            data: post
        });
    }

    // ✅ Otherwise → return all posts
    return NextResponse.json({
        data: FeaturedPosts
    });
}
