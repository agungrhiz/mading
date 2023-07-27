import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-full items-center justify-center px-6 py-12 lg:px-8">
      <div className="space-y-6">
        <article className="prose text-center ">
          <h1>JeWePe</h1>
          <p>
            JeWePe adalah majalah dinding yang berisi artikel-artikel
            menarik yang dapat Anda baca secara online.
            Untuk membaca artikel, silakan klik tombol di bawah ini.
          </p>
        </article>
        <div className="flex justify-center">
          <Link href="/article" className="btn">
            Baca
          </Link>
        </div>
      </div>
    </div>
  );
}
