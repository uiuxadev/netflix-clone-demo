import Head from "next/head";
// import Image from "next/image";

const login = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Image
        src="https://rb.gy/p2hphi"
        fill
        className="-z-10 !hidden opacity-60 sm:!inline object-cover"
        alt="test"
      /> */}
      <picture>
        <img
          src="https://rb.gy/p2hphi"
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          className="-z-10 !hidden opacity-60 sm:!inline object-cover"
          alt="login image"
        />
      </picture>

      <picture>
        <img
          src="https://rb.gy/ulxxee"
          width={150}
          height={150}
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
          alt="logo"
        />
      </picture>

      <form>
        <h1>Sign In</h1>
      </form>
    </div>
  );
};

export default login;