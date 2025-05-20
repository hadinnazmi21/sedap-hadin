import ErrorComponent from "../components/ErrorComponent";

export default function ErrorPage403() {
  return (
    <div>
      <ErrorComponent
        code={""}
        description="Maaf, kamu tidak punya hak akses ke halaman ini. Meskipun kamu sudah login, tidak semua halaman bisa diakses oleh semua pengguna."
        image="/img/Error/400.png"
      />
    </div>
  );
}
