import { posts } from "#.site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { sortPosts } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "My blog",
	description: "This is a description",
};

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
	searchParams: Promise<{
		page?: string;
	}>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
	const currentPage = Number((await searchParams)?.page) || 1;
	const sortedPosts = sortPosts(posts.filter((post) => post.published));
	const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

	const mostRecentDate = sortedPosts.length > 0 ? sortedPosts[0].date : null;

	const displayPosts = sortedPosts.slice(
		POSTS_PER_PAGE * (currentPage - 1),
		POSTS_PER_PAGE * currentPage
	);

	return (
		<div className="container max-w-4xl py-6 lg:py-10">
			<div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
				<div className="flex-1 space-y-4">
					{/* <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1> */}
					<p className="text-xl text-muted-foreground">
						Explore my collection of posts filled with ideas, reflections, and
						insights across various topics. Dive in, read through, and if you
						have any questions or feedback, feel free to reach out to me on
						Instagram or via email.
					</p>
				</div>
			</div>
			<h1 className="inline-block font-black text-4xl lg:text-5xl mt-10">Reflections and Insights</h1>
			<hr className="mt-8" />
			{displayPosts?.length > 0 ? (
				<ul className="flex flex-col">
					{displayPosts.map((post) => {
						const { slug, date, title, description } = post;
						const isNew = date === mostRecentDate;
						return (
							<li key={slug}>
								<PostItem
									slug={slug}
									date={date}
									title={title}
									description={description}
									isNew={isNew}
								/>
							</li>
						);
					})}
				</ul>
			) : (
				<p>Nothing to see here yet</p>
			)}
			<QueryPagination totalPages={totalPages} className="justify-end mt-4" />
		</div>
	);
}
