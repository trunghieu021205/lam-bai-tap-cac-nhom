const posts = [
    { title: "Bài viết 1", slug: "bai-viet-1" },
    { title: "Bài viết 2", slug: "bai-viet-2" },
];

type Props = {
    params: Promise<{ slug: string }>;  
};

export default async function BlogPostPage({ params }: Props) {   
    const { slug } = await params;  

    // Tìm bài viết theo slug
    const post = posts.find((p) => p.slug === slug);

    // Nếu không tìm thấy bài viết
    if (!post) {
        return (
            <div className="p-6">
                <h1 className="text-3xl font-bold text-red-600">Không tìm thấy bài viết</h1>
                <p className="mt-4">Slug: {slug}</p>
                <a 
                    href="/blog" 
                    className="text-blue-500 hover:underline mt-6 inline-block"
                >
                    ← Quay lại danh sách bài viết
                </a>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <a 
                href="/blog" 
                className="text-blue-500 hover:underline mb-6 inline-block"
            >
                ← Quay lại danh sách bài viết
            </a>

            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

            <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 min-h-75">
                <p className="text-gray-600 text-lg">
                    Đây là nội dung của bài viết: <strong>{post.title}</strong>
                </p>
                <p className="mt-6 text-gray-500">
                    (Slug: {slug})
                </p>
                <p className="mt-8 text-sm text-gray-400">
                    Đây là trang chi tiết đơn giản.
                </p>
            </div>
        </div>
    );
}