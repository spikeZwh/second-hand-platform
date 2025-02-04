'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface PaginationProps {
    totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get('page')) || 1;
    const createPageURL = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };
    return (
        <div className="flex flex-1 items-center justify-between mt-5 mb-10">
            <div>
                <p className="text-sm text-gray-700">
                    展示 <span className="font-medium">1</span> 至 <span className="font-medium">{Math.ceil(totalPages / 10)}</span> of{' '}
                    <span className="font-medium">{totalPages}</span> 物品
                </p>
            </div>
            <div>
                <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
                    <Link
                        href={createPageURL(1)}
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon aria-hidden="true" className="size-5" />
                    </Link>
                    {
                        Array(Math.ceil(totalPages / 10)).fill(0).map((_, index) => {
                            return (
                                <Link
                                    href={createPageURL(index + 1)}
                                    key={index}
                                    className={currentPage === index + 1 ? 'relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' : `relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                                >
                                    {index + 1}
                                </Link>
                            );
                        })
                    }
                    <Link
                        href={createPageURL(Math.ceil(totalPages / 10))}
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon aria-hidden="true" className="size-5" />
                    </Link>
                </nav>
            </div>
        </div>
    )
}