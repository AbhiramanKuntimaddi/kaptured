import { posts } from "@/.velite";
import { MDXContent } from "@/components/mdx-components";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PostPageProps {
	params: Promise<{
		slug: string[];
	}>;
}

async function getPostFromParams(params: Awaited<PostPageProps["params"]>) {
	const resolvedParams = await params;
	const slug = resolvedParams?.slug?.join("/");
	const post = posts.find((post) => post.slugAsParams === slug);
	return post;
}

export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	const resolvedParams = await params;
	const post = await getPostFromParams(resolvedParams);

	if (!post) {
		return {};
	}

	const ogSearchParams = new URLSearchParams();
	ogSearchParams.set("title", post.title);

	return {
		title: post.title,
		description: post.description,
		authors: { name: siteConfig.author },
		openGraph: {
			title: post.title,
			description: post.description,
			type: "article",
			url: post.slug,
			images: [
				{
					url: `/api/og?${ogSearchParams.toString()}`,
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
			images: [`/api/og?${ogSearchParams.toString()}`],
		},
	};
}

export default async function PostPage({ params }: PostPageProps) {
	const resolvedParams = await params;
	const post = await getPostFromParams(resolvedParams);

	if (!post || !post.published) {
		notFound();
	}

	return (
		<article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto mt-5">
			<h1 className="mb-2 text-accent font-semibold">{post.title}</h1>
			{post.description ? (
				<p className="text-xl mt-0 text-text">{post.description}</p>
			) : null}
			<hr className="my-4" />
			<MDXContent code={post.body} />
			<div className="mt-6">
				<Link
					href="/blog"
					className="inline-block text-white bg-primary py-2 px-4 rounded-lg hover:bg-primary-dark transition">
					Back to The Thought Space
				</Link>
			</div>
		</article>
	);
}
