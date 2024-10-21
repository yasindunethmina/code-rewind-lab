import Image from "next/image";
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <div className="hero-section">
      <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10 ">
        <div className="text-center lg:text-start space-y-6">
          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0 text-balance">
            Stripe subscriptions are intimidating, but they don&apos;t have to
            be. Let&apos;s prove it.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-full md:w-1/3">Get Started</Button>
          </div>
        </div>
        <div className="z-10">
          <Image
            src="/hero.png"
            width={986}
            height={512}
            alt=""
            className="rounded-md select-none pointer-events-none"
          />
        </div>

        <div className="shadow"></div>
      </section>
    </div>
  );
};
