export default function MobileNavbar({ state, isBorder }) {
  return (
    <>
      <section className={`flex items-center text-white transition ease-in-out duration-300 ${isBorder && "border px-2 rounded"}`}>
        <button aria-label="toggle navigation menu" onClick={state}>
          <span className="w-[30px] h-[2px] my-2 block bg-white"></span>
          <span className="w-[30px] h-[2px] my-2 block bg-white"></span>
          <span className="w-[30px] h-[2px] my-2 block bg-white"></span>
        </button>
      </section>
    </>
  );
}
