import { FaWhatsapp } from 'react-icons/fa'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94773214141"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-float fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-white bg-[#25D366] text-white shadow-glow transition duration-300 hover:scale-105"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}

export default WhatsAppButton
