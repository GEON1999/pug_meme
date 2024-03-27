import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between ">
            <Image
                className="w-full h-full absolute"
                src="/pug.jpeg"
                alt="kim img"
                width={200}
                height={100}
            />
            <nav className="fixed text-5xl  mt-10 text-red-600 flex mr-[120vh]">
                <Link target={"_blank"} href="https://twitter.com/pug_smokin" data-text="Twitter" className="left-[40vh]">Twitter</Link>
                <Link target={"_blank"} href="https://t.me/smokin_pug" data-text="Telegram" className="left-[80vh]">Telegram</Link>
                <Link target={"_blank"} href="https://birdeye.so/token/EaR4ooS5yJ1DxvRPoyVXTYoTBekDhZimjonJ8V1PZk6L?chain=solana" data-text="Buy" className="left-[120vh]">Buy Now</Link>
                <Link target={"_blank"} href="https://birdeye.so/token/EaR4ooS5yJ1DxvRPoyVXTYoTBekDhZimjonJ8V1PZk6L?chain=solana" data-text="Discord" >Chart</Link>
            </nav>


        </main>
    );
}
