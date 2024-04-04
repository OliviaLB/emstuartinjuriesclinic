export const metadata = {
	title: 'App Router',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="/icon.png"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
