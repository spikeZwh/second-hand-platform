import Content from './containers/content';
import { Suspense } from 'react';
import Loading from '@/app/components/loading';

interface HomeProps {
    searchParams?: Promise<{
        item_name?: string;
        page?: string;
    }>;
}

export default async function Home(props: HomeProps) {
    const searchParams = await props.searchParams;
    const query = searchParams?.item_name || '';
    const currentPage = Number(searchParams?.page) || 1;
    return (
        <Suspense key={query + currentPage} fallback={<Loading />}>
            <Content searchParams={props.searchParams} />
        </Suspense>
    );
}
