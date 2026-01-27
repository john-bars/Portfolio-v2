import Image from "next/image";

const PortfolioContent = () => {
  return (
    <div className="px-8 gap-8 md:px-20 py-16 md:py-20 grid md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-5 lg:py-24 lg:px-10 xl:px-40">
      <section className="border-[#dddddd] border rounded-xl p-4 max-w-110">
        <div className="relative aspect-16/10 overflow-hidden rounded-lg">
          <Image
            src="/images/deflow_light.png"
            alt="DevFlow Image"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/3" />
        </div>
        <div className="pt-4">
          <h4 className="text-lg mb-1">
            DevFlow{" "}
            <span className="font-light text-sm tracking-tight">
              (Stack Overflow inspired app)
            </span>
          </h4>

          <p className="text-md text-secondary">Side project</p>
        </div>
      </section>

      <section className="border-[#dddddd] border rounded-xl p-4 max-w-110">
        <Image
          src="/images/devflow_image.png"
          alt="DevFlow Image"
          width={300}
          height={300}
          className="w-full rounded-lg"
        />
        <div className="pt-4">
          <h4 className="text-lg mb-1">
            DevFlow - Stack Overflow inspired app
          </h4>
          <p className="text-md text-secondary">Side project</p>
        </div>
      </section>

      <section className="border-[#dddddd] border rounded-xl p-4 max-w-110">
        <Image
          src="/images/devflow_image.png"
          alt="DevFlow Image"
          width={300}
          height={300}
          className="w-full rounded-lg"
        />
        <div className="pt-4">
          <h4 className="text-lg mb-1">
            DevFlow - Stack Overflow inspired app
          </h4>
          <p className="text-md text-secondary">Side project</p>
        </div>
      </section>
    </div>
  );
};

export default PortfolioContent;
