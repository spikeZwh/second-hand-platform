'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const navigation = [
    { name: '首页', href: '/' },
    { name: '订阅', href: '/listening' },
]

export default function Navigation() {
    const pathName = usePathname();
    return (
        <div className="flex flex-1 items-center justify-center justify-start">
            <div className="flex space-x-10">
                {navigation.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        aria-current={item.href === pathName ? true : undefined}
                        className={classNames(
                            item.href === pathName ? 'text-stone-950' : 'hover:text-stone-600',
                            'text-stone-500 font-medium',
                        )}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}