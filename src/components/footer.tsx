import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t bg-muted text-muted-foreground mt-12">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        {/* Logos */}
        <div className="flex items-center gap-6">
          <a href="http://www.ipn.mx" target="_blank" rel="noopener noreferrer">
            <Image src="/students/img/ipn_logo.png" alt="IPN Logo" width={100} height={40} />
          </a>
          <a href="http://www.cic.ipn.mx" target="_blank" rel="noopener noreferrer">
            <Image src="/students/img/cic.png" alt="CIC Logo" width={100} height={40} />
          </a>
        </div>

        {/* Text */}
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Network and Data Science Laboratory · CIC-IPN
        </p>
      </div>
    </footer>
  )
}
