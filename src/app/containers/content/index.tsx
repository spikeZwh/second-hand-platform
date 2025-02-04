'use server';

import Image from 'next/image';
import Link from 'next/link';
import type { Item } from '@/app/lib/types';
import Pagination from './pagination';

const total = 100;

interface Content {
    searchParams?: Promise<{
        item_name?: string;
        page?: string;
    }>;
}

export default async function Content(props: Content) {
    const totalPages: number = total;
    const searchParams = await props.searchParams;
    const currentPage = Number(searchParams?.page) || 1;
    const item_name = searchParams?.item_name || '';
    let fetchUrl = `https://6795a7f6aad755a134ec7096.mockapi.io/api/items?page=${currentPage}&limit=9`;
    if (item_name) {
        fetchUrl += `&item_name=${item_name}`;
    }
    const response = await fetch(fetchUrl);
    const items: Item[] = await response.clone().json();
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl max-w-7xl">
                <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10">
                    {items?.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-square overflow-hidden bg-neutral-50">
                                <Image
                                    alt={product.item_name}
                                    src={"/1.webp"}
                                    width={512}
                                    height={512}
                                    fetchPriority="high"
                                    className="h-full w-full object-contain object-center p-2"
                                    sizes="512px"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link href={`/item/${product.id}`}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.item_name}
                                        </Link>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-200  mt-10" />
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    )
}
