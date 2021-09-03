import React, {useEffect} from "react";
import "tailwindcss/tailwind.css";
import "../css/custom.css";
import {AppProps} from "next/app";
import {SWRConfig} from "swr";
import {APIResponse, HttpException} from "nextkit";
import Head from "next/head";
import Navbar from "../components/Navbar";
import AOS from "aos";

export default function App({Component, pageProps}: AppProps) {
	useEffect(() => {
		AOS.init();
	});

	return (
		<SWRConfig
			value={{
				async fetcher<T>(url: string) {
					const request = await fetch(url);
					const body = (await request.json()) as APIResponse<T>;

					if (!body.success) {
						throw new HttpException(request.status, body.message);
					}

					return body.data;
				},
			}}
		>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="stylesheet"
					href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
					integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
					crossOrigin="anonymous"
				/>
			</Head>
			<div className="bg-primary">
				<Navbar />
				<Component {...pageProps} />
			</div>
		</SWRConfig>
	);
}
