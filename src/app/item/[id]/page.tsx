import { Item } from '@/app/lib/types';
import { notFound } from 'next/navigation';

interface DetailsProps {
    params: Promise<{ id: string }>
}

export default async function Details(props: DetailsProps) {
    const searchParams = await props.params;
    const id = searchParams?.id || '';
    const response = await fetch(`https://6795a7f6aad755a134ec7096.mockapi.io/api/items/${id}`);
    if (response.status === 404) {
        notFound();
    }
    const item: Item | undefined = await response.clone().json();
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{item?.item_name}</h2>
                    <p className="mt-4 text-gray-500">
                        {item?.description}
                    </p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {/* {features.map((feature) => (
                            <div key={feature.name} className="border-t border-gray-200 pt-4">
                                <dt className="font-medium text-gray-900">{feature.name}</dt>
                                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                            </div>
                        ))} */}
                    </dl>
                    <a
                        href="#"
                        className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                    >
                        添加到订阅
                    </a>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-01.jpg"
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-02.jpg"
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        alt="Side of walnut card tray with card groove and recessed card area."
                        src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-03.jpg"
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-04.jpg"
                        className="rounded-lg bg-gray-100"
                    />
                </div>
            </div>
        </div>
    )
}