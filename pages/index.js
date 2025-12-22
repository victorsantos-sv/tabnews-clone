function Home() {
  return (
    <div className="page">
      <div className="card">
        <span className="brand">Voynara</span>
        <h1> Em construção </h1>
      </div>

      <style jsx>{`
        :global(html, body) {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: linear-gradient(to bottom, #a8b2a3, #e7e3da);
          font-family:
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Helvetica,
            Arial,
            sans-serif;
        }

        .page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card {
          padding: 2.25rem 3rem;
          background: rgba(255, 255, 255, 0.55);
          backdrop-filter: blur(12px);
          border-radius: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          text-align: center;

          /* Fade-in animation */
          opacity: 0;
          transform: translateY(8px);
          animation: fadeIn 0.8s ease-out forwards;
        }

        h1 {
          margin: 0;
          color: #2b2e2b;
          font-size: 2rem;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .brand {
          display: block;
          margin-top: 0.75rem;
          color: #6b7168;
          font-size: 0.75rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;
