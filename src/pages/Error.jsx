import MainNavigation from "../components/MainNavigation";

export default function Error() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>Some error occurred</h1>
        <p>Couldn't find the requested page!</p>
      </main>
    </>
  );
}
