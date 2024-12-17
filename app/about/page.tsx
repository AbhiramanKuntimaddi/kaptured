import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Me",
	description: "Information about me",
};

export default async function AboutPage() {
	return (
		<div className="container mx-auto px-6 py-12 lg:py-20">
			<div className="flex flex-col items-center text-center">
				<Avatar className="h-40 w-40 mb-6 shadow-lg">
					<AvatarImage src="/avatar.png" alt={siteConfig.author} />
					<AvatarFallback className="text-4xl font-bold">AK</AvatarFallback>
				</Avatar>

				<h1 className="text-5xl font-extrabold tracking-tight mb-2 text-accent">
					{siteConfig.author}
				</h1>
				<h2 className="text-xl font-medium text-text mb-6 italic">
					Full-time Software Developer <span className="text-primary">&</span>{" "}
					<span className="underline decoration-dotted">Weekend Wordsmith</span>
				</h2>

				<div className="w-16 border-t-4 border-secondary mb-6"></div> 
			</div>

			<div className="max-w-3xl mx-auto text-lg leading-relaxed text-text space-y-6">
				<p>
					During the <span className="font-medium text-accent">weekdays</span>
					, I write code in{" "}
					<span className="underline decoration-solid">Java</span>; solving
					complex problems and building thoughtful solutions. But when the
					<span className="font-medium text-accent"> weekend </span> arrives,
					I shift gears and write reflections, musings, and ideas inspired by
					the world around me.
				</p>

				<p>
					My journey is shaped by my love for{" "}
					<span className="font-semibold text-accent">
						technology, mechanical keyboards, music
					</span>
					, and the tranquility of{" "}
					<span className="italic text-accent">nature</span>. I find beauty in
					the rhythm of <span className="italic text-accent">keystrokes</span>, the serenity of <span className="italic text-accent">quiet walks</span>, and the melody
					of a <span className="italic text-accent">favorite song</span> - each experience adding fuel to my creativity.
				</p>

				<p className="border-l-4 border-secondary pl-4 italic">
					<strong>KAptured</strong> is where logic meets imagination. It’s my
					personal space to transform fleeting thoughts into words, creating a
					tapestry of stories, observations, and reflections. Every post offers
					a glimpse into the landscapes of my mind, inviting you to journey
					alongside.
				</p>
			</div>

			<div className="flex justify-center mt-12">
				<div className="w-32 border-t-2 border-secondary"></div>
			</div>
		</div>
	);
}
