import Search from "../_components/Search";

export default function RecipeLayout({children}:any) {
    return (
        <div>
            <Search />
            <main className="m-4">{children}</main>
        </div>
    );
}