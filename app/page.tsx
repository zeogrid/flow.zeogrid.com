import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button"; 
 
export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-4">
      <div className="flex flex-wrap items-center justify-center"><Button className="transition-all ease-in-out duration-500 delay-300">flow.zeogrid.com</Button>
      <Button variant={"destructive"}>flow.zeogrid.com</Button>
      <Button variant={"link"}>flow.zeogrid.com</Button>
      <Button variant={"secondary"}>flow.zeogrid.com</Button>
      <Button variant={"outline"}>flow.zeogrid.com</Button></div>
      <ModeToggle/>
    </div>
  );
}
