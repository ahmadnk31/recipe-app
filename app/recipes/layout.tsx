import { Suspense } from "react";
import Search from "../_components/Search";
import Loading from "../loading";
import Link from "next/link";

export default function RecipeLayout({children}:any) {
    return (
        <div>
            <Link className="container max-sm:ml-4 mx-auto text-orange-500 text-3xl block mb-8 mt-4 font-bold" href='/'>Food 🥦</Link>
            <Search />
            <Suspense fallback={<Loading />}>
            <main className="m-4">{children}</main>
            </Suspense>
        </div>
    );
}