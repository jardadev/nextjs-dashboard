import '@/app/ui/global.css';
import { fonts } from './ui/fonts';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${fonts.className} antialiased`}>{children}</body>
		</html>
	);
}
