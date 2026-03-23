import { FaWhatsapp } from 'react-icons/fa'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94771234567"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#25D366] text-white shadow-glow transition duration-300 hover:scale-105"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}

export default WhatsAppButton
