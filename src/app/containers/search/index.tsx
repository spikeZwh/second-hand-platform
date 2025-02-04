'use client';

import { Input, Button } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { z } from 'zod';

export default function Search() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const schema = z.object({
        item_name: z.string({
            invalid_type_error: 'Invalid item_name',
        }),
    });

    async function action(formData: FormData) {
        const validatedFields = schema.safeParse({
            item_name: formData.get('item_name'),
        });
        if (!validatedFields.success) {
            throw new Error(validatedFields.error.flatten().fieldErrors.item_name?.toString())
        }
        const term = formData.get('item_name') as string;
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('item_name', term);
        } else {
            params.delete('item_name');
        }
        replace(`${pathname}?${params.toString()}`);
    };
    return (
        <form action={action} className="mr-8 group relative my-2 flex w-full items-center justify-items-center text-sm lg:w-80">
            <label className="w-full">
                <Input
                    type="text"
                    name="item_name"
                    placeholder="请输入搜索内容"
                    defaultValue={searchParams.get('item_name')?.toString()}
                    className="h-10 w-full rounded-md border border-neutral-300 bg-transparent bg-white px-4 py-2 pr-10 text-sm text-black placeholder:text-neutral-500 focus:border-black focus:ring-black"
                />
            </label>
            <div className="absolute inset-y-0 right-0">
                <Button type="submit" className="inline-flex aspect-square w-10 items-center justify-center text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 group-invalid:pointer-events-none group-invalid:opacity-80">
                    <MagnifyingGlassIcon className="lucide lucide-search h-5 w-5" />
                </Button>
            </div>
        </form>
    )
};
