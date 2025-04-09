import Image from 'next/image';

export default function LoaderPage() {
  return (
    <div className="flex flex-col h-16 w-14 relative items-center justify-center gap-4">
      <Image
        className=" aspect-square"
        src="/assets/svg/zeoapi.svg"
        alt="logo"
        height={28}
        width={28}
        priority
      />
      <div className="custom-loader h-16 w-16 absolute animate-spin text-primary z-10"></div>

      <style jsx>{`
        .custom-loader {
          border-top: 3px solid #7D47FC;
          border-right: 3px solid transparent;
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          animation: spin 1.5s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>

  );
}
