import '@/app/ui/global.css';
import fonts

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
