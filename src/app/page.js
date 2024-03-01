import { HeroParallax } from "@/components/ui/hero-parallax";
import Image from "next/image";
import lark from "../../public/Lark.png"
import ocsheet from "../../public/ocSheet.png"
import SaltaCat from "../../public/SaltaCat.png"
import sc from "../../public/sc.png"


export default function Home() {
  const products = [
    {
      title: "SaltaCompra",
      link: "https://saltacompra.gob.ar/",
      thumbnail:
      sc,
    },
    {
      title: "Sheet APP",
      link: "sheets.new",
      thumbnail:
        ocsheet,
    },
    {
      title: "Catálogo",
      link: "https://editrix.ai",
      thumbnail:
        SaltaCat,
    },
    {
      title: "LARK",
      link: "https://app.pixelperfect.quest",
      thumbnail:
      lark,
    },
    {
      title: "Moonbeam",
      link: "https://gomoonbeam.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    },
    {
      title: "Cursor",
      link: "https://cursor.so",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    },
    {
      title: "Rogue",
      link: "https://userogue.com",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    },
   
    {
      title: "Editorially",
      link: "https://editorially.org",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    },
    {
      title: "Editrix AI",
      link: "https://editrix.ai",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    },
    {
      title: "Pixel Perfect",
      link: "https://app.pixelperfect.quest",
      thumbnail:
        "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    },
    
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroParallax products={products}/>
    </main>
  );
}
