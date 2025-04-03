export default function Navbar() {
  return (
    <nav>
      <ul className="flex text-white lg:gap-[5.188rem] md:gap-[3rem]">
        {["Home", "Projects", "About", "Skill", "Contact"].map((item) => (
          <li>
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-violet-500 active:text-white font-semibold transition ease-in-out duration-300">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
