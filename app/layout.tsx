import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '2nd Open SSUmall Seminar | GDGoC Soongsil',
  description: '2025년 6월 21일 숭실대학교에서 열리는 학생 개발자를 위한 특별한 세미나. GDGoC 졸업생과 현직 멤버들의 실무 경험을 공유합니다.',
  keywords: 'GDGoC, Google Developer Groups, 숭실대학교, 개발자 세미나, 학생 개발자, SSUmall',
  openGraph: {
    title: '2nd Open SSUmall Seminar',
    description: '학생 개발자들을 위한 특별한 세미나 - 함께 성장하고, 미래를 그려보세요',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}