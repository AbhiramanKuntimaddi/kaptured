import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Calendar } from "lucide-react";

interface PostItemProps {
	slug: string;
	title: string;
	description?: string;
	date: string;
	isNew?: boolean;
}

export function PostItem({ slug, title, description, date, isNew }: PostItemProps) {
	return (
		<article className="flex flex-col gap-2 border-border border-b py-3">
			<div className="flex items-center gap-2">
				<h2 className="text-2xl font-medium text-accent">
					<Link className="mr-2" href={slug}>{title}</Link>
				</h2>
				{isNew && (
					<span className="text-sm font-bold text-text bg-accent px-2 py-1 rounded">
						New
					</span>
				)}
			</div>
			<div className="max-w-none text-muted-foreground font-thin">{description}</div>
			<div className="flex justify-between items-center">
				<dl>
					<dt className="sr-only">Published On</dt>
					<dd className="text-sm sm:text-base font-medium flex items-center gap-1">
						<Calendar className="h-4 w-4 text-text"/>
						<time dateTime={date} className="text-text">{formatDate(date)}</time>
					</dd>
				</dl>
				<Link
					href={slug}
					className={cn(buttonVariants({ variant: "link" }), "py-0 text-accent underline decoration-wavy")}>
					Delve deeper →
				</Link>
			</div>
		</article>
	);
}
