import { MessageCircle, PhoneCall } from "lucide-react";

const PHONE_E164 = "+917428114918";
const PHONE_WA = "917428114918";

export default function FloatingContactButtons() {
  const whatsappHref = `https://wa.me/${PHONE_WA}`;
  const callHref = `tel:${PHONE_E164}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title={`WhatsApp: ${PHONE_E164}`}
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#FF40EB]/40 bg-black/70 backdrop-blur hover:border-[#FF40EB] hover:bg-[#FF40EB]/10 transition"
      >
        <MessageCircle className="h-6 w-6 text-[#FF40EB] group-hover:scale-110 transition" />
      </a>

      <a
        href={callHref}
        aria-label="Call"
        title={`Call: ${PHONE_E164}`}
        className="group inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#FF40EB]/40 bg-black/70 backdrop-blur hover:border-[#FF40EB] hover:bg-[#FF40EB]/10 transition"
      >
        <PhoneCall className="h-6 w-6 text-[#FF40EB] group-hover:scale-110 transition" />
      </a>
    </div>
  );
}
