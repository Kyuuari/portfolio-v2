// import { Html } from "@react-three/drei";
import MenuBar from "./MenuBar";
import { FaGithub, FaInstagram, FaBehance, FaLinkedin } from "react-icons/fa";

export function Origin() {
  return (
    <div className="absolute top-0 left-0 grow">
      <div className="font-bol fixed left-24 -bottom-8 z-[100] origin-left rotate-90 whitespace-nowrap text-right text-base">
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
          {/* <FaLinkedin className="-rotate-90" /> */}
        </div>
      </div>

      <p
        className="font-bol fixed bottom-0 right-4 origin-right rotate-90 whitespace-nowrap text-right text-base"
        // style={{
        //   transform: "rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)",
        // }}
      >
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
      >
        {/* <div style={{ width: 10 }} /> */}
      </div>
    </div>
  );
}

export function Underlay() {
  return (
    <>
      {/* <div className="absolute bottom-0 right-0 bg-red-600 "> */}
      <div className="flex flex-row">
        <p className="origin-right translate-y-full rotate-90 whitespace-nowrap p-2 text-sm font-bold">
          About &nbsp;&nbsp;&nbsp;&nbsp; ●
        </p>
        <p className="origin-right translate-y-full rotate-90 whitespace-nowrap p-2 text-sm font-bold">
          Projects &nbsp;&nbsp;&nbsp;&nbsp; ●
        </p>
        {/* </div> */}
      </div>
    </>
  );
}

export function Overlay() {
  return (
    <>
      <MenuBar />
    </>
  );
}
