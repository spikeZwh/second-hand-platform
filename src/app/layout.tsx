import type { Metadata } from "next";
import { Disclosure } from '@headlessui/react';
import Navigation from './components/navigation'
import Profile from './containers/profile';
import Notice from './containers/notice';
import Search from './containers/search';
import { Suspense } from 'react'

import './globals.css';

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh">
            <body className="min-h-screen flex flex-col">
                <header className="bg-neutral-100/50">
                    <Disclosure as="nav">
                        <div className="mx-auto max-w-7xl">
                            <div className="relative flex h-16 items-center justify-between">
                                <Navigation />
                                <div className="inset-y-0 right-0 flex items-center pr-2">
                                    <Search />
                                    <Notice />
                                    <Profile />
                                </div>
                            </div>
                        </div>
                    </Disclosure>
                </header>
                <main className="flex-1 min-h-[calc(100vh-165px)]">
                    <Suspense>
                        {children}
                    </Suspense>
                </main>
                <footer className="border-neutral-300 bg-neutral-50">
                    <div className="mx-auto max-w-7xl px-4 lg:px-8">
                        {/* <div className="grid grid-cols-3 gap-8 py-16">
                            <div>
                                <h3 className="text-sm font-semibold text-neutral-900">Saleor</h3>
                                <ul className="mt-4 space-y-4">
                                    <li className="text-sm"><a href="/default-channel/pages/about">About</a></li>
                                    <li className="text-sm"><a href="https://docs.saleor.io/">Documentation</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-neutral-900">Collections</h3>
                                <ul className="mt-4 space-y-4">
                                    <li className="text-sm"><a href="/default-channel/collections/featured-products">Featured Products</a></li>
                                    <li className="text-sm"><a href="/default-channel/collections/summer-picks">Summer Picks</a></li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row">
                            <p className="text-sm ">Copyright &copy;
                                2025
                            </p>
                            <p className="flex gap-1 text-sm text-neutral-500">
                                Powered by
                                <a target="_blank" href="https://saleor.io/">ZHOU WENHUI</a>
                                <a target="_blank" className="opacity-30" href="https://github.com/spikeZwh">
                                    <img alt="Saleor github repository" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="/github-mark.svg" />
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
