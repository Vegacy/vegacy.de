import {useRouter} from "next/router";
import {useEffect} from "react";

const redirects: {[index: string]: string} = {
	discord: "https://discord.gg/XWfXSJrcCx",
};
export default function Redirect() {
	const router = useRouter();
	const redirect = router.query.redirect as string;
	const url = redirects[redirect] ? redirects[redirect] : "/";

	useEffect(() => {
		router.push(url);
	});

	return <p className="text-white text-center h-screen">Redirecting to {url}...</p>;
}
