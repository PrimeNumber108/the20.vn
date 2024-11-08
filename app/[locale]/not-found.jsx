import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-col w-screen h-screen gap-5 bg-black flex-center">
      <h2 className="text-display-lg">Not Found</h2>
      <p className="text-body-lg">Could not find requested resource</p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
