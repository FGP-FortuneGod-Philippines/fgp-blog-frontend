const ContactMap = () => {
  return (
    <section className="w-full mt-16">
      <h3 className="text-2xl font-semibold mb-6 text-center">
        Our Location
      </h3>

      <div className="w-full rounded-lg overflow-hidden shadow-lg relative">
        {/* Map */}
        <div className="w-full h-[400px]">
          <iframe
            title="Trium Square Location"
            src="https://www.google.com/maps?q=Trium+Square,+2183+Sen.+Gil+J.+Puyat+Ave,+Pasay+City,+1300+Metro+Manila&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Address Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-8 pb-4 px-4">
          <div className="text-center text-white max-w-2xl mx-auto">
            <p className="font-bold text-lg mb-1">FGP FortuneGod Philippines</p>
            <p className="text-sm mb-1">Unit3211, 32/F Trium Square, Sen. Gil Puyat Ave. Cor.</p>
            <p className="text-sm mb-1">Leveriza Street, Brgy. 37 Pasay City,</p>
            <p className="text-sm">1300 Metro Manila, Philippines</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;