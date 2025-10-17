export const metadata = {
  title: "Abdullah Tariq — Portfolio",
  description: "Cloud • Data/AI • CRO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
  