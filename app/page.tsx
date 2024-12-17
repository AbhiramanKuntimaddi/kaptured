import { posts } from "@/.velite";
import { PostItem } from "@/components/post-item";
import { buttonVariants } from "@/components/ui/button";
import { cn, sortPosts } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
	const latestPosts = sortPosts(posts).slice(0, 3);
	return (
		<>
			<section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-8 lg:py-32">
				<div className="container flex flex-col gap-4 text-center">
					<h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
						Welcome to <span className="text-accent underline  underline-offset-4 italic">KAptured</span>
					</h1>
					<h1 className=" font-normal text-text text-balance leading-tight italic mt-6">
						What sparks your curiosity today?
					</h1>
					<p className="max-w-[42rem] mx-auto sm:text-xl text-balance mt-6 text-text">
						Where thoughts unfold into stories, and experiences blossom into
						reflections. Step into my space where fleeting moments transform into
						musings and ideas take shape. Let’s explore these sparks together.
					</p>
					<div className="flex flex-col gap-4 justify-center sm:flex-row mt-10">
						<Link
							href="/blog"
							className={cn(
								buttonVariants({ size: "lg" }),
								"w-full sm:w-fit bg-accent text-text"
							)}>
							Discover My Reflections
						</Link>
					</div>
				</div>
			</section>
			<section className="container max-w-4xl py-6 lg:py-10 flex flex-col space-y-6 mt-1">
				<h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
					Latest Posts
				</h2>
				<ul className="flex flex-col">
					{latestPosts.map(
						(post) =>
							post.published && (
								<li
									key={post.slug}
									className="first:border-t first:border-border text-text">
									<PostItem
										slug={post.slug}
										title={post.title}
										description={post.description}
										date={post.date}
									/>
								</li>
							)
					)}
				</ul>
			</section>
		</>
	);
}
