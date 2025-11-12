import { Input } from "../../ui/input";
import SearchCloseButton from "./search-close-btn";

const Search = ({ isIntercepted }: Readonly<{ isIntercepted: boolean }>) => {
  return (
    <section className="z-10 transition-all ease duration-100 fixed top-0 left-0 w-screen h-screen bg-custom text-primary opacity-100 block">
      <SearchCloseButton isIntercepted={isIntercepted} />

      <div className="p-16 animate-fade-in w-5/6 mx-auto">
        <Input
          className="border-0 placeholder:text-black/25 font-bold pl-0 pb-7 pt-11 pr-16 h-auto md:text-7xl box-border rounded-none border-b-2 border-black/20 focus-visible:border-black/50 focus-visible:ring-0"
          placeholder="Search ..."
        />

        {/* Searched content here */}
      </div>
    </section>
  );
};

export default Search;
