'use client';

import { BellIcon } from '@heroicons/react/24/outline';
import { Button } from '@headlessui/react';

export default function Notice() {
    return (
        <Button
            onClick={() => {
                console.log('hello');
            }}
            className="relative cursor-pointer mr-2"
        >
            <BellIcon aria-hidden="true" className="size-6" />
        </Button>
    )
};
