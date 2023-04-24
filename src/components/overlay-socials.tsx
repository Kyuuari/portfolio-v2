// import { Html } from "@react-three/drei";
import MenuBar from "./menu-bar";
import { FaGithub, FaInstagram, FaBehance, FaLinkedin } from "react-icons/fa";

export function Origin() {
  return (
    <div className="absolute top-0 left-0 grow ">
      <div className="fixed left-24 -bottom-8 origin-left rotate-90 whitespace-nowrap text-right text-base font-bold">
        {/* &nbsp;&nbsp;&nbsp;&nbsp; + ● ┓ */}
        <div className="grid gap-4">
          <a aria-label="Go to github" href="https://github.com/Kyuuari">
            <FaGithub
              size={24}
              className="-rotate-90 hover:text-primary-focus"
            />
          </a>

          <a
            aria-label="Go to instagram"
            href="https://www.instagram.com/kyuuari/"
          >
            <FaInstagram
              size={24}
              className="-rotate-90 hover:text-primary-focus"
            />
          </a>

          <a
            aria-label="Go to behance"
            href="https://www.behance.net/chestercari"
          >
            <FaBehance
              size={24}
              className="-rotate-90 hover:text-primary-focus"
            />
          </a>

          <a
            aria-label="Go to linkedin"
            href="https://www.linkedin.com/in/chestercari/"
          >
            <FaLinkedin
              size={24}
              className="-rotate-90 hover:text-primary-focus"
            />
          </a>
        </div>
      </div>

      <p className="fixed bottom-0 right-4 origin-right rotate-90 whitespace-nowrap text-right text-base font-semibold">
        Chester Cari &nbsp;&nbsp;&nbsp; ┓
      </p>
      <div
        style={{
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      ></div>
    </div>
  );
}
export function Overlay() {
  return (
    <div className="sticky z-[100] text-white mix-blend-difference">
      <Origin />
      <MenuBar />
    </div>
  );
}
