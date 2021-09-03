export default function Navbar() {
	const showMenu = () => {
		const menuItems = document.getElementById("items");
		menuItems?.classList.toggle("hidden");
	};

	return (
		<nav className="flex items-center justify-between flex-wrap p-6 text-white sticky top-0 z-50">
			<div className="flex items-center flex-no-shrink mr-6">
				<img src="/assets/vegacy-t.png" width="32px"></img>
				{/* <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span> */}
			</div>
			<div className="block lg:hidden">
				<button
					className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light"
					onClick={showMenu}
				>
					<svg className="h-3 w-3 bg-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div className="w-full flex-grow hidden lg:flex lg:items-center lg:w-auto" id="items">
				<div className="text-sm lg:flex-grow">
					<a href="#features" className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter mr-4">
						Features
					</a>
				</div>
				{/* <div>
					<a
						href="#"
						className="inline-block text-sm px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-teal hover:text-black hover:bg-white mt-4 lg:mt-0"
					>
						Server Beitreten
					</a>
				</div> */}
			</div>
		</nav>
	);
}
