import "./globals.css";

export const metadata = {
  title: "SeeYouOnThat",
  description: "A private gateway to the world of business & luxury",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}