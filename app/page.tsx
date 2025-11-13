import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { CEO } from "@/components/CEO"; // NEW
import { Creds } from "@/components/Creds";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Services />
      <Industries />
      <CEO /> {/* NEW */}
      <Creds />
      <Contact />
    </>
  );
}
