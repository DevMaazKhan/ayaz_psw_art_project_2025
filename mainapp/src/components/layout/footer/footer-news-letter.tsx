import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FooterNewsLetter = () => {
  return (
    <div className="flex items-end">
      <div className="px-1.5 flex-1">
        <Input placeholder="Email address" className="border-0 border-b-white/70 font-[montserrat] font-bold pl-0 pt-2.5 pr-3 pb-1.5 placeholder:text-white h-auto text-[16px] box-border rounded-none border-b-2 ring-0 focus-visible:ring-0 focus-visible:border-b-white/70" />
      </div>
      <div className="px-1.5">
        <Button variant="outline" size="lg" className="uppercase">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default FooterNewsLetter;
