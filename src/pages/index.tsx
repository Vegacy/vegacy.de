import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Vegacy Roleplay</title>
			</Head>
			{/* SECTION 1 (INTRO) */}
			<div className="text-center bg-wave-1 aspect-w-2 aspect-h-1 w-full bg-no-repeat bg-cover bg-center">
				<div className="pt-[12%] flex flex-col items-center">
					<div className="flex flex-row bg-black bg-opacity-20 rounded-full p-16 space-x-4">
						<div className="flex flex-col items-center">
							<img src="/assets/vegacy-t.png" width="118px" />
							<h1 className="text-primary opacity-90 text-xl font-bold mt-2">VEGACY ROLEPLAY</h1>
						</div>
						<div className="flex flex-col items-center justify-center text-white">
							<div className="bg-secondary bg-opacity-80 p-2 rounded-lg">
								<a href="https://vegacy.de/discord">
									<i className="fab fa-discord"></i> Discord Server
								</a>
							</div>
							<div className="bg-secondary bg-opacity-80 p-2 rounded-lg mt-3">
								<a href="https://forum.vegacy.de/">
									<i className="fas fa-globe"></i> Forum
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* SECTION 2 (FEATURES)*/}
			<div
				id="features"
				className="text-center bg-wave-2 aspect-w-2 aspect-h-1 w-full bg-no-repeat bg-cover bg-center"
			>
				<div className="pt-[12%] flex flex-col items-center">
					<div className="flex flex-row bg-black bg-opacity-20 rounded-full p-16 space-x-4">
						<div className="flex flex-col items-center">
							<img src="/assets/vegacy-t.png" width="118px" />
							<h1 className="text-primary opacity-90 text-xl font-bold mt-2">VEGACY ROLEPLAY</h1>
						</div>
						<div className="flex flex-col items-center justify-center text-white">
							<div className="bg-secondary bg-opacity-80 p-2 rounded-lg">
								<a href="https://vegacy.de/discord">
									<i className="fab fa-discord"></i> Discord Server
								</a>
							</div>
							<div className="bg-secondary bg-opacity-80 p-2 rounded-lg mt-3">
								<a href="https://forum.vegacy.de/">
									<i className="fas fa-globe"></i> Forum
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* SECTION 3 (ROADMAP)*/}
			<div
				id="roadmap"
				className="text-center bg-wave-2 aspect-w-2 aspect-h-1 w-full bg-no-repeat bg-cover bg-center"
			>
				<div className="pt-[12%] flex flex-col items-center">
					<div className="flex flex-row bg-black bg-opacity-20 rounded-full p-16 space-x-4">
						<div className="flex flex-col items-center">
							<img src="/assets/vegacy-t.png" width="118px" />
							<h1 className="text-primary opacity-90 text-xl font-bold mt-2">VEGACY ROLEPLAY</h1>
						</div>
						<div className="flex flex-col items-center justify-center text-white">
							<div className="bg-secondary bg-opacity-80 p-2 rounded-lg">
								<a href="https://vegacy.de/discord">
									<i className="fab fa-discord"></i> Discord Server
								</a>
							</div>
							<div className="bg-secondary bg-opacity-80 p-2 rounded-lg mt-3">
								<a href="https://forum.vegacy.de/">
									<i className="fas fa-globe"></i> Forum
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
